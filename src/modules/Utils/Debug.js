import { GUI } from 'three/addons/libs/lil-gui.module.min.js'
import Stats from 'three/addons/libs/stats.module.js'

export default class Debug {
  constructor() {
    // // // // // // // // // // // // // // // // // // // // //
    // DAT GUI
    this.gui = new GUI({
      width: 300,
    })

    // // // // // // // // // // // // // // // // // // // // //
    // FPS
    this.stats = new Stats()
    this.stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(this.stats.dom)
  }
}
