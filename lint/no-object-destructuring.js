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

export default {
  meta: { name: 'local' },
  rules: {
    'no-object-destructuring': noObjectDestructuring,
    'no-interface-alias': noInterfaceAlias,
  },
}
