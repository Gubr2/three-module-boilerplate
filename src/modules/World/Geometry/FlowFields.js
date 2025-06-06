import * as THREE from 'three/webgpu'
import { uv, float, vec2, vec3, vec4, normalize, attributeArray, hash, instanceIndex, instancedArray, div, sqrt, mod, floor, min, max, instancedBufferAttribute, Fn, color, sin, time, uniform, distance, length, step, mx_noise_vec3, mx_noise_vec4, mx_noise_float, mx_fractal_noise_vec3, greaterThan, greaterThanEqual, If, deltaTime } from 'three/tsl'
import Gl from '../../Gl'

export default class Particles {
  constructor(_params) {
    this.gl = new Gl()

    /*  
      Instance
    */
    this.instance = new THREE.Group()

    /* 
      Params
    */
    this.params = _params

    /* 
      Settings
    */
    this.settings = {
      dimensions: new THREE.Vector3(50, 50, 50),
      gap: new THREE.Vector3(0.1, 0.1, 0.1),
      size: 8,
    }

    /* 
      Buffers
    */
    const positionBuffer = instancedArray(this.settings.dimensions.x * this.settings.dimensions.y * this.settings.dimensions.z, 'vec3')
    const originalPositionBuffer = instancedArray(this.settings.dimensions.x * this.settings.dimensions.y * this.settings.dimensions.z, 'vec3')
    const colorBuffer = instancedArray(this.settings.dimensions.x * this.settings.dimensions.y * this.settings.dimensions.z, 'vec3')
    const randomBuffer = instancedArray(this.settings.dimensions.x * this.settings.dimensions.y * this.settings.dimensions.z, 'float')

    /* 
      Uniforms
    */

    this.uniforms = {
      uMousePosition: uniform(new THREE.Vector3(0, 0, 0)),
      uMouseVelocity: uniform(new THREE.Vector3(0, 0, 0)),
      uMouseSize: uniform(this.settings.dimensions.x),
    }
    /* 
      Raycaster
    */
    const raycaster = new THREE.Raycaster()
    // raycaster.setFromCamera(uv(), this.camera)

    /* 
      Vertex
    */
    const computeInit = Fn(() => {
      /* 
        Position
      */
      const position = positionBuffer.element(instanceIndex)

      // X
      position.x = instanceIndex.mod(this.settings.dimensions.x)

      // Y
      position.y = floor(float(instanceIndex).div(this.settings.dimensions.y)).mod(this.settings.dimensions.y)

      // Z
      position.z = floor(float(instanceIndex).div(float(this.settings.dimensions.z).mul(this.settings.dimensions.y)))

      // Center
      position.subAssign(float(this.settings.dimensions.x).div(2).sub(0.5))

      /* 
        Original position
      */
      const originalPosition = originalPositionBuffer.element(instanceIndex)
      originalPosition.assign(position)

      /* 
        Color
      */
      const color = colorBuffer.element(instanceIndex)
      color.assign(vec3(1.0))

      /* 
        Random
      */
      const random = randomBuffer.element(instanceIndex)
      random.assign(float(hash(instanceIndex)))

      // color.assign(vec3(random))
    })().compute(this.settings.dimensions.x * this.settings.dimensions.y * this.settings.dimensions.z)

    /* 
      Compute Update
    */
    const computeUpdate = Fn(() => {
      const delta = min(deltaTime, float(1).div(60))

      /* 
        Random
      */
      const random = randomBuffer.element(instanceIndex)
      random.addAssign(delta.mul(0.5))

      /* 
        Position
      */
      const position = positionBuffer.element(instanceIndex)
      const mouseDistance = max(float(1).div(distance(vec3(this.uniforms.uMousePosition), position).div(this.uniforms.uMouseSize.mul(0.075))), 0)
      const t = time.mul(0.5)
      const noise = mx_fractal_noise_vec3(vec3(position.x.mul(0.05).sub(t), position.y.mul(0.05), position.z.mul(0.05)))
        .normalize()
        .toVar()

      If(
        random.greaterThan(1),
        Fn(() => {
          // Reset Position
          position.assign(originalPositionBuffer.element(instanceIndex))

          // Reset Random
          random.assign(0)
        })
      ).Else(
        Fn(() => {
          const noiseStrength = float(0.15).add(mouseDistance.mul(0.15)).toVar()

          position.x.addAssign(noise.x.mul(noiseStrength))
          position.y.addAssign(noise.y.mul(noiseStrength))
          position.z.addAssign(noise.z.mul(noiseStrength))
        })
      )

      position.addAssign(mouseDistance.mul(this.uniforms.uMouseVelocity))

      /* 
        Color
      */
      const color = colorBuffer.element(instanceIndex)
      color.assign(vec3(noise.xyz).mul(0.5).add(0.5))
      // color.subAssign(mouseDistance.mul(this.uniforms.uMouseVelocity))
      // color.assign(vec3(random))
    })

    this.computeNode = computeUpdate().compute(this.settings.dimensions.x * this.settings.dimensions.y * this.settings.dimensions.z)

    /* 
      Material
    */
    const particleMaterial = new THREE.PointsNodeMaterial({
      depthWrite: false,
    })
    particleMaterial.outputNode = Fn(() => {
      const color = colorBuffer.element(instanceIndex)

      /* 
        Make particle round
      */
      const dist = length(uv().mul(2).sub(1)).oneMinus().toVar()
      dist.assign(step(0.5, dist))

      return vec4(color, dist)
    })()

    particleMaterial.positionNode = positionBuffer.element(instanceIndex)
    particleMaterial.depthWrite = false
    particleMaterial.depthTest = true
    particleMaterial.sizeAttenuation = false
    particleMaterial.sizeNode = this.settings.size

    /* 
      Raycast Plane
    */
    this.raycastPlane = new THREE.Mesh(
      //
      new THREE.PlaneGeometry(this.settings.dimensions.x * 2, this.settings.dimensions.y * 2),
      new THREE.MeshBasicMaterial({
        //
        color: 0x00ff00,
        wireframe: true,
      })
    )

    this.instance.add(this.raycastPlane)

    /* 
      Raycaster
    */
    this.raycaster = new THREE.Raycaster()
    this.previousMousePosition = new THREE.Vector3(0, 0, 0)
    this.velocityTarget = new THREE.Vector3(0, 0, 0)

    /* 
      Particles
    */
    this.particles = new THREE.Sprite(particleMaterial)
    this.particles.count = this.settings.dimensions.x * this.settings.dimensions.y * this.settings.dimensions.z
    this.particles.frustumCulled = false

    this.instance.add(this.particles)

    this.gl.renderer.instance.computeAsync(computeInit)
  }

