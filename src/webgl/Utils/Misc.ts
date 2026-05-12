import * as THREE from 'three'

export default class Misc {
  createNestedParents(_schema: string[] = []) {
    /* 
      Create Nested Parents
    */
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
}
