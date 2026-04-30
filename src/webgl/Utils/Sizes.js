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

  setResponsiveFov(_fov, referenceAspect, zoom = 1, aspect = this.aspect) {
    const fovInRadians = (_fov * Math.PI) / 180
    let tanHalf = Math.tan(fovInRadians / 2) / zoom

    if (aspect < referenceAspect) {
      tanHalf = (tanHalf * referenceAspect) / aspect
    }

    return 2 * Math.atan(tanHalf) * (180 / Math.PI)
  }

  resize() {
    this.set()
  }
}
