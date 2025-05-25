import * as THREE from 'three/webgpu'
import { uv, vec4, attributeArray, hash, instanceIndex, instancedArray, Fn } from 'three/tsl'
import Gl from '../../Gl'

export default class Particles {
  constructor() {
    this.gl = new Gl()

    this.count = 10000

    this.positionBuffer = instancedArray(this.count, 'vec3')

    this.computeInit = Fn(() => {
      const position = this.positionBuffer.element(instanceIndex)

      const randX = hash(instanceIndex)
      const randY = hash(instanceIndex.add(2))
      const randZ = hash(instanceIndex.add(3))

      position.x = randX.mul(100).add(-50)
      position.y = 0 // randY.mul( 10 );
      position.z = randZ.mul(100).add(-50)

      // color.assign(vec3(randX, randY, randZ))
    })().compute(this.count)

    this.geometry = new THREE.BufferGeometry()
    this.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(3), 3)) // single vertex ( not triangle )
    this.geometry.drawRange.count = 1 // force render points as instances ( not triangle )

    this.material = new THREE.PointsNodeMaterial({
      size: 0.1,
      sizeAttenuation: true,
      depthWrite: false,
      color: 0x000000,
      // blending: THREE.AdditiveBlending,
      // vertexColors: true,
    })
    this.material.positionNode = this.positionBuffer.element(instanceIndex)

    this.instance = new THREE.Mesh(
      //
      this.geometry,
      this.material
    )
    this.instance.count = this.count
  }

  update() {
    // this.instance.rotation.y += 0.01
    // this.instance.position.y = Math.sin(this.gl.time.elapsed)
  }
}
