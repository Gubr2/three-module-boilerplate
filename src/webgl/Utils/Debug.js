import { Pane } from 'tweakpane'
import { ThreePerf } from 'three-perf'

import Gl from '../Gl'

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
    this.perf = new ThreePerf({
      anchorX: 'left',
      anchorY: 'top',
      domElement: document.body,
      renderer: this.gl.renderer.instance,
      showGraph: false,
      overClock: false,
    })

    this.memoryStats = {
      used: 0,
      total: 0,
      limit: 0,
    }

    /* 
      Hide debug
    */
    this.setDebugHide()
    this.setupMemoryDetection()
  }

  setDebugHide() {
    this.isDebugHidden = false

    // When press H key, hide the debug panel
    window.addEventListener('keydown', (event) => {
      if (event.key === 'h') {
        this.isDebugHidden = !this.isDebugHidden

        this.gui.element.style.display = this.isDebugHidden ? 'none' : 'block'
        this.perf.visible = !this.isDebugHidden
      }
    })
  }

  setupMemoryDetection() {
    if (performance && performance.memory) {
      const memFolder = this.gui.addFolder({ title: 'Memory (MB)', expanded: false })

      memFolder.addBinding(this.memoryStats, 'used', { readonly: true, interval: 1000, label: 'Used JS Heap' })
      memFolder.addBinding(this.memoryStats, 'total', { readonly: true, interval: 1000, label: 'Total Allocated' })
      memFolder.addBinding(this.memoryStats, 'limit', { readonly: true, interval: 1000, label: 'Max Limit' })

      setInterval(() => {
        // Convert bytes to MB (1 MB = 1048576 bytes)
        const toMB = (bytes) => (bytes / 1048576).toFixed(2)

        this.memoryStats.used = toMB(performance.memory.usedJSHeapSize)
        this.memoryStats.total = toMB(performance.memory.totalJSHeapSize)
        this.memoryStats.limit = toMB(performance.memory.jsHeapSizeLimit)
      }, 1000)
    } else {
      console.warn('performance.memory API not supported in this browser')
    }
  }

  update() { }
}
