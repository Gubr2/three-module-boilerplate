import * as THREE from 'three/webgpu'

import Gl from '../../Gl'

export default class Lighting {
  constructor() {
    this.gl = new Gl()

    this.light = new THREE.HemisphereLight(0xffffff, 0x000000, 1)

    this.gl.scene.add(this.light)
  }
}
