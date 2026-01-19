import WebGL from 'three/addons/capabilities/WebGL.js'
import gsap from 'gsap'
import { Transform, Camera } from 'ogl'

import Renderer from './Renderer'

import World from './World/World'

import Time from './Utils/Time'
import Sizes from './Utils/Sizes'
import Mouse from './Utils/Mouse'
import ShaderChunks from './Utils/ShaderChunks'

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
    this.isDebug = this.urlParams.has('debug') && import.meta.env.DEV

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
    this.shaderChunks = new ShaderChunks()

    /* 
      Renderer
    */
    this.renderer = new Renderer()

    /* 
      Scene & Camera
    */
    this.scene = new Transform()
    this.camera = new Camera()

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

  async init() {
    if (this.isDebug) {
      const Debug = (await import('./Utils/Debug')).default
      this.debug = new Debug()
    }

    this.world = new World()
    gsap.ticker.add(this.update.bind(this))

    this.world.add()

    console.log('[WebGL] [ █ █ █ █ █ █ ] -', 'Initialized')
  }

  update() {
    if (this.isLoaded) {
      if (this.isDebug) this.debug.stats.begin()

      this.time.update()
      this.world.update()
      this.renderer.update()
      this.mouse.update()

      if (this.isDebug) this.debug.stats.end()
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
