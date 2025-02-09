import * as THREE from 'three'

import Gl from '../../Gl'

export default class Suzanne {
  constructor() {
    this.gl = new Gl()

    this.gl.assets.models.suzanne.material = new THREE.MeshPhysicalMaterial({
      roughness: 0,
      metalness: 1,
    })

    this.gl.assets.models.suzanne.position.x = 1.5

    this.instance = this.gl.assets.models.suzanne
  }

  update() {}
}
