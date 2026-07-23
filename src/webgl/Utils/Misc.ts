import * as THREE from 'three'

interface CustomAnimationMixer {
  mixer: THREE.AnimationMixer | null
  root: THREE.Object3D | THREE.Group
  duration: number
}

export default class Misc {
  /* 
    Create Nested Parents
  */
  createNestedParents(_schema: string[] = []): Record<string, THREE.Object3D> {
    const names = _schema
    const map: Record<string, THREE.Object3D> = {}
    let prev = null
    for (const name of names) {
      const n = new THREE.Object3D()
      n.userData.random = Math.random() // Add random rumber in case needed somewhere
      n.name = name
      if (prev) prev.add(n)
      map[name] = n
      prev = n
    }
    map.firstItem = map[names[0]]
    map.lastItem = map[names[names.length - 1]]
    return map
  }

  /* 
    Create Animation
  */
  createAnimation(_object: THREE.Object3D | THREE.Group, _animationsSource: any, _animationName?: string): CustomAnimationMixer | null {
    const mixer = new THREE.AnimationMixer(_object)

    const duration = Math.max(..._animationsSource.map((_clip: THREE.AnimationClip) => _clip.duration))

    if (_animationName) {
      /* 
        Case: Individual animation
      */
      const individualClip = THREE.AnimationClip.findByName(_animationsSource, _animationName)

      if (!individualClip) {
        console.error(`Animation "${_animationName}" not found in ${_animationsSource}`)
        return null
      }

      const action = mixer.clipAction(individualClip)
      action.play()
    } else {
      /* 
        Case: All animations
      */
      _animationsSource.forEach((_animation: THREE.AnimationClip) => {
        mixer.clipAction(_animation).play()
      })
    }

    return {
      mixer,
      root: _object,
      duration,
    }
  }
}
