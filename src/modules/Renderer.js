import { Renderer } from 'ogl'

import Gl from './Gl'

export default class Rendered {
  constructor() {
    this.gl = new Gl()

    this.instance = new Renderer({
      canvas: this.gl.canvas,
      powerPreference: 'high-performance',
      alpha: true,
      // antialias: true,
    })

    this.instance.dpr = this.gl.sizes.pixelRatio
    this.instance.setSize(this.gl.sizes.width, this.gl.sizes.height)
  }

  update() {
    for (const key in this.gl.world.scenes) {
      this.gl.world.scenes[key].renderPipeline()
    }

    // // // // // // // // // //
    // this.instance.setRenderTarget(null)
    this.instance.render({
      scene: this.gl.scene,
      camera: this.gl.camera,
    })
  }

  resize() {
    this.instance.dpr = this.gl.sizes.pixelRatio
    this.instance.setSize(this.gl.sizes.width, this.gl.sizes.height)
  }
}
