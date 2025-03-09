import * as THREE from 'three'

import Gl from './Gl'

export default class Rendered {
  constructor() {
    this.gl = new Gl()

    this.instance = new THREE.WebGLRenderer({
      canvas: this.gl.canvas,
      powerPreference: 'high-performance',
      alpha: true,
      antialias: true,
      precision: 'lowp',
    })

    this.instance.setPixelRatio(this.gl.sizes.pixelRatio)
    this.instance.outputEncoding = THREE.sRGBEncoding
    this.instance.setSize(this.gl.sizes.width, this.gl.sizes.height)
  }

  update() {
    for (const key in this.gl.world.scenes) {
      this.gl.world.scenes[key].renderPipeline()
    }

    // // // // // // // // // //
    this.instance.setRenderTarget(null)

    // this.composer.render()
    this.instance.render(this.gl.scene, this.gl.camera.instance)
  }

  resize() {
    this.instance.setPixelRatio(this.gl.sizes.pixelRatio)
    this.instance.setSize(this.gl.sizes.width, this.gl.sizes.height)
  }
}
