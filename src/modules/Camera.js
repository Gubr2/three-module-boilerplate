import * as THREE from 'three'

import Gl from './Gl'

export default class Camera {
  constructor() {
    this.gl = new Gl()

    this.instance = new THREE.PerspectiveCamera(0, this.gl.sizes.width / this.gl.sizes.height, 0.1, 10)
    this.instance.position.z = 10
    this.instance.aspect = this.gl.sizes.width / this.gl.sizes.height
    this.instance.fov = 2 * Math.atan(this.gl.sizes.height / 2 / this.instance.position.z) * (180 / Math.PI)
    this.instance.updateProjectionMatrix()
  }

  resize() {
    this.instance.aspect = this.gl.sizes.width / this.gl.sizes.height
    this.instance.fov = 2 * Math.atan(this.gl.sizes.height / 2 / this.instance.position.z) * (180 / Math.PI)
    this.instance.updateProjectionMatrix()
  }
}
