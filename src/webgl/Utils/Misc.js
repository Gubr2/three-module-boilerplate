import * as THREE from 'three'

export default class Misc {
  constructor() {

  }

  /**
   * @param {string[]} [_schema]
   */
  createNestedParents(_schema = []) {
    /* 
      Create Nested Parents
    */
    const names = _schema

    const map = {}

    let prev = null

    for (const name of names) {
      const n = new THREE.Object3D()

      n.userData.random = Math.random() // Add random rumber in case needed somewhere
      n.name = name

      if (prev) prev.add(n)

      map[name] = n

      prev = n
    }

    /* 
      Save first and last item to be easily accesible
    */
    map.firstItem = map[names[0]]
    map.lastItem = map[names[names.length - 1]]

    return map
  }
}