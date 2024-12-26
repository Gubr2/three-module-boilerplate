import * as THREE from 'three'

import Camera from './Camera'
import Renderer from './Renderer'

import World from './World/World'

import Time from './Utils/Time'
import Sizes from './Utils/Sizes'
import Debug from './Utils/Debug'
import Mouse from './Utils/Mouse'

import Assets from './Assets/Assets'

let instance = null

export default class Gl {
  constructor(_canvas) {
    // Singleton
    if (instance) {
      return instance
    }

    instance = this

    this.urlParams = new URLSearchParams(window.location.search)

    // Flags
    this.isLoaded = false
    this.isDebug = this.urlParams.has('debug')

    // Canvas
    this.canvas = _canvas

    // Utils
    this.time = new Time()
    this.sizes = new Sizes()
    this.mouse = new Mouse()

    // Default
    this.scene = new THREE.Scene()
    this.camera = new Camera()
    this.renderer = new Renderer()

    // Loading Manager
    this.loadingManager = new THREE.LoadingManager()
    this.loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
      if (this.isDebug) console.log('Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.')
    }
    this.loadingManager.onLoad = () => {
      this.world = new World()
      this.isLoaded = true

      if (this.isDebug) this.debug = new Debug()
    }

    // Assets
    this.assets = new Assets()

    // Update
    this.time.on('tick', () => {
      this.update()
    })

    // Resize
    this.sizes.on('resize', () => {
      this.resize()
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
    this.camera.resize()
    this.renderer.resize()
  }
}
