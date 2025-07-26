import { Clock } from 'three'

export default class Time {
  constructor() {
    // Setup
    this.clock = new Clock()
    this.elapsed = 0
    this.delta = 0
  }

  update() {
    this.delta = Math.min(this.clock.getDelta(), 1 / 30) * 100 // Prevent long frame jump when tab change in browser - limited to 30fps
    this.elapsed = this.clock.getElapsedTime()
  }
}
