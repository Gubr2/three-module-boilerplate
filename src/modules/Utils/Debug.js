import { Pane } from 'tweakpane'
import Stats from 'stats-gl'

import Gl from '../Gl.js'

export default class Debug {
  constructor() {
    this.gl = new Gl()

    // // // // // // // // // // // // // // // // // // // // //
    // GUI
    this.gui = new Pane({
      title: 'Debug Panel',
    })

    this.gui.element.parentElement.style.position = 'fixed'
    this.gui.element.parentElement.style.zIndex = '1000'

    this.guiStats = {
      polygons: 0,
      geometries: 0,
      programs: 0,
      textures: 0,
      draw_calls: 0,
    }

    this.guiStatsFolder = this.gui.addFolder({
      title: 'Stats',
      expanded: false,
    })

    this.guiStatsFolder.addBinding(this.guiStats, 'polygons', {
      readonly: true,
    })

    this.guiStatsFolder.addBinding(this.guiStats, 'geometries', {
      readonly: true,
    })

    this.guiStatsFolder.addBinding(this.guiStats, 'programs', {
      readonly: true,
    })

    this.guiStatsFolder.addBinding(this.guiStats, 'textures', {
      readonly: true,
    })

    this.guiStatsFolder.addBinding(this.guiStats, 'draw_calls', {
      readonly: true,
    })

    // // // // // // // // // // // // // // // // // // // // //
    // Stats
    this.stats = new Stats({
      trackGPU: true,
      trackHz: true,
    })
    this.stats.init(this.gl.renderer.instance.gl)
    document.body.appendChild(this.stats.dom)
  }

  update() {}
}
