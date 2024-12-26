import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import Gl from './Gl'

export default class Camera {
  constructor() {
    this.gl = new Gl()

    this.instance = new THREE.PerspectiveCamera(75, this.gl.sizes.width / this.gl.sizes.height, 0.1, 1000)
    this.instance.position.z = 2

    this.setOrbitControls()
  }

  resize() {
    this.instance.aspect = this.gl.sizes.width / this.gl.sizes.height
    this.instance.updateProjectionMatrix()
  }

  setOrbitControls() {
    this.controls = new OrbitControls(this.instance, this.gl.canvas)
    this.controls.enableDamping = true
  }
}
