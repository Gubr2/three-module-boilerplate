import { Pane } from 'tweakpane'
import Stats from 'stats-gl'
import { ThreePerf } from 'three-perf'

import Gl from '../Gl.js'

export default class Debug {
  constructor() {
    this.gl = new Gl()

    // Turn off renderer auto reset to have accurate stats for all scenes
    this.gl.renderer.instance.info.autoReset = false

    // // // // // // // // // // // // // // // // // // // // //
    // GUI
    this.gui = new Pane({
      title: 'Debug Panel',
    })

    this.gui.element.parentElement.style.position = 'fixed'
    this.gui.element.parentElement.style.zIndex = '1000'

    // // // // // // // // // // // // // // // // // // // // //
    // Stats
    // this.stats = new Stats({
    //   trackGPU: true,
    //   trackHz: true,
    //   trackCPT: true,
    // })

    // this.stats.init(this.gl.renderer.instance)

    // document.body.appendChild(this.stats.dom)

    this.perf = new ThreePerf({
      anchorX: 'left',
      anchorY: 'top',
      domElement: document.body,
      renderer: this.gl.renderer.instance,
      showGraph: false,
      overClock: false,
    })
  }

  update() {}
}
