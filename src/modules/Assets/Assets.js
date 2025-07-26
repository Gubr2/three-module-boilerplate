import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'

import Gl from '../Gl'

export default class Assets {
  constructor() {
    this.gl = new Gl()

    /* 
      Loaders
    */
    this.gltfLoader = new GLTFLoader()
    this.rgbeLoader = new RGBELoader()
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
        Models
      */
      this.promises.push(
        this.customModelLoader('/models/suzanne.glb', (_result) => {
          this.models.suzanne = _result.scene.children[0]
        })
      )

      /* 
        HDRIs
      */
      this.promises.push(
        this.customHdriLoader('/hdri/studio_small_08_1k.hdr', (_result) => {
          this.hdris.studio = _result
          this.hdris.studio.mapping = THREE.EquirectangularReflectionMapping
        })
      )

      /* 
        Await
      */
      await Promise.all(this.promises)

      _resolve()

      console.log('[WebGL] [ █ █ █ █     ] -', 'Assets loaded')
    })
  }
}
