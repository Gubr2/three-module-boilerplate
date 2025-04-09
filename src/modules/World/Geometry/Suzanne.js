import * as THREE from 'three'

import Gl from '../../Gl'

export default class Suzanne {
  constructor() {
    this.gl = new Gl()

    /* 
      Geometry
    */
    this.geometry = this.gl.assets.models.suzanne.geometry.clone()

    /* 
      Material
    */
    this.material = new THREE.MeshPhysicalMaterial({
      roughness: 0,
      metalness: 1,
    })

    /* 
      Instance
    */
    this.instance = new THREE.Mesh(this.geometry, this.material)
    this.instance.position.x = 1.5
    this.instance.scale.set(0.5, 0.5, 0.5)
  }

  update() {}
}
