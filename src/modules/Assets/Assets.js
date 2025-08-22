import Gl from '../Gl'

import { Texture, TextureLoader, GLTFLoader } from 'ogl'

export default class Assets {
  constructor() {
    this.gl = new Gl()

    /* 
      Loaders
    */

    /* 
      Assets
    */
    this.models = {}
    this.textures = {}
    this.hdris = {}
    this.fonts = {}
  }

  customTextureLoader(_path, _target) {
    return new Promise((_resolve) => {
      const texture = new Texture(this.gl.renderer.instance.gl)

      TextureLoader.loadImage(this.gl.renderer.instance.gl, _path, texture, true).then((_result) => {
        _resolve()

        _target(texture)

        if (this.gl.isDebug) this.logProgress(_path)
      })
    })
  }

  customModelLoader(_path, _target) {
    return new Promise((_resolve) => {
      GLTFLoader.load(this.gl.renderer.instance.gl, _path).then((_result) => {
        _resolve()

        _target(_result)

        if (this.gl.isDebug) this.logProgress(_path)
      })
    })
  }

  customHdriLoader(_path, _target) {
    return new Promise((_resolve) => {
      this.rgbeLoader.load(
        _path,
        (_result) => {
          _resolve()

          _target(_result)

          if (this.gl.isDebug) this.logProgress(_path)
        },
        undefined,
        (_error) => {
          console.error(_error)
        }
      )
    })
  }

  customFontLoader(_path, _target) {
    return new Promise((_resolve) => {
      this.fontLoader.load(
        _path,
        (_result) => {
          _resolve()

          _target(_result)

          if (this.gl.isDebug) this.logProgress(_path)
        },
        undefined,
        (_error) => {
          console.error(_error)
        }
      )
    })
  }

  logProgress(_path) {
    this.promisesProgress++

    console.info(`[WebGL] [ ${this.promisesProgress}/${this.promises.length} asset loaded ] -`, _path)
  }

  load() {
    this.promises = []
    this.promisesProgress = 0

    return new Promise(async (_resolve) => {
      /* 
        Await
      */
      if (this.promises.length > 0) {
        await Promise.all(this.promises)
      }

      _resolve()

      console.log('[WebGL] [ █ █ █ █     ] -', 'Assets loaded')
    })
  }
}
