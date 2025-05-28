import * as THREE from 'three/webgpu'
import { uv, float, vec2, vec3, vec4, attributeArray, hash, instanceIndex, instancedArray, instancedBufferAttribute, Fn, color, sin, time, uniform, distance, step } from 'three/tsl'
import Gl from '../../Gl'

export default class Particles {
  constructor() {
    this.gl = new Gl()

    this.instance = new THREE.Group()

    const particleCount = 500000
    const size = uniform(0.01)

    const positionBuffer = instancedArray(particleCount, 'vec3')
    const velocityBuffer = instancedArray(particleCount, 'vec3')
    const colorBuffer = instancedArray(particleCount, 'vec3')

    // compute

    const computeInit = Fn(() => {
      const position = positionBuffer.element(instanceIndex)
      const color = colorBuffer.element(instanceIndex)

      const randX = hash(instanceIndex)
      const randY = hash(instanceIndex.add(2))
      const randZ = hash(instanceIndex.add(3))

      position.x = randX.mul(100).add(-50)
      position.y = 0 // randY.mul( 10 );
      position.z = randZ.mul(100).add(-50)

      color.assign(vec3(randX, randY, randZ))
    })().compute(particleCount)

    //

    // const computeUpdate = Fn(() => {
    //   const position = positionBuffer.element(instanceIndex)
    //   const velocity = velocityBuffer.element(instanceIndex)

    //   velocity.addAssign(vec3(0.0, gravity, 0.0))
    //   position.addAssign(velocity)

    //   velocity.mulAssign(friction)

    //   // floor

    //   If(position.y.lessThan(0), () => {
    //     position.y = 0
    //     velocity.y = velocity.y.negate().mul(bounce)

    //     // floor friction

    //     velocity.x = velocity.x.mul(0.9)
    //     velocity.z = velocity.z.mul(0.9)
    //   })
    // })

    // const computeParticles = computeUpdate().compute(particleCount)

    // create nodes

    // const textureNode = texture(map)

    // create particles

    // particleGeometry.drawRange.count = 1

    const particleMaterial = new THREE.PointsNodeMaterial()
    particleMaterial.outputNode = Fn(() => {
      const dist = distance(uv().mul(2).sub(1)).oneMinus().toVar()
      dist.assign(step(0.5, dist))

      return vec4(vec3(1.0), dist)
    })()
    particleMaterial.positionNode = positionBuffer.element(instanceIndex)
    particleMaterial.depthWrite = false
    particleMaterial.depthTest = true
    particleMaterial.sizeAttenuation = false
    particleMaterial.sizeNode = float(20)

    const particles = new THREE.Sprite(particleMaterial)
    particles.count = particleCount
    particles.frustumCulled = false
    this.instance.add(particles)

    this.gl.renderer.instance.computeAsync(computeInit)
  }

  update() {}
}
