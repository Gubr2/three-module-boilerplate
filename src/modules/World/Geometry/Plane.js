import * as THREE from 'three/webgpu'
import { uv, vec4 } from 'three/tsl'

export default class Plane {
  constructor() {
    this.instance = new THREE.Mesh(
      //
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicNodeMaterial({
        colorNode: vec4(uv().x, uv().y, 0.0, 1.0),
        side: THREE.DoubleSide,
      })
    )
  }

  update() {
    this.instance.rotation.y += 0.01
  }
}
