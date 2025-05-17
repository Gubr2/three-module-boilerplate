import * as THREE from 'three/webgpu'
import { uv, vec4 } from 'three/tsl'
import Gl from '../../Gl'

export default class Plane {
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
  }

  update() {
    this.instance.rotation.y += 0.01
    this.instance.position.y = Math.sin(this.gl.time.elapsed)
  }
}
