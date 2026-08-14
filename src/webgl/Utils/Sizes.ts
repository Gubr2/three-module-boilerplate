import Gl from '../Gl'

export default class Sizes {
  gl: Gl
  breakpoints: {
    tablet: number
    mobile: number
  }
  width!: number
  height!: number
  pixelRatio!: number
  aspect!: number

  isTouchDevice!: boolean
  isDesktop!: boolean
  isTablet!: boolean
  isMobile!: boolean

  constructor() {
    this.gl = new Gl()

    // Breakpoints
    this.breakpoints = {
      tablet: 992,
      mobile: 768,
    }

    // Setup
    this.set()
  }

  set() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)
    this.aspect = this.width / this.height

    this.isDesktop = this.width >= this.breakpoints.tablet
    this.isTablet = this.width >= this.breakpoints.mobile && this.width < this.breakpoints.tablet
    this.isMobile = this.width < this.breakpoints.mobile

    // Detect if the device is a touch device
    this.isTouchDevice = window.matchMedia('(hover: none)').matches
  }

  setResponsiveFov(_fov: number, referenceAspect: number, zoom = 1, aspect = this.aspect, _isClamped = true) {
    const fovInRadians = (_fov * Math.PI) / 180
    let tanHalf = Math.tan(fovInRadians / 2) / zoom

    if (!_isClamped || aspect < referenceAspect) {
      tanHalf = (tanHalf * referenceAspect) / aspect
    }

    return 2 * Math.atan(tanHalf) * (180 / Math.PI)
  }

  resize() {
    this.set()
  }
}
