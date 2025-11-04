import WebGL from 'three/addons/capabilities/WebGL.js'
import * as THREE from 'three'
import gsap from 'gsap'

import Renderer from './Renderer'

import World from './World/World'

import Time from './Utils/Time'
import Sizes from './Utils/Sizes'
import Debug from './Utils/Debug'
import Mouse from './Utils/Mouse'

import Assets from './Assets/Assets'

let instance = null

export default class Gl {
  constructor(_params) {
    /* 
      Singleton
    */
    if (instance) {
      return instance
    }

    instance = this

    /* 
      Check if WebGL 2.0 is available
    */
    if (WebGL.isWebGL2Available()) {
      this.setup(_params)
    } else {
      // Fallback
      console.log('[WebGL] [   (╯︵╰,)   ] -', 'WebGL 2.0 is not available - initializing fallback.')

      document.documentElement.classList.add('webgl-not-available')
    }
  }

  setup(_params) {
    /* 
      Get Debug 
    */
    this.urlParams = new URLSearchParams(window.location.search)
    this.isDebug = this.urlParams.has('debug')

    /* 
      Params
    */
    this.params = _params

    /* 
      Flags
    */
    this.isLoaded = false
    this.didResizedBeforeWebglLoaded = false

    /* 
      Canvas
    */
    this.canvas = document.querySelector(this.params.canvas)

    /* 
      Utils
    */
    this.time = new Time()
    this.sizes = new Sizes()
    this.mouse = new Mouse()

    /* 
      Renderer
    */
    this.renderer = new Renderer()

    /* 
      Scene & Camera
    */
    this.scene = new THREE.Scene()
    this.camera = new THREE.Camera()

    /* 
      Assets
    */
    this.assets = new Assets()

    /* 
      Functions
    */
    window.addEventListener('resize', () => {
      this.resize()

      if (!this.isLoaded) {
        this.didResizedBeforeWebglLoaded = true
      }
    })
  }

  load() {
    return new Promise((_resolve) => {
      if (WebGL.isWebGL2Available()) {
        this.assets.load().then(() => {
          this.init()

          this.isLoaded = true

          _resolve()

          /* 
            Fix accidental rescale before webgl is loaded
          */
          if (this.didResizedBeforeWebglLoaded) {
            this.resize()
          }
        })
      } else {
        // Fallback
        _resolve()
      }
    })
  }

  init() {
    if (this.isDebug) this.debug = new Debug()

    this.world = new World()
    gsap.ticker.add(this.update.bind(this))

    this.world.add()

    console.log('[WebGL] [ █ █ █ █ █ █ ] -', 'Initialized')
  }

  loadDOM() {
    return new Promise((_resolve) => {
      if (document.readyState === 'interactive') {
        console.log('[WebGL] [ █ █         ] -', 'DOM loaded')
        _resolve()
      } else {
        document.addEventListener('DOMContentLoaded', () => {
          console.log('[WebGL] [ █ █         ] -', 'DOM loaded')
          _resolve()
        })
      }
    })
  }

  update() {
    if (this.isLoaded) {
      this.time.update()
      this.world.update()
      this.renderer.update()
      this.mouse.update()

      if (this.isDebug) this.debug.update()
    }
  }

  resize() {
    this.sizes.resize()

    if (this.isLoaded) {
      this.renderer.resize()
      this.world.resize()
    }

    this.mouse.resize()
  }
}
