import * as THREE from 'three'

import Gl from '../../Gl'

export default class Environment {
  constructor() {
    this.gl = new Gl()

    this.gl.assets.hdri.mapping = THREE.EquirectangularReflectionMapping
    this.gl.scene.environment = this.gl.assets.hdri
  }
}
