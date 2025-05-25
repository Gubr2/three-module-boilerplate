import * as THREE from 'three/webgpu'
import { uv, vec4, attributeArray } from 'three/tsl'
import Gl from '../../Gl'

export default class Particles {
  constructor() {
    this.gl = new Gl()

    this.instance = new THREE.Mesh(
      //
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicNodeMaterial({
        colorNode: vec4(uv().x, uv().y, 0.0, 1.0),
        side: THREE.DoubleSide,
      })
    )

    this.count = 1000
    this.positionsArray = new Float32Array(this.count * 3)

    for (let i = 0; i < this.count; i++) {
      this.positionsArray[i * 3] = Math.random() * 2 - 1
      this.positionsArray[i * 3 + 1] = Math.random() * 2 - 1
      this.positionsArray[i * 3 + 2] = Math.random() * 2 - 1
    }

    const positionStorage = attributeArray(this.positionsArray, 'vec3')
    positionStorage.setPBO()
  }

  update() {
    // this.instance.rotation.y += 0.01
    // this.instance.position.y = Math.sin(this.gl.time.elapsed)
  }
}
