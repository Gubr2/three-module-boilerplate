const noObjectDestructuring = {
  meta: {
    type: 'problem',
    docs: { description: 'Disallow object destructuring' },
    messages: { objectDestructuring: 'Object destructuring is not allowed, read the properties off the object instead' },
    schema: [],
  },
  create(_context) {
    return {
      ObjectPattern(_node) {
        _context.report({ node: _node, messageId: 'objectDestructuring' })
      },
    }
  },
}

const isThisInterfaceChain = (_node) => {
  let node = _node
  while (node.type === 'MemberExpression' && node.object.type !== 'ThisExpression') node = node.object
  return node.type === 'MemberExpression' && !node.computed && node.property.name === 'interface'
}

const noInterfaceAlias = {
  meta: {
    type: 'problem',
    docs: { description: 'Disallow aliasing this.interface properties into local variables' },
    messages: { interfaceAlias: 'Do not alias this.interface properties into local variables, read them off this.interface instead' },
    schema: [],
  },
  create(_context) {
    return {
      VariableDeclarator(_node) {
        if (_node.init?.type === 'MemberExpression' && isThisInterfaceChain(_node.init)) _context.report({ node: _node, messageId: 'interfaceAlias' })
      },
    }
  },
}

const getClass = (_node) => {
  let node = _node.parent
  while (node && node.type !== 'ClassDeclaration' && node.type !== 'ClassExpression') node = node.parent
  return node
}

const getMethod = (_node) => {
  let node = _node.parent
  while (node && node.type !== 'MethodDefinition') node = node.parent
  return node
}

const getMethodName = (_node) => (_node.key.type === 'Identifier' && !_node.computed ? _node.key.name : null)

const isBaseClass = (_class) => Boolean(_class?.id?.name?.startsWith('_'))

const extendsBaseClass = (_class) => _class?.superClass?.type === 'Identifier' && _class.superClass.name.startsWith('_')

const sceneSuperCall = {
  meta: {
    type: 'problem',
    docs: { description: 'Require resize() and dispose() overrides in classes extending a base class to call their super method' },
    messages: { superCall: '{{name}}() overrides the base class method and must call super.{{name}}()' },
    schema: [],
  },
  create(_context) {
    const satisfied = new Set()

    return {
      CallExpression(_node) {
        if (_node.callee.type !== 'MemberExpression' || _node.callee.object.type !== 'Super') return

        const method = getMethod(_node)

        if (method && getMethodName(method) === _node.callee.property.name) satisfied.add(method)
      },
      'MethodDefinition:exit'(_node) {
        const name = getMethodName(_node)

        if (name !== 'resize' && name !== 'dispose') return
        if (!extendsBaseClass(getClass(_node))) return
        if (!satisfied.has(_node)) _context.report({ node: _node.key, messageId: 'superCall', data: { name: name } })
      },
    }
  },
}

const isRenderingGuard = (_context, _statement) => {
  if (_statement.type !== 'IfStatement' || _statement.alternate) return false
  if (_context.sourceCode.getText(_statement.test).replace(/\s/g, '') !== '!this.state.isRendering') return false

  const consequent = _statement.consequent.type === 'BlockStatement' && _statement.consequent.body.length === 1 ? _statement.consequent.body[0] : _statement.consequent

  return consequent.type === 'ReturnStatement' && !consequent.argument
}

const sceneRenderingGuard = {
  meta: {
    type: 'problem',
    docs: { description: 'Require update() and renderPipeline() in classes extending a base class to open with the isRendering guard' },
    messages: { renderingGuard: '{{name}}() must start with if (!this.state.isRendering) return' },
    schema: [],
  },
  create(_context) {
    return {
      MethodDefinition(_node) {
        const name = getMethodName(_node)

        if (name !== 'update' && name !== 'renderPipeline') return
        if (!extendsBaseClass(getClass(_node))) return

        const body = _node.value.body.body

        if (body.length && !isRenderingGuard(_context, body[0])) _context.report({ node: _node.key, messageId: 'renderingGuard', data: { name: name } })
      },
    }
  },
}

