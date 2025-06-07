import gsap from 'gsap'
import { Pane } from 'tweakpane'
import Stats from 'stats-gl'

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
    this.stats.init(this.gl.renderer.instance)
    document.body.appendChild(this.stats.dom)
  }

  update() {
    // Update stats
    this.stats.update()

    // Update GUI stats
    this.guiStats.polygons = this.gl.renderer.instance.info.render.triangles
    this.guiStats.geometries = this.gl.renderer.instance.info.memory.geometries
    this.guiStats.programs = this.gl.renderer.instance.info.programs.length
    this.guiStats.textures = this.gl.renderer.instance.info.memory.textures
    this.guiStats.draw_calls = this.gl.renderer.instance.info.render.calls

    // Reset renderer info
    this.gl.renderer.instance.info.reset()
  }
}
