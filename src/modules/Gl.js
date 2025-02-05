import * as THREE from 'three'

import Camera from './Camera'
import Renderer from './Renderer'

import World from './World/World'

import Time from './Utils/Time'
import Sizes from './Utils/Sizes'
import Debug from './Utils/Debug'
import Mouse from './Utils/Mouse'
import Scroll from './Utils/Scroll'

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
    this.scroll = new Scroll()

    // Default
    this.scene = new THREE.Scene()
    this.camera = new Camera()

    // Loading Manager
    this.loadingManager = new THREE.LoadingManager()

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

    // After Load
    Promise.all([this.loadDOM(), this.loadAssets()]).then(() => {
      this.world = new World()
      this.renderer = new Renderer()

      this.isLoaded = true

      if (this.isDebug) this.debug = new Debug()
    })
  }

  loadAssets() {
    return new Promise((_resolve) => {
      this.loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
        if (this.isDebug) console.log('Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.')
      }

      this.loadingManager.onLoad = () => {
        _resolve()
      }
    })
  }

  loadDOM() {
    return new Promise((_resolve) => {
      window.addEventListener('load', () => {
        _resolve()
      })
    })
  }

  update() {
    this.scroll.update()

    if (this.isLoaded) {
      if (this.isDebug) this.debug.stats.begin()

      this.renderer.update()
      this.world.update()
      this.mouse.update()

      if (this.isDebug) this.debug.stats.end()
    }
  }

  resize() {
    if (this.isLoaded) {
      this.camera.resize()
      this.renderer.resize()
      this.world.resize()
    }
  }
}