const hasScrollTriggerOption = (_node) =>
  _node.arguments.some((_argument) => _argument.type === 'ObjectExpression' && _argument.properties.some((_property) => _property.type === 'Property' && !_property.computed && _property.key.name === 'scrollTrigger'))

const isPersistentGsapCall = (_node) => {
  const callee = _node.callee

  if (callee.type !== 'MemberExpression' || callee.computed || callee.object.type !== 'Identifier') return false
  if (callee.object.name === 'ScrollTrigger') return callee.property.name === 'create'
  if (callee.object.name !== 'gsap') return false
  if (callee.property.name === 'timeline') return true

  return ['to', 'from', 'fromTo'].includes(callee.property.name) && hasScrollTriggerOption(_node)
}

const gsapTracked = {
  meta: {
    type: 'problem',
    docs: { description: 'Require timelines, scroll-triggered tweens and ScrollTriggers created in scenes to be tracked in this.gsapResources or killed' },
    messages: { untracked: 'Push this into this.gsapResources (or kill it in dispose()), otherwise it outlives the scene' },
    schema: [],
  },
  create(_context) {
    const candidates = []
    const tracked = new Set()

    const isTracked = (_node) => {
      let node = _node

      while (node.parent && node.parent.type !== 'MethodDefinition' && node.parent.type !== 'Program') {
        const parent = node.parent

        if (parent.type === 'CallExpression' && parent.arguments.includes(node) && _context.sourceCode.getText(parent.callee) === 'this.gsapResources.push') return true
        if (parent.type === 'VariableDeclarator' && parent.id.type === 'Identifier') return tracked.has(parent.id.name)
        if (parent.type === 'AssignmentExpression') return tracked.has(_context.sourceCode.getText(parent.left))

        node = parent
      }

      return false
    }

    return {
      CallExpression(_node) {
        const callee = _node.callee

        if (callee.type !== 'MemberExpression' || callee.computed) return

        if (_context.sourceCode.getText(callee) === 'this.gsapResources.push') {
          _node.arguments.forEach((_argument) => tracked.add(_context.sourceCode.getText(_argument)))
          return
        }

        if (callee.property.name === 'kill') {
          tracked.add(_context.sourceCode.getText(callee.object))
          return
        }

        const scene = getClass(_node)

        if (isPersistentGsapCall(_node) && (isBaseClass(scene) || extendsBaseClass(scene))) candidates.push(_node)
      },
      'Program:exit'() {
        candidates.forEach((_node) => {
          if (!isTracked(_node)) _context.report({ node: _node, messageId: 'untracked' })
        })
      },
    }
  },
}

const paramPrefix = {
  meta: {
    type: 'problem',
    docs: { description: 'Require function, callback and catch parameters to be prefixed with _' },
    messages: { paramPrefix: 'Parameter "{{name}}" must be prefixed with _, e.g. _{{name}}' },
    schema: [],
  },
  create(_context) {
    const check = (_param) => {
      if (!_param) return

      let identifier = _param

      if (identifier.type === 'TSParameterProperty') identifier = identifier.parameter
      if (identifier.type === 'AssignmentPattern') identifier = identifier.left
      if (identifier.type === 'RestElement') identifier = identifier.argument
      if (identifier.type !== 'Identifier' || identifier.name === 'this' || identifier.name.startsWith('_')) return

      _context.report({ node: identifier, messageId: 'paramPrefix', data: { name: identifier.name } })
    }

    const checkFunction = (_node) => _node.params.forEach(check)

    return {
      FunctionDeclaration: checkFunction,
      FunctionExpression: checkFunction,
      ArrowFunctionExpression: checkFunction,
      CatchClause(_node) {
        check(_node.param)
      },
    }
  },
}

const noInlineListener = {
  meta: {
    type: 'problem',
    docs: { description: 'Require event listeners to be stored references so they can be removed' },
    messages: { inlineListener: 'Store the listener first (this.disposableFunctions.name or this.events.name) and pass that reference, an inline function can never be removed' },
    schema: [],
  },
  create(_context) {
    return {
      CallExpression(_node) {
        const callee = _node.callee

        if (callee.type !== 'MemberExpression' || callee.computed || callee.property.name !== 'addEventListener') return

        const handler = _node.arguments[1]

        if (!handler) return

        const isBind = handler.type === 'CallExpression' && handler.callee.type === 'MemberExpression' && !handler.callee.computed && handler.callee.property.name === 'bind'

        if (handler.type === 'ArrowFunctionExpression' || handler.type === 'FunctionExpression' || isBind) _context.report({ node: handler, messageId: 'inlineListener' })
      },
    }
  },
}

