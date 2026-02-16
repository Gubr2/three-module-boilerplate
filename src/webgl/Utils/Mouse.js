import { Vector2, MathUtils } from 'three'

import Gl from '../Gl'

export default class Mouse {
  constructor(_dom, _params = {}) {
    this.gl = new Gl()

    /* 
      DOM
    */
    this.dom = _dom

    /* 
      Bound
    */
    this.bounds = this.dom
      ? this.getPositionOfDom()
      : {
        left: 0,
        top: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        right: window.innerWidth,
        bottom: window.innerHeight,
      }

    /* 
      Params
    */
    this.params = {
      limitToBounds: _params.limitToBounds || false,
    }

    /* 
      Flags
    */
    this.isMouseHolding = false
    this.isMouseMoved = false

    /* 
      Sizes
    */
    this.width = this.gl.sizes.width
    this.height = this.gl.sizes.height

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

    /* 
      Drag
    */
    this.drag = {
      start: new Vector2(),
      distance: {
        default: 0,
        separated: new Vector2(),
      },
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

    // Leave
    document.addEventListener('mouseleave', this.mouseleave.bind(this))
    document.addEventListener('touchleave', this.mouseleave.bind(this))
  }

  mouseleave() {
    // this.default.set(0, 0)
    // this.normalized.current.set(0, 0)
    this.direction.set(0, 0)
    this.pace.default = 0
    this.pace.separated.set(0, 0)
  }

  mousemove(_event) {
    this.isMouseMoved = true

    // Set Default
    this.default.x = _event.clientX - this.bounds.left
    this.default.y = this.dom ? _event.pageY - this.bounds.top : _event.clientY - this.bounds.top

    if (this.params.limitToBounds) {
      if (this.default.x < 0 || this.default.x > this.bounds.width || this.default.y < 0 || this.default.y > this.bounds.height) return

      this.default.x = Math.max(0, Math.min(this.bounds.width, this.default.x))
      this.default.y = Math.max(0, Math.min(this.bounds.height, this.default.y))
    }

    // Set Normalized
    this.normalized.current.x = (this.default.x / this.bounds.width) * 2 - 1
    this.normalized.current.y = -(this.default.y / this.bounds.height) * 2 + 1

    // Set Drag
    if (this.isMouseHolding) {
      // Set Drag Distance
      this.drag.distance.default = this.drag.start.distanceTo(this.default)
      this.drag.distance.separated.x = this.default.x - this.drag.start.x
      this.drag.distance.separated.y = this.default.y - this.drag.start.y

      if (this.drag.start.x < this.default.x) {
        this.drag.side = 'right'
      }

      if (this.drag.start.y < this.default.y) {
        this.drag.side = 'bottom'
      } else {
        this.drag.side = 'top'
      }
    }
  }

  touchmove(_event) {
    if (_event.touches) {
      this.isMouseMoved = true

      // Set Default
      this.default.x = _event.touches[0].clientX - this.bounds.left
      this.default.y = this.dom ? _event.touches[0].pageY - this.bounds.top : _event.touches[0].clientY - this.bounds.top

      if (this.params.limitToBounds) {
        if (this.default.x < 0 || this.default.x > this.bounds.width || this.default.y < 0 || this.default.y > this.bounds.height) return

        this.default.x = Math.max(0, Math.min(this.bounds.width, this.default.x))
        this.default.y = Math.max(0, Math.min(this.bounds.height, this.default.y))
      }

      // Set Normalized
      this.normalized.current.x = (this.default.x / this.bounds.width) * 2 - 1
      this.normalized.current.y = -(this.default.y / this.bounds.height) * 2 + 1

      // Set Drag
      if (this.isMouseHolding) {
        // Set Drag Distance
        this.drag.distance.default = this.drag.start.distanceTo(this.default)
        this.drag.distance.separated.x = this.default.x - this.drag.start.x
        this.drag.distance.separated.y = this.default.y - this.drag.start.y

        if (this.drag.start.x < this.default.x) {
          this.drag.side = 'right'
        } else {
          this.drag.side = 'left'
        }
      }
    }
  }

  down(_event) {
    this.isMouseHolding = true

    // Reset Drag Distance
    this.drag.start.copy(this.default)

    // Set for mobile
    if (_event.touches) {
      // Set Normalized
      this.normalized.current.x = (_event.touches[0].clientX / this.width) * 2 - 1
      this.normalized.current.y = -(_event.touches[0].clientY / this.height) * 2 + 1
    }
  }

  up(_event) {
    this.isMouseHolding = false
  }

  resize() {
    if (this.dom) {
      this.bounds = this.getPositionOfDom()
    } else {
      this.bounds = {
        left: 0,
        top: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        right: window.innerWidth,
        bottom: window.innerHeight,
      }

      this.width = window.innerWidth
      this.height = window.innerHeight
    }
  }

  getPositionOfDom() {
    const rect = this.dom.getBoundingClientRect()

    return {
      left: rect.left,
      top: rect.top + window.scrollY,
      width: rect.width,
      height: rect.height,
      right: rect.right,
      bottom: rect.bottom,
    }
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
    let amount = _amount

    /* 
      Update
    */
    const update = (_delta) => {
      value.x = MathUtils.damp(value.x, this.default.x, amount, _delta)
      value.y = MathUtils.damp(value.y, this.default.y, amount, _delta)
    }

    /* 
      Set Amount
    */
    const setAmount = (_amount) => {
      amount = _amount
    }

    /* 
      Return
    */

    return {
      value,
      update,
      setAmount,
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
    let amount = _amount

    /* 
      Update
    */
    const update = (_delta) => {
      value.x = MathUtils.damp(value.x, this.normalized.current.x, amount, _delta)
      value.y = MathUtils.damp(value.y, this.normalized.current.y, amount, _delta)
    }

    /* 
      Set Amount
    */
    const setAmount = (_amount) => {
      amount = _amount
    }

    /* 
      Return
    */
    return {
      value,
      update,
      setAmount,
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
    let amount = _amount

    /* 
      Update
    */
    const update = (_delta) => {
      value.x = MathUtils.damp(value.x, this.direction.x, amount, _delta)
      value.y = MathUtils.damp(value.y, this.direction.y, amount, _delta)
    }

    /* 
      Set Amount
    */
    const setAmount = (_amount) => {
      amount = _amount
    }

    /* 
      Return
    */
    return {
      value,
      update,
      setAmount,
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
    let amount = _amount

    /* 
      Update
    */
    const update = (_delta) => {
      value.default = MathUtils.damp(value.default, this.pace.default, amount, _delta)

      value.separated.x = MathUtils.damp(value.separated.x, this.pace.separated.x, amount, _delta)
      value.separated.y = MathUtils.damp(value.separated.y, this.pace.separated.y, amount, _delta)
    }

    /* 
      Set Amount
    */
    const setAmount = (_amount) => {
      amount = _amount
    }

    /* 
      Return
    */
    return {
      value,
      update,
      setAmount,
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
      distance: {
        default: 0,
        separated: new Vector2(),
      },
      pace: {
        default: 0,
        separated: new Vector2(),
      },
    }
    let amount = _amount

    /* 
      Update
    */
    const update = (_delta) => {
      value.distance.default = MathUtils.damp(value.distance.default, this.drag.distance.default, amount, _delta)
      value.distance.separated.x = MathUtils.damp(value.distance.separated.x, this.drag.distance.separated.x, amount, _delta)
      value.distance.separated.y = MathUtils.damp(value.distance.separated.y, this.drag.distance.separated.y, amount, _delta)

      value.pace.default = MathUtils.damp(value.pace.default, this.drag.pace.default, amount, _delta)
      value.pace.separated.x = MathUtils.damp(value.pace.separated.x, this.drag.pace.separated.x, amount, _delta)
      value.pace.separated.y = MathUtils.damp(value.pace.separated.y, this.drag.pace.separated.y, amount, _delta)
    }

    /* 
      Set Amount
    */
    const setAmount = (_amount) => {
      amount = _amount
    }

    /* 
      Return
    */
    return {
      value,
      update,
      setAmount,
    }
  }
}
