import * as THREE from 'three/webgpu'
import { uv, float, vec2, vec3, vec4, attributeArray, hash, instanceIndex, instancedArray, div, sqrt, mod, floor, instancedBufferAttribute, Fn, color, sin, time, uniform, distance, length, step } from 'three/tsl'
import Gl from '../../Gl'

export default class Particles {
  constructor() {
    this.gl = new Gl()

    this.instance = new THREE.Group()

    /* 
      Settings
    */
    this.settings = {
      dimensions: new THREE.Vector2(100, 100),
      gap: new THREE.Vector2(0.1, 0.1),
      size: 10,
    }

    /* 
      Buffers
    */
    const positionBuffer = instancedArray(this.settings.dimensions.x * this.settings.dimensions.y, 'vec3')

    /* 
      Vertex
    */
    const computeInit = Fn(() => {
      const position = positionBuffer.element(instanceIndex)

      // X
      position.x = instanceIndex.mod(this.settings.dimensions.x)
      position.x.subAssign(float(this.settings.dimensions.x).div(2))
      position.x.mulAssign(this.settings.gap.x)

      // Y
      position.y = 0

      // Z
      position.z = floor(float(instanceIndex).div(this.settings.dimensions.y))
      position.z.subAssign(float(this.settings.dimensions.y).div(2))
      position.z.mulAssign(this.settings.gap.y)
    })().compute(this.settings.dimensions.x * this.settings.dimensions.y)

    const computeUpdate = Fn(() => {
      const position = positionBuffer.element(instanceIndex)

      position.y = sin(float(instanceIndex).mul(0.005).add(time)).mul(0.1)
    })

    this.computeNode = computeUpdate().compute(this.settings.dimensions.x * this.settings.dimensions.y)

    /* 
      Material
    */
    const particleMaterial = new THREE.PointsNodeMaterial()
    particleMaterial.outputNode = Fn(() => {
      /* 
        Make particle round
      */
      const dist = length(uv().mul(2).sub(1)).oneMinus().toVar()
      dist.assign(step(0.5, dist))

      return vec4(vec3(1.0), dist)
    })()

    particleMaterial.positionNode = positionBuffer.element(instanceIndex)
    particleMaterial.depthWrite = false
    particleMaterial.depthTest = true
    particleMaterial.sizeAttenuation = false
    particleMaterial.sizeNode = this.settings.size

    /* 
      Mesh
    */
    const particles = new THREE.Sprite(particleMaterial)
    particles.count = this.settings.dimensions.x * this.settings.dimensions.y
    particles.frustumCulled = false

    this.instance.add(particles)

    this.gl.renderer.instance.computeAsync(computeInit)
  }

  update() {
    this.gl.renderer.instance.computeAsync(this.computeNode)
  }
}
