export default class Sizes {
  breakpoints: {
    touch: number
  }
  width!: number
  height!: number
  pixelRatio!: number
  aspect!: number

  isTouchDevice!: boolean
  isDesktop!: boolean

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

    this.isDesktop = this.width >= this.breakpoints.touch

    // Detect if the device is a touch device
    this.isTouchDevice = window.matchMedia('(hover: none)').matches
  }

  setResponsiveFov(_fov: number, referenceAspect: number, zoom: number = 1, aspect: number = this.aspect) {
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
