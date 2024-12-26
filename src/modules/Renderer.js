import * as THREE from 'three'

import Gl from './Gl'

export default class Rendered {
  constructor() {
    this.gl = new Gl()

    this.instance = new THREE.WebGLRenderer({
      canvas: this.gl.canvas,
      powerPreference: 'high-performance',
    })

    this.instance.setPixelRatio(this.gl.sizes.pixelRatio)
    this.instance.outputEncoding = THREE.sRGBEncoding
    this.instance.setSize(this.gl.sizes.width, this.gl.sizes.height)
  }

  update() {
    this.instance.render(this.gl.scene, this.gl.camera.instance)
  }

  resize() {
    this.instance.setPixelRatio(this.gl.sizes.pixelRatio)
    this.instance.setSize(this.gl.sizes.width, this.gl.sizes.height)
  }
}
