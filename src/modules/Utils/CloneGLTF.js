import { Transform, Mesh, GLTFSkin } from 'ogl'

/**
 * Deep-clone an OGL GLTF structure returned by GLTFLoader.load.
 * - Duplicates the scene graph (new Transform/Mesh instances)
 * - Shares Geometry and Program for performance (you can reassign programs later)
 * - Preserves camera nodes (fov/near/far) and rewires skin/skeleton joints
 * - Remaps animation tracks' node targets to the cloned nodes
 *
 * @param {WebGLRenderingContext | WebGL2RenderingContext} gl
 * @param {object} source
 * @returns {{scene:any[], nodes?:any[], cameras?:any[], animations?:any[]}}
 */
export default function cloneGLTF(gl, source) {
  if (!source || !source.scene) return null

  const originalToClone = new Map()

  // 1) Clone scene graph (handle array or single root)
  const roots = Array.isArray(source.scene) ? source.scene : [source.scene]
  const clonedRoots = roots.map((root) => cloneNode(gl, root, originalToClone))

  // 2) Optional flat arrays remapped to clones
  const clonedNodes = Array.isArray(source.nodes) ? source.nodes.map((n) => originalToClone.get(n)).filter(Boolean) : []
  const clonedCameras = Array.isArray(source.cameras) ? source.cameras.map((n) => originalToClone.get(n)).filter(Boolean) : []

  // 3) Rewire skins/skeletons on the cloned graph
  rewireSkins(source, originalToClone)

  // 4) Remap animations
  const clonedAnimations = remapAnimations(source.animations, originalToClone)

  return {
    scene: clonedRoots,
    nodes: clonedNodes,
    cameras: clonedCameras,
    animations: clonedAnimations,
  }
}

function cloneNode(gl, original, map) {
  const isMesh = typeof original?.draw === 'function' && original?.geometry

  // Detect skinned mesh: presence of a skeleton or skin hints
  const isSkinned = !!(original && (original.skeleton || (original.skin && original.skin.joints)))

  const clone = isMesh
    ? isSkinned
      ? new GLTFSkin(gl || original.gl, {
          skeleton: original.skeleton || { joints: [] },
          geometry: original.geometry,
          program: original.program,
          mode: original.mode,
        })
      : new Mesh(gl || original.gl, { geometry: original.geometry, program: original.program, mode: original.mode })
    : new Transform()

  // Register mapping early
  map.set(original, clone)

  // Name
  if (original.name) clone.name = original.name

  // Transform
  if (original.position && clone.position) clone.position.set(original.position.x, original.position.y, original.position.z)
  if (original.rotation && clone.rotation) clone.rotation.set(original.rotation.x, original.rotation.y, original.rotation.z)
  if (original.scale && clone.scale) clone.scale.set(original.scale.x, original.scale.y, original.scale.z)

  // Camera properties (OGL attaches to transform nodes)
  if (typeof original.fov === 'number') clone.fov = original.fov
  if (typeof original.near === 'number') clone.near = original.near
  if (typeof original.far === 'number') clone.far = original.far

  // Children
  if (original.children && original.children.length) {
    for (let i = 0; i < original.children.length; i++) {
      const childClone = cloneNode(gl, original.children[i], map)
      childClone.setParent(clone)
    }
  }

  return clone
}

function rewireSkins(source, map) {
  const originals = collectOriginalNodes(source)
  for (let i = 0; i < originals.length; i++) {
    const o = originals[i]
    const c = map.get(o)
    if (!c) continue

    // Common GLTF skin structures in OGL
    if (o.skin && Array.isArray(o.skin.joints)) {
      const remappedJoints = o.skin.joints.map((j) => {
        const cj = map.get(j) || j
        if (j.bindInverse) cj.bindInverse = j.bindInverse
        return cj
      })
      c.skin = { ...o.skin, joints: remappedJoints }
    }

    if (o.skeleton && Array.isArray(o.skeleton.joints)) {
      const remappedJoints = o.skeleton.joints.map((j) => {
        const cj = map.get(j) || j
        if (j.bindInverse) cj.bindInverse = j.bindInverse
        return cj
      })
      c.skeleton = { ...o.skeleton, joints: remappedJoints }

      // If clone is a GLTFSkin instance, rebuild bone texture for the remapped skeleton
      if (typeof c.createBoneTexture === 'function') {
        c.createBoneTexture()
      }
    }

    if (Array.isArray(o.joints)) {
      c.joints = o.joints.map((j) => {
        const cj = map.get(j) || j
        if (j.bindInverse) cj.bindInverse = j.bindInverse
        return cj
      })
    }

    // Morph targets
    if (Array.isArray(o.morphTargetInfluences)) c.morphTargetInfluences = [...o.morphTargetInfluences]
    if (Array.isArray(o.morphTargetDictionary)) c.morphTargetDictionary = [...o.morphTargetDictionary]
  }
}

function remapAnimations(animations, map) {
  if (!Array.isArray(animations)) return []
  return animations.map((clip) => {
    const anim = clip && clip.animation
    if (!anim || !Array.isArray(anim.data)) return clip

    const remappedData = anim.data.map((track) => {
      const node = map.get(track.node) || track.node
      return node === track.node ? track : { ...track, node }
    })

    return { ...clip, animation: { ...anim, data: remappedData } }
  })
}

function collectOriginalNodes(source) {
  const out = []
  const pushTree = (node) => {
    out.push(node)
    if (node.children && node.children.length) {
      for (let i = 0; i < node.children.length; i++) pushTree(node.children[i])
    }
  }
  if (Array.isArray(source.scene)) {
    for (let i = 0; i < source.scene.length; i++) pushTree(source.scene[i])
  } else if (source.scene) {
    pushTree(source.scene)
  }
  return out
}
