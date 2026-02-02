import { Texture, TextureLoader } from 'ogl'

import Gl from '../Gl'

export default class Assets {
  constructor() {
    this.gl = new Gl()

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
        const texture = new Texture(this.gl.renderer.instance.gl)

        TextureLoader.loadImage(this.gl.renderer.instance.gl, _path, texture, true).then((_result) => {
          _resolve()

          _target(texture)

          if (_isAsync) {
            this.logAsyncProgress(_path)
          } else {
            this.logProgress(_path)
          }
        })
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
    const loader = () => {
      return new Promise((_resolve) => {
        fetch(_path)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`)
            }
            return response.arrayBuffer()
          })
          .then(async (arrayBuffer) => {
            const desc = GLTFLoader.unpackGLB(arrayBuffer)
            const gltf = await GLTFLoader.parse(this.gl.renderer.instance.gl, desc, '')

            _target(gltf)

            this.logProgress(_path)

            _resolve()
          })
          .catch((_error) => console.error(`Failed to load model data from path: ${_path}`, _error))
      })
    }

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
        this.textures.noise.wrapS = this.gl.renderer.instance.gl.REPEAT
        this.textures.noise.wrapT = this.gl.renderer.instance.gl.REPEAT
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
