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

    /* 
      Canvas
    */
    this.canvas = null

    /* 
      Utils
    */
    this.time = new Time()
    this.sizes = new Sizes()
    this.mouse = new Mouse()

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
    this.sizes.on('resize', () => {
      this.resize()
    })
  }

  init() {
    if (this.isDebug) this.debug = new Debug()

    this.canvas = document.querySelector(this.params.canvas)

    this.world = new World()
    this.renderer = new Renderer()
    gsap.ticker.add(this.update.bind(this))

    this.world.add()

    console.log('[WebGL] [ █ █ █ █ █ █ ] -', 'Initialized')
  }

  load() {
    return new Promise((_resolve) => {
      Promise.all([this.loadDOM(), this.assets.load()]).then(() => {
        this.isLoaded = true

        _resolve()
      })
    })
  }

  loadDOM() {
    return new Promise((_resolve) => {
      if (document.readyState === 'complete') {
        console.log('[WebGL] [ █ █         ] -', 'DOM loaded')
        _resolve()
      } else {
        window.addEventListener('load', () => {
          console.log('[WebGL] [ █ █         ] -', 'DOM loaded')
          _resolve()
        })
      }
    })
  }

  update() {
    if (this.isLoaded) {
      if (this.isDebug) this.debug.stats.begin()

      this.renderer.update()
      this.world.update()
      this.mouse.update()

      if (this.isDebug) this.debug.stats.end()
    }
  }

  resize() {
    this.mouse.resize()

    if (this.isLoaded) {
      this.renderer.resize()
      this.world.resize()
    }
  }
}
