import { Vector2, MathUtils } from 'three'

import Gl from '../Gl'
import { distance } from 'three/tsl'

export default class Mouse {
  constructor() {
    this.gl = new Gl()

    /* 
      Flags
    */
    this.isMouseHolding = false
    this.isMouseMoved = false

    /* 
      Default
    */
    this.default = new Vector2()

    /* 
      Normalized
    */
    this.normalized = {
      current: new Vector2(),
      previous: new Vector2(),
    }

    /* 
      Direction
    */
    this.direction = new Vector2()

    /* 
      Pace
    */
    this.pace = {
      default: 0,
      separated: new Vector2(),
    }

    this.pace = {
      default: 0,
      separated: new Vector2(),
    }

    /* 
      Drag
    */
    this.drag = {
      start: new Vector2(),
      distance: 0,
      side: 'left',
      pace: {
        default: 0,
        separated: new Vector2(),
      },
    }

    // // // // // // // // // // // // // // // //
    // EVENTS

    // Move
    document.addEventListener('mousemove', this.mousemove.bind(this))
    document.addEventListener('touchmove', this.touchmove.bind(this))

    // Down
    document.addEventListener('mousedown', this.down.bind(this))
    document.addEventListener('touchstart', this.down.bind(this))

    // Up
    document.addEventListener('mouseup', this.up.bind(this))
    document.addEventListener('touchend', this.up.bind(this))
  }

  mousemove(_event) {
    this.isMouseMoved = true

    // Set Default
    this.default.x = _event.clientX
    this.default.y = _event.clientY

    // Set Normalized
    this.normalized.current.x = (_event.clientX / this.gl.sizes.width) * 2 - 1
    this.normalized.current.y = -(_event.clientY / this.gl.sizes.height) * 2 + 1

    // Set Drag
    if (this.isMouseHolding) {
      // Set Drag Distance
      this.drag.distance = this.drag.start.distanceTo(this.default)

      if (this.drag.start.x < this.default.x) {
        this.drag.side = 'right'
      } else {
        this.drag.side = 'left'
      }
    }
  }

  touchmove(_event) {
    if (_event.touches) {
      this.isMouseMoved = true

      // Set Normalized
      this.normalized.current.x = (_event.touches[0].pageX / this.gl.sizes.width) * 2 - 1
      this.normalized.current.y = -(_event.touches[0].pageY / this.gl.sizes.height) * 2 + 1
    }
  }

  down(_event) {
    this.isMouseHolding = true

    // Reset Drag Distance
    this.drag.start.copy(this.default)

    // Set for mobile
    if (_event.touches) {
      // Set Normalized
      this.normalized.current.x = (_event.touches[0].pageX / this.gl.sizes.width) * 2 - 1
      this.normalized.current.y = -(_event.touches[0].pageY / this.gl.sizes.height) * 2 + 1
    }
  }

  up(_event) {
    this.isMouseHolding = false
  }

  update() {
    // Set Normalized Pace
    this.pace.default = this.normalized.current.distanceTo(this.normalized.previous)
    this.pace.separated.x = this.normalized.current.x - this.normalized.previous.x
    this.pace.separated.y = this.normalized.current.y - this.normalized.previous.y

    // Set Normalized Direction
    this.direction.subVectors(this.normalized.current, this.normalized.previous).normalize()

    // Set Drag
    if (this.isMouseHolding) {
      this.drag.pace.default = this.normalized.current.distanceTo(this.normalized.previous)
      this.drag.pace.separated.x = this.normalized.current.x - this.normalized.previous.x
      this.drag.pace.separated.y = this.normalized.current.y - this.normalized.previous.y
    } else {
      this.drag.pace.default = 0
      this.drag.pace.separated.x = 0
      this.drag.pace.separated.y = 0
    }

    // Set Normalized Previous
    this.normalized.previous.copy(this.normalized.current)
  }

  /* 
    Create Eased Movement
  */
  createEasedMovement(_amount) {
    /* 
      Variables
    */
    let value = new Vector2()

    /* 
      Update
    */
    const update = (_delta) => {
      value.x = MathUtils.damp(value.x, this.default.x, _amount, _delta)
      value.y = MathUtils.damp(value.y, this.default.y, _amount, _delta)
    }

    /* 
      Return
    */

    return {
      value,
      update,
    }
  }

  /* 
    Create Eased Normalized
  */
  createEasedNormalized(_amount) {
    /* 
      Variables
    */
    let value = new Vector2()

    /* 
      Update
    */
    const update = (_delta) => {
      value.x = MathUtils.damp(value.x, this.normalized.current.x, _amount, _delta)
      value.y = MathUtils.damp(value.y, this.normalized.current.y, _amount, _delta)
    }

    /* 
      Return
    */
    return {
      value,
      update,
    }
  }

  /* 
    Create Direction Pace
  */
  createEasedDirection(_amount) {
    /* 
      Variables
    */
    let value = new Vector2()

    /* 
      Update
    */
    const update = (_delta) => {
      value.x = MathUtils.damp(value.x, this.direction.x, _amount, _delta)
      value.y = MathUtils.damp(value.y, this.direction.y, _amount, _delta)
    }

    /* 
      Return
    */
    return {
      value,
      update,
    }
  }

  /* 
    Create Eased Pace
  */
  createEasedPace(_amount) {
    /* 
      Variables
    */
    let value = {
      default: 0,
      separated: new Vector2(),
    }

    /* 
      Update
    */
    const update = (_delta) => {
      value.default = MathUtils.damp(value.default, this.pace.default, _amount, _delta)

      value.separated.x = MathUtils.damp(value.separated.x, this.pace.separated.x, _amount, _delta)
      value.separated.y = MathUtils.damp(value.separated.y, this.pace.separated.y, _amount, _delta)
    }

    /* 
      Return
    */
    return {
      value,
      update,
    }
  }

  /* 
    Create Eased Drag
  */
  createEasedDrag(_amount) {
    /* 
      Variables
    */
    let value = {
      distance: 0,
      pace: {
        default: 0,
        separated: new Vector2(),
      },
    }

    /* 
      Update
    */
    const update = (_delta) => {
      value.distance = MathUtils.damp(value.distance, this.drag.distance, _amount, _delta)

      value.pace.default = MathUtils.damp(value.pace.default, this.drag.pace.default, _amount, _delta)
      value.pace.separated.x = MathUtils.damp(value.pace.separated.x, this.drag.pace.separated.x, _amount, _delta)
      value.pace.separated.y = MathUtils.damp(value.pace.separated.y, this.drag.pace.separated.y, _amount, _delta)
    }

    /* 
      Return
    */
    return {
      value,
      update,
    }
  }
}
