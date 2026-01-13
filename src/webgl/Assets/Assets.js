import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader.js'
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'

import Gl from '../Gl'

export default class Assets {
  constructor() {
    this.gl = new Gl()

    /* 
      Loaders
    */
    this.gltfLoader = new GLTFLoader()
    this.hdriLoader = new HDRLoader()
    this.textureLoader = new THREE.TextureLoader()
    // this.fontLoader = new FontLoader()

    /* 
      Assets
    */
    this.models = {}
    this.textures = {}
    this.hdris = {}
    this.fonts = {}
  }

  customTextureLoader(_path, _target, _isAsync = false) {
    const loader = () =>
      new Promise((_resolve) => {
        this.textureLoader.load(
          _path,
          (_result) => {
            _resolve()

            _target(_result)

            if (_isAsync) {
              this.logAsyncProgress(_path)
            } else {
              this.logProgress(_path)
            }
          },
          undefined,
          (_error) => {
            console.error(_error)
          }
        )
      })

    if (_isAsync) {
      this.promisesAsync.push(loader)
    } else {
      const promise = loader()
      this.promises.push(promise)
      return promise
    }
  }

  customKTX2TextureLoader(_path, _target, _isAsync = false) {
    const loader = () =>
      new Promise((_resolve) => {
        this.ktx2Loader.load(
          _path,
          (_result) => {
            _resolve()

            _result.colorSpace = THREE.LinearSRGBColorSpace

            _target(_result)

            if (_isAsync) {
              this.logAsyncProgress(_path)
            } else {
              this.logProgress(_path)
            }
          },
          undefined,
          (_error) => {
            console.error(_error)
          }
        )
      })

    if (_isAsync) {
      this.promisesAsync.push(loader)
    } else {
      const promise = loader()
      this.promises.push(promise)
      return promise
    }
  }

  customModelLoader(_path, _target, _isAsync = false) {
    const loader = () =>
      new Promise((_resolve) => {
        this.gltfLoader.load(
          _path,
          (_result) => {
            _resolve()

            _target(_result)

            if (_isAsync) {
              this.logAsyncProgress(_path)
            } else {
              this.logProgress(_path)
            }
          },
          undefined,
          (_error) => {
            console.error(_error)
          }
        )
      })

    if (_isAsync) {
      this.promisesAsync.push(loader)
    } else {
      const promise = loader()

      this.promises.push(promise)

      return promise
    }
  }

  customHdriLoader(_path, _target, _isAsync = false) {
    const loader = () =>
      new Promise((_resolve) => {
        this.hdriLoader.load(
          _path,
          (_result) => {
            _target(_result)

            _resolve()

            if (_isAsync) {
              this.logAsyncProgress(_path)
            } else {
              this.logProgress(_path)
            }
          },
          undefined,
          (_error) => {
            console.error(_error)
          }
        )
      })

    if (_isAsync) {
      this.promisesAsync.push(loader)
    } else {
      const promise = loader()

      this.promises.push(promise)

      return promise
    }
  }

  customFontLoader(_path, _target, _isAsync = false) {
    const loader = () =>
      new Promise((_resolve) => {
        this.fontLoader.load(
          _path,
          (_result) => {
            _resolve()

            _target(_result)

            if (_isAsync) {
              this.logAsyncProgress(_path)
            } else {
              this.logProgress(_path)
            }
          },
          undefined,
          (_error) => {
            console.error(_error)
          }
        )
      })

    if (_isAsync) {
      this.promisesAsync.push(loader)
    } else {
      const promise = loader()
      this.promises.push(promise)
      return promise
    }
  }

  logProgress(_path) {
    this.promisesProgress++

    if (this.gl.isDebug) console.info(`[WebGL] [ ${this.promisesProgress}/${this.promises.length} asset loaded ] -`, _path)
  }

  logProgressAsync(_path) {
    this.promisesAsyncProgress++

    if (this.gl.isDebug) console.info(`[WebGL] [ ${this.promisesAsyncProgress}/${this.promisesAsync.length} async asset loaded ] -`, _path)
  }

  load() {
    this.promises = []
    this.promisesProgress = 0

    this.promisesAsync = []
    this.promisesAsyncProgress = 0

    return new Promise(async (_resolve) => {
      /* 
        Textures
      */
      this.customTextureLoader('/textures/noise.png', (_result) => {
        this.textures.noise = _result
        this.textures.noise.wrapS = THREE.RepeatWrapping
        this.textures.noise.wrapT = THREE.RepeatWrapping
      })

      /* 
        Await
      */
      await Promise.all(this.promises)

      _resolve()

      console.log('[WebGL] [ █ █ █ █     ] -', 'Assets loaded')

      // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
      // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
      // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

      /* 
        Async
      */
      this.promisesAsync.map((_fn) => _fn()) // Async promises needs to be called manually, thats why they are placed in arrow functions
      Promise.all(this.promisesAsync).then(() => {
        console.log('[WebGL] [  A S Y N C  ] -', 'Async assets loaded')
      })
    })
  }
}
