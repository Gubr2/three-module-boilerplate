import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader.js'
// import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js'
// import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js'
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'

import Gl from '../Gl'

type Dependencies = 'all' | string[] | false

export default class Assets {
  gl: Gl
  textureLoader: THREE.TextureLoader
  // gltfLoader: GLTFLoader
  // ktx2Loader: KTX2Loader
  // hdrLoader: HDRLoader
  // exrLoader: EXRLoader
  // fontLoader: FontLoader

  path: string

  models: Record<string, any>
  textures: Record<string, THREE.Texture>
  hdris: Record<string, THREE.Texture>
  fonts: Record<string, any>

  promises: Promise<void>[]
  promisesProgress: number
  promisesAsync: {
    dependencies: Dependencies
    loader: () => Promise<void>
  }[]
  promisesAsyncProgress: number
  sortedAsyncPromises: Record<string, Promise<void>[]>

  constructor() {
    this.gl = new Gl()

    /* 
      Path
    */
    this.path = ''

    /* 
      Loaders
    */
    this.textureLoader = new THREE.TextureLoader()
    //  this.gltfLoader = new GLTFLoader()
    // this.ktx2Loader = new KTX2Loader()
    // this.hdrLoader = new HDRLoader()
    // this.exrLoader = new EXRLoader()
    // this.fontLoader = new FontLoader()

    /* 
      Assets
    */
    this.models = {}
    this.textures = {}
    this.hdris = {}
    this.fonts = {}

    /* 
      Promises
    */
    this.promises = []
    this.promisesProgress = 0

    this.promisesAsync = []
    this.promisesAsyncProgress = 0

    this.sortedAsyncPromises = {}
  }

  load() {
    return new Promise<void>(async (_resolve) => {
      /* 
        Textures
      */
      this.customLoader(
        this.path + 'textures/noise.webp',
        this.textureLoader,
        (_result: THREE.Texture) => {
          this.textures.noise = _result
          this.textures.noise.wrapS = THREE.RepeatWrapping
          this.textures.noise.wrapT = THREE.RepeatWrapping
        },
        'all'
      )

      /* 
        Await
      */
      await Promise.all(this.promises)

      _resolve()

      console.log('[WebGL] [ █ █ █ █     ] -', 'Assets loaded')
    })
  }

  loadAsync() {
    const promisesAsync = this.promisesAsync.map((_asyncAsset) => _asyncAsset.loader()) // Async promises needs to be called manually, thats why they are placed in arrow functions

    // Sort async promises based on dependencies
    this.sortedAsyncPromises = this.sortAsyncPromisesBasedOnDependencies(promisesAsync)

    // Listen to all async promises
    Promise.all(promisesAsync).then(() => {
      console.log('[WebGL] [  A S Y N C  ] -', 'Async assets loaded')
    })

    // Listen to all promises together
    // ↳ For preloader hiding and transition – to make sure, everything is loaded
    Promise.all([...this.promises, ...promisesAsync]).then(() => {
      console.log('[WebGL] [    A L L    ] -', 'All assets loaded')
    })
  }

  private checkIfMandatory(_sceneDependencies: Dependencies) {
    if (_sceneDependencies === 'all') {
      return true
      // Scene dependency must be placed in an array
    } else if (Array.isArray(_sceneDependencies)) {
      return _sceneDependencies.some((_item) => this.gl.manager.sceneDoms.some((_scene) => _scene.name === _item))
    } else {
      // By default, every asset is loaded async
      // ↳ This forces me to set assets dependency for each scene
      return false
    }
  }

  /* 
    Can be used to check if all async dependencies are loaded
    ↳ For example during page transitions
  */
  async checkSceneDependenciesLoaded(_scenes: string[]) {
    return new Promise<void>(async (_resolve) => {
      if (!_scenes.length) return _resolve()

      await Promise.all(
        _scenes.map(async (_scene) => {
          const promises = this.sortedAsyncPromises[_scene]

          if (promises) {
            await Promise.all(promises)
          } else {
            console.warn(`[WebGL] [ Scene: ${_scene} ] - No promises found for this async scene`)
          }
        })
      )

      _resolve()
    })
  }

  /* 
    Sorts async promises 
    ↳ Runs automatically in the load method    
  */
  private sortAsyncPromisesBasedOnDependencies(_promisesAsync: Promise<void>[]) {
    const sortedAsyncPromises: Record<string, Promise<void>[]> = {}

    _promisesAsync.forEach((_promise, _index) => {
      // Check if
      if (!Array.isArray(this.promisesAsync[_index].dependencies)) return

      this.promisesAsync[_index].dependencies.forEach((_dependency) => {
        if (!sortedAsyncPromises[_dependency]) {
          sortedAsyncPromises[_dependency] = []
        }
        sortedAsyncPromises[_dependency].push(_promise)
      })
    })

    return sortedAsyncPromises
  }

  /* 
    Adjustable custom loader that works with most of threejs loaders
    ↳ Logs progress
    ↳ Sorts mandatory assets for first load vs async assets based on scene dependencies
  */
  private customLoader(_path: string, _loader: any, _target: (result: any) => void, _sceneDependencies: Dependencies) {
    /* 
      Check if mandatory
    */
    const isMandatory = this.checkIfMandatory(_sceneDependencies)

    /* 
      Load
    */
    const loader = () =>
      new Promise<void>((_resolve) => {
        _loader.load(
          _path,
          async (_result: any) => {
            // Initialize mandatory texture
            if (_result instanceof THREE.Texture && isMandatory) this.gl.renderer.instance.initTexture(_result)

            // Target
            _target(_result)

            // Log progress
            if (isMandatory) {
              this.logProgress(_path)
            } else {
              this.logAsyncProgress(_path)
            }

            // Resolve promise
            _resolve()
          },
          undefined,
          (_error: any) => {
            console.error(_error)
          }
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
      this.promisesAsync.push({
        dependencies: _sceneDependencies,
        loader: loader,
      })
    }
  }

  private logProgress(_path: string) {
    this.promisesProgress++

    if (this.gl.isDebug) console.info(`[WebGL] [ ${this.promisesProgress}/${this.promises.length} asset loaded ] -`, _path)
  }

  private logAsyncProgress(_path: string) {
    this.promisesAsyncProgress++

    if (this.gl.isDebug) console.info(`[WebGL] [ ${this.promisesAsyncProgress}/${this.promisesAsync.length} async asset loaded ] -`, _path)
  }
}
