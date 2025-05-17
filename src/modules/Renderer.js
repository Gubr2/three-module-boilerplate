import * as THREE from 'three/webgpu'
import { afterImage } from 'three/examples/jsm/tsl/display/AfterImageNode.js'
import { pass } from 'three/tsl'
import { bloom } from 'three/addons/tsl/display/BloomNode.js'

import Gl from './Gl'

export default class Rendered {
  constructor() {
    this.gl = new Gl()

    this.instance = new THREE.WebGPURenderer({
      canvas: this.gl.canvas,
      powerPreference: 'high-performance',
      alpha: true,
      // antialias: true,
      precision: 'lowp',
    })

    this.instance.setPixelRatio(this.gl.sizes.pixelRatio)
    this.instance.setSize(this.gl.sizes.width, this.gl.sizes.height)
    // this.instance.toneMapping = THREE.ReinhardToneMapping

    this.postProcessing = new THREE.PostProcessing(this.instance)
    this.scenePass = pass(this.gl.scene, this.gl.camera)
    this.afterImagePass = afterImage(this.scenePass, 0.96)
    // const bloomPass = bloom(this.scenePass)

    this.postProcessing.outputNode = this.afterImagePass
  }

  update() {
    for (const key in this.gl.world.scenes) {
      this.gl.world.scenes[key].renderPipeline()
    }

    // // // // // // // // // //
    this.instance.setRenderTarget(null)
    // this.instance.renderAsync(this.gl.scene, this.gl.camera)
    this.postProcessing.renderAsync()
  }

  resize() {
    this.instance.setPixelRatio(this.gl.sizes.pixelRatio)
    this.instance.setSize(this.gl.sizes.width, this.gl.sizes.height)
  }
}
