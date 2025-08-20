import Gl from '../Gl'

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
      this.textureLoader.load(
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

  customModelLoader(_path, _target) {
    return new Promise((_resolve) => {
      this.gltfLoader.load(
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
