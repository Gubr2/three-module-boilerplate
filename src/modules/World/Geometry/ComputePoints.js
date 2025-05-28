import * as THREE from 'three/webgpu'
import { compute, storage, uniform, Fn, vec3, vec4, float, instanceIndex, storageTexture, textureStore } from 'three/tsl'

export default class ComputePoints {
  constructor() {
    this.count = 1000

    // Create storage buffer for positions
    this.positionBuffer = new THREE.StorageInstancedBufferAttribute(this.count, 3)

    // Random seed uniform
    this.uniforms = {
      uSeed: uniform(Math.random() * 1000),
      uTime: uniform(0),
    }

    this.setupComputeShader()
    this.setupRenderMaterial()
    this.setupMesh()
  }

  setupComputeShader() {
    // Pseudo-random function
    const random = Fn(([seed]) => {
      const x = sin(seed.mul(12.9898)).mul(43758.5453)
      return x.sub(floor(x))
    })

    // Compute shader function
    this.computeShader = Fn(() => {
      const index = instanceIndex

      // Generate random positions
      const seedX = float(index).add(this.uniforms.uSeed).mul(0.1)
      const seedY = float(index).add(this.uniforms.uSeed).mul(0.2).add(100.0)
      const seedZ = float(index).add(this.uniforms.uSeed).mul(0.3).add(200.0)

      const x = random(seedX).mul(4.0).sub(2.0) // Range: -2 to 2
      const y = random(seedY).mul(4.0).sub(2.0) // Range: -2 to 2
      const z = random(seedZ).mul(4.0).sub(2.0) // Range: -2 to 2

      const position = vec3(x, y, z)

      // Store position in buffer
      storage(this.positionBuffer, 'vec3', 'write').element(index).assign(position)
    })().compute(64) // Workgroup size

    // Create compute node
    this.computeNode = compute(this.computeShader, this.count)
  }

  setupRenderMaterial() {
    this.material = new THREE.MeshBasicNodeMaterial({
      color: 0xffffff,
      transparent: true,
    })

    // Override position with computed positions
    this.material.positionNode = storage(this.positionBuffer, 'vec3', 'read')
  }

  setupMesh() {
    // Simple point geometry
    const geometry = new THREE.SphereGeometry(0.01, 8, 8)

    // Create instanced mesh
    this.instance = new THREE.InstancedMesh(geometry, this.material, this.count)
    this.instance.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
  }

  // Call this to regenerate points
  regenerate() {
    this.uniforms.uSeed.value = Math.random() * 1000
    // The compute shader will run automatically on next frame
  }

  update() {
    // Update time if you want animated points
    this.uniforms.uTime.value += 0.016
  }
}
