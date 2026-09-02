import * as THREE from 'three/webgpu'

import Gl from './Gl'
import { Inspector } from 'three/addons/inspector/Inspector.js'

export default class Renderer {
  gl: Gl
  instance: THREE.WebGPURenderer
  inspector?: Inspector

  constructor() {
    this.gl = new Gl()

    this.instance = new THREE.WebGPURenderer({
      canvas: this.gl.canvas,
      powerPreference: 'high-performance',
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
    })

    if (this.gl.isDebug) {
      this.inspector = new Inspector() // TODO: Fix, after they fix the types
      this.instance.inspector = this.inspector
    }

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
