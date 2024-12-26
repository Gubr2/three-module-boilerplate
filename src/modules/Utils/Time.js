import EventEmitter from './EventEmitter.js'
import { Clock } from 'three'

export default class Time extends EventEmitter {
  constructor() {
    super()

    // Setup
    this.clock = new Clock()
    this.elapsed = 0
    this.delta = 0

    window.requestAnimationFrame(() => {
      this.tick()
    })
  }

  tick() {
    const currentTime = Date.now()
    this.delta = this.clock.getDelta()
    this.elapsed = this.clock.getElapsedTime()

    this.trigger('tick')

    window.requestAnimationFrame(() => {
      this.tick()
    })
  }
}
