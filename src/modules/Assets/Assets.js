import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'

import Gl from '../Gl'

export default class Assets {
  constructor() {
    this.gl = new Gl()

    // Loaders
    this.rgbeLoader = new RGBELoader(this.gl.loadingManager)
    this.gltfLoader = new GLTFLoader(this.gl.loadingManager)

    // Assets
    this.models = {
      suzanne: null,
    }

    this.hdri = null

    this.load()
  }

  load() {
    /*
      Models
    */
    this.gltfLoader.load('/models/suzanne.glb', (_gltf) => {
      this.models.suzanne = _gltf.scene.children[0]
    })

    /*
      HDRI
    */
    this.rgbeLoader.load('./hdri/studio_small_08_1k.hdr', (_texture) => {
      this.hdri = _texture
    })
  }
}
