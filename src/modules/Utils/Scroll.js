import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

import Gl from '../Gl'

export default class Scroll {
  constructor() {
    this.gl = new Gl()

    this.lenis = new Lenis({
      autoRaf: false,
      syncTouch: true,
    })
  }

  update() {
    this.lenis.raf(this.gl.time.elapsed * 1000)
  }
}
