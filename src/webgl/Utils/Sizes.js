export default class Sizes {
  constructor() {
    // Breakpoints
    this.breakpoints = {
      touch: 992,
    }

    // Setup
    this.set()
  }

  set() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)
    this.aspect = this.width / this.height

    // Detect if the device is a touch device
    this.isTouchDevice = window.matchMedia('(hover: none)').matches
  }

  resize() {
    this.set()
  }
}
