import { Timer } from 'three/webgpu'

export default class Time {
  timer: Timer
  elapsed: number
  delta: number

  constructor() {
    // Setup
    this.timer = new Timer()
    this.elapsed = 0
    this.delta = 0
  }

  update() {
    this.timer.update()

    this.delta = Math.min(this.timer.getDelta(), 1 / 30) * 100 // Prevent long frame jump when tab change in browser - limited to 30fps
    this.elapsed = this.timer.getElapsed()
  }
}