  update() {
    this.gl.renderer.instance.computeAsync(this.computeNode)

    /* 
      Raycast Plane
    */
    this.raycastPlane.lookAt(this.params.camera.position)
    this.raycaster.setFromCamera(this.gl.mouse.normalized.current, this.params.camera)

    const intersects = this.raycaster.intersectObject(this.raycastPlane)

    if (intersects.length > 0) {
      this.uniforms.uMousePosition.value = intersects[0].point
      this.velocityTarget.subVectors(intersects[0].point, this.previousMousePosition)

      // console.log(this.velocityTarget)

      this.previousMousePosition = intersects[0].point
    } else {
      this.velocityTarget.set(0, 0, 0)
    }

    this.uniforms.uMouseVelocity.value.x = THREE.MathUtils.damp(this.uniforms.uMouseVelocity.value.x, this.velocityTarget.x, 0.025, this.gl.time.delta)
    this.uniforms.uMouseVelocity.value.y = THREE.MathUtils.damp(this.uniforms.uMouseVelocity.value.y, this.velocityTarget.y, 0.025, this.gl.time.delta)
    this.uniforms.uMouseVelocity.value.z = THREE.MathUtils.damp(this.uniforms.uMouseVelocity.value.z, this.velocityTarget.z, 0.025, this.gl.time.delta)

    /* 
      Particles
    */
    // this.particles.position.set(0, 0, 0)
    // console.log(this.raycastPlane)
  }
}
