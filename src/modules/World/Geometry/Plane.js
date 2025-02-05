import * as THREE from 'three'

import planeVertex from '../../Shaders/Vertex/vertex.glsl'
import planeFragment from '../../Shaders/Fragment/fragment.glsl'

import Gl from '../../Gl'

export default class Plane {
  constructor() {
    this.gl = new Gl()

    this.geometry = new THREE.PlaneGeometry(1, 1)
    this.material = new THREE.ShaderMaterial({
      //
      fragmentShader: planeFragment,
      vertexShader: planeVertex,
      side: THREE.DoubleSide,
    })
    this.instance = new THREE.Mesh(this.geometry, this.material)

    this.gl.scene.add(this.instance)
  }

  update() {}
}
