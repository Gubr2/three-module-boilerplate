export default class Sizes {
  constructor() {
    this.resize()
  }

  resize() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)
    this.aspect = this.width / this.height
  }
}
