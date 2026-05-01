import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader.js'
import { UltraHDRLoader } from 'three/addons/loaders/UltraHDRLoader.js'
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

  checkIfMandatory(_sceneDependencies) {
    // By default, every asset is loaded async
    // ↳ This forces me to set assets dependency for each scene
    if (!_sceneDependencies) return false

    if (_sceneDependencies == 'all') {
      return true
    } else {
      return _sceneDependencies.some((_item) => this.activeScenes.some((_scene) => _scene === _item)) // Check for exact match here thats why I'm not using includes() )
    }
  }

  customTextureLoader(_path, _target, _sceneDependencies = false) {
    /* 
      Check if mandatory
    */
    const isMandatory = this.checkIfMandatory(_sceneDependencies)

    /* 
      Load
    */
    const loader = () =>
      new Promise((_resolve) => {
        this.textureLoader.load(
          _path,
          (_result) => {
            _resolve()

            _target(_result)

            if (isMandatory) {
              this.logProgress(_path)
            } else {
              this.logAsyncProgress(_path)
            }
          },
          undefined,
          (_error) => {
            console.error(_error)
          },
        )
      })

    /* 
      Resolve
    */
    if (isMandatory) {
      const promise = loader()
      this.promises.push(promise)
      // return promise
    } else {
      this.promisesAsync.push(loader)
    }
  }

  customKTX2TextureLoader(_path, _target, _sceneDependencies = false) {
    /* 
      Check if mandatory
    */
    const isMandatory = this.checkIfMandatory(_sceneDependencies)

    /* 
      Load
    */
    const loader = () =>
      new Promise((_resolve) => {
        this.ktx2Loader.load(
          _path,
          (_result) => {
            _resolve()

            _result.colorSpace = THREE.LinearSRGBColorSpace

            _target(_result)

            if (isMandatory) {
              this.logProgress(_path)
            } else {
              this.logAsyncProgress(_path)
            }
          },
          undefined,
          (_error) => {
            console.error(_error)
          },
        )
      })


    /* 
      Resolve
    */
    if (isMandatory) {
      const promise = loader()
      this.promises.push(promise)
      // return promise
    } else {
      this.promisesAsync.push(loader)
    }
  }

  customModelLoader(_path, _target, _sceneDependencies = false, _delay = 0) {
    /* 
      Check if mandatory
    */
    const isMandatory = this.checkIfMandatory(_sceneDependencies)

    /* 
      Load
    */
    const loader = () =>
      new Promise((_resolve) => {
        this.gltfLoader.load(
          _path,
          (_result) => {
            setTimeout(() => {
              _resolve()

              _target(_result)

              if (isMandatory) {
                this.logProgress(_path)
              } else {
                this.logAsyncProgress(_path)
              }
            }, _delay)
          },
          undefined,
          (_error) => {
            console.error(_error)
          },
        )
      })


    /* 
      Resolve
    */
    if (isMandatory) {
      const promise = loader()
      this.promises.push(promise)
      // return promise
    } else {
      this.promisesAsync.push(loader)
    }
  }

  customHdriLoader(_path, _target, _sceneDependencies = false) {
    /* 
      Check if mandatory
    */
    const isMandatory = this.checkIfMandatory(_sceneDependencies)

    /* 
      Load
    */
    const loader = () =>
      new Promise((_resolve) => {
        this.hdriLoader.load(
          _path,
          (_result) => {
            _target(_result)

            _resolve()

            if (isMandatory) {
              this.logProgress(_path)
            } else {
              this.logAsyncProgress(_path)
            }
          },
          undefined,
          (_error) => {
            console.error(_error)
          },
        )
      })

    /* 
      Resolve
    */
    if (isMandatory) {
      const promise = loader()
      this.promises.push(promise)
      // return promise
    } else {
      this.promisesAsync.push(loader)
    }
  }

  customExrLoader(_path, _target, _sceneDependencies = false) {
    /* 
      Check if mandatory
    */
    const isMandatory = this.checkIfMandatory(_sceneDependencies)

    /* 
      Load
    */
    const loader = () =>
      new Promise((_resolve) => {
        this.exrLoader.load(
          _path,
          (_result) => {
            _target(_result)

            _resolve()

            if (isMandatory) {
              this.logProgress(_path)
            } else {
              this.logAsyncProgress(_path)
            }
          },
          undefined,
          (_error) => {
            console.error(_error)
          },
        )
      })

    /* 
      Resolve
    */
    if (isMandatory) {
      const promise = loader()
      this.promises.push(promise)
      // return promise
    } else {
      this.promisesAsync.push(loader)
    }
  }

  customFontLoader(_path, _target, _sceneDependencies = false) {
    /* 
      Check if mandatory
    */
    const isMandatory = this.checkIfMandatory(_sceneDependencies)

    /* 
      Load
    */
    const loader = () =>
      new Promise((_resolve) => {
        this.fontLoader.load(
          _path,
          (_result) => {
            _resolve()

            _target(_result)

            if (isMandatory) {
              this.logProgress(_path)
            } else {
              this.logAsyncProgress(_path)
            }
          },
          undefined,
          (_error) => {
            console.error(_error)
          },
        )
      })

    /* 
      Resolve
    */
    if (isMandatory) {
      const promise = loader()
      this.promises.push(promise)
      // return promise
    } else {
      this.promisesAsync.push(loader)
    }
  }

  logProgress(_path) {
    this.promisesProgress++

    if (this.gl.isDebug) console.info(`[WebGL] [ ${this.promisesProgress}/${this.promises.length} asset loaded ] -`, _path)
  }

  logAsyncProgress(_path) {
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
      }, 'all')

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
      const promisesAsync = this.promisesAsync.map((_fn) => _fn()) // Async promises needs to be called manually, thats why they are placed in arrow functions

      Promise.all(promisesAsync).then(() => {
        console.log('[WebGL] [  A S Y N C  ] -', 'Async assets loaded')
      })

      /* 
        All
        ↳ For preloader hiding and transition – to make sure, everything is loaded
      */
      Promise.all([...this.promises, ...promisesAsync]).then(() => {
        console.log('[WebGL] [    A L L    ] -', 'All assets loaded')
      })
    })
  }
}
