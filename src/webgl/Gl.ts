import WebGL from 'three/addons/capabilities/WebGL.js'
import * as THREE from 'three'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Renderer from './Renderer'

import Time from './Utils/Time'
import Sizes from './Utils/Sizes'
import Mouse from './Utils/Mouse'
import ShaderChunks from './Utils/ShaderChunks'
import Dispose from './Utils/Dispose'
import Misc from './Utils/Misc'

import Assets from './Scenes/Assets'
import Manager from './Scenes/Manager'

interface Params {
  canvas: HTMLCanvasElement
}

let instance: Gl | null = null

export default class Gl {
  urlParams!: URLSearchParams
  isDebug: boolean = false
  params?: Params
  isLoaded: boolean = false
  didResizedBeforeWebglLoaded: boolean = false
  canvas?: HTMLCanvasElement
  time!: Time
  sizes!: Sizes
  mouse!: Mouse
  shaderChunks!: ShaderChunks
  dispose!: Dispose
  renderer!: Renderer
  scene!: THREE.Scene
  camera!: THREE.Camera
  manager!: Manager
  assets!: Assets
  misc!: Misc
  debug?: any
  compilePromises!: Promise<void>[]

  constructor(_params?: Params) {
    /*
      Singleton
    */
    if (instance) {
      return instance
    }

    instance = this

    /* 
      Params
    */
    this.params = _params

    /*
      Check if WebGL 2.0 is available
    */
    if (WebGL.isWebGL2Available()) {
      this.setup()
    } else {
      // Fallback
      console.log('[WebGL] [   (╯︵╰,)   ] -', 'WebGL 2.0 is not available - initializing fallback.')

      document.documentElement.classList.add('webgl-not-available')
    }
  }

  setup(): void {
    /*
      Get Debug
    */
    this.urlParams = new URLSearchParams(window.location.search)
    this.isDebug = this.urlParams.has('debug') && import.meta.env.DEV

    /*
      Flags
    */
    this.isLoaded = false
    this.didResizedBeforeWebglLoaded = false

    /*
      Canvas
    */
    this.canvas = this.params?.canvas

    /*
      Utils
    */
    this.time = new Time()
    this.sizes = new Sizes()
    this.mouse = new Mouse()
    this.shaderChunks = new ShaderChunks()
    this.dispose = new Dispose()
    this.misc = new Misc()

    /*
      Scene & Camera
    */
    this.scene = new THREE.Scene()
    this.camera = new THREE.Camera()

    /*
      Renderer
    */
    this.renderer = new Renderer()

    /* 
      Scene Manager
    */
    this.manager = new Manager()

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

  load(): Promise<void> {
    return new Promise((_resolve) => {
      if (WebGL.isWebGL2Available()) {
        this.assets.load().then(async () => {
          await this.init()

          this.isLoaded = true

          this.manager.init()

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

  async init(): Promise<void> {
    if (this.isDebug) {
      const Debug = (await import('./Utils/Debug')).default
      this.debug = new Debug()
    }

    /* 
      Precompile active scenes
    */
    this.compilePromises = []

    for (const key in this.manager.sceneInstances) {
      const promise = this.manager.sceneInstances[key]?.compile?.()

      if (promise) this.compilePromises.push(promise)
    }

    await Promise.all(this.compilePromises)

    if (this.isDebug) console.log('[WebGL] [  W O R L D  ] -', 'Compiled')

    /* 
      Load async assets after compilation
    */
    this.assets.loadAsync()

    /* 
      Start tick
    */
    gsap.ticker.add(this.update.bind(this))

    if (this.isDebug) console.log('[WebGL] [ █ █ █ █ █ █ ] -', 'Initialized')
  }

  update(): void {
    if (this.isLoaded) {
      if (this.isDebug) this.debug.perf.begin()

      this.time.update()
      this.manager.update()
      this.renderer.update()
      this.mouse.update()

      if (this.isDebug) this.debug.perf.end()
    }
  }

  resize(): void {
    this.sizes.resize()

    if (this.isLoaded) {
      this.renderer.resize()
      this.manager.resize()
    }

    this.mouse.resize()
  }
}
