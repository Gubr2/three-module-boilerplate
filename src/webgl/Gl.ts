import WebGL from 'three/addons/capabilities/WebGL.js'
import * as THREE from 'three'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Renderer from './Renderer'

import World from './World/World'

import Time from './Utils/Time'
import Sizes from './Utils/Sizes'
import Mouse from './Utils/Mouse'
import ShaderChunks from './Utils/ShaderChunks'
import Dispose from './Utils/Dispose'

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
    this.canvas = this.params.canvas

    /* 
      Utils
    */
    this.time = new Time()
    this.sizes = new Sizes()
    this.mouse = new Mouse()
    this.shaderChunks = new ShaderChunks()
    this.dispose = new Dispose()

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

      ScrollTrigger.refresh() // Manual refresh after everyting gets resized to make sure scroll trigger positioning applies
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
      if (this.isDebug) this.debug.perf.begin()

      this.time.update()
      this.world.update()
      this.renderer.update()
      this.mouse.update()

      if (this.isDebug) this.debug.perf.end()
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
