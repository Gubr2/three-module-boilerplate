import * as THREE from 'three/webgpu'

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
    this.instance.outputEncoding = THREE.sRGBEncoding
    this.instance.setSize(this.gl.sizes.width, this.gl.sizes.height)
  }

  update() {
    for (const key in this.gl.world.scenes) {
      this.gl.world.scenes[key].renderPipeline()

      this.gl.world.scenes[key].renderPlane.mesh.rotation.z = this.gl.time.elapsed * 0.1
    }

    // // // // // // // // // //
    this.instance.setRenderTarget(null)
    this.instance.renderAsync(this.gl.scene, this.gl.camera)
  }

  resize() {
    this.instance.setPixelRatio(this.gl.sizes.pixelRatio)
    this.instance.setSize(this.gl.sizes.width, this.gl.sizes.height)
  }
}