const UNIFORM_FACTORIES = ['uniform', 'uniformArray', 'uniformTexture', 'uniformCubeTexture']

const isUniformCall = (_node) => {
  if (_node?.type !== 'CallExpression') return false

  const callee = _node.callee

  if (callee.type === 'Identifier') return UNIFORM_FACTORIES.includes(callee.name)

  return callee.type === 'MemberExpression' && !callee.computed && UNIFORM_FACTORIES.includes(callee.property.name)
}

const getKeyName = (_node) => {
  if (_node.type === 'Identifier') return _node.name
  if (_node.type === 'Literal' && typeof _node.value === 'string') return _node.value

  return null
}

const uniformPrefix = {
  meta: {
    type: 'problem',
    docs: { description: 'Require uniforms to be named with a u prefix' },
    messages: { uniformPrefix: 'Uniform "{{name}}" must be prefixed with u, e.g. u{{suggestion}}' },
    schema: [],
  },
  create(_context) {
    const check = (_node, _name) => {
      if (!_name || /^u[A-Z0-9]/.test(_name)) return

      _context.report({ node: _node, messageId: 'uniformPrefix', data: { name: _name, suggestion: _name.charAt(0).toUpperCase() + _name.slice(1) } })
    }

    return {
      Property(_node) {
        if (!_node.computed && isUniformCall(_node.value)) check(_node.key, getKeyName(_node.key))
      },
      PropertyDefinition(_node) {
        if (!_node.computed && isUniformCall(_node.value)) check(_node.key, getKeyName(_node.key))
      },
      VariableDeclarator(_node) {
        if (_node.id.type === 'Identifier' && isUniformCall(_node.init)) check(_node.id, _node.id.name)
      },
      AssignmentExpression(_node) {
        if (!isUniformCall(_node.right)) return
        if (_node.left.type === 'Identifier') check(_node.left, _node.left.name)
        if (_node.left.type === 'MemberExpression' && !_node.left.computed) check(_node.left.property, _node.left.property.name)
      },
    }
  },
}

const baseClassPrefix = {
  meta: {
    type: 'problem',
    docs: { description: 'Require project classes that get extended to be prefixed with _' },
    messages: { baseClassPrefix: 'Class "{{name}}" is extended, so it must be prefixed with _ (rename the class and its import to _{{name}})' },
    schema: [],
  },
  create(_context) {
    const projectClasses = new Set()
    const superClasses = []

    const collectSuperClass = (_node) => {
      if (_node.superClass?.type === 'Identifier') superClasses.push(_node.superClass)
    }

    return {
      ImportDeclaration(_node) {
        if (!_node.source.value.startsWith('.')) return

        _node.specifiers.forEach((_specifier) => projectClasses.add(_specifier.local.name))
      },
      ClassDeclaration(_node) {
        if (_node.id) projectClasses.add(_node.id.name)

        collectSuperClass(_node)
      },
      ClassExpression: collectSuperClass,
      'Program:exit'() {
        superClasses.forEach((_superClass) => {
          if (projectClasses.has(_superClass.name) && !_superClass.name.startsWith('_')) _context.report({ node: _superClass, messageId: 'baseClassPrefix', data: { name: _superClass.name } })
        })
      },
    }
  },
}

export default {
  meta: { name: 'local' },
  rules: {
    'no-object-destructuring': noObjectDestructuring,
    'no-interface-alias': noInterfaceAlias,
    'scene-super-call': sceneSuperCall,
    'scene-rendering-guard': sceneRenderingGuard,
    'gsap-tracked': gsapTracked,
    'param-prefix': paramPrefix,
    'no-inline-listener': noInlineListener,
    'uniform-prefix': uniformPrefix,
    'base-class-prefix': baseClassPrefix,
  },
}
