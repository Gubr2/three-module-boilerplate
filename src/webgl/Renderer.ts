import * as THREE from 'three'

import Gl from './Gl'

export default class Renderer {
  gl: Gl
  instance: THREE.WebGLRenderer

  constructor() {
    this.gl = new Gl()

    this.instance = new THREE.WebGLRenderer({
      canvas: this.gl.canvas,
      powerPreference: 'high-performance',
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      precision: 'lowp',
    })

    this.instance.setPixelRatio(this.gl.sizes.pixelRatio)
    this.instance.setSize(this.gl.sizes.width, this.gl.sizes.height)
  }

  update() {
    for (const key in this.gl.manager.sceneInstances) {
      this.gl.manager.sceneInstances[key].renderPipeline()
    }

    // // // // // // // // // //
    this.instance.setRenderTarget(null)
    this.instance.render(this.gl.scene, this.gl.camera)
  }

  resize() {
    this.instance.setPixelRatio(this.gl.sizes.pixelRatio)
    this.instance.setSize(this.gl.sizes.width, this.gl.sizes.height)
  }
}
