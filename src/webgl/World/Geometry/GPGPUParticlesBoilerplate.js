import * as THREE from 'three'
import { GPUComputationRenderer } from 'three/addons/misc/GPUComputationRenderer.js'
import gsap from 'gsap'

import Gl from '../../../Gl'

export default class Fireflies {
  constructor() {
    this.gl = new Gl()

    this.instance = new THREE.Group()

    /* 
      Settings
    */
    this.settings = {
      count: 1000,
      scale: 10,
      speed: 0.25,
    }

    /* 
      GPU Compute
    */
    this.gpgpu = {}
    this.gpgpu.size = Math.ceil(Math.sqrt(this.settings.count))

    this.gpgpu.computation = new GPUComputationRenderer(this.gpgpu.size, this.gpgpu.size, this.gl.renderer.instance)

    this.baseParticlesTexture = this.gpgpu.computation.createTexture()

    for (let i = 0; i < this.settings.count; i++) {
      this.baseParticlesTexture.image.data[i * 4 + 0] = (2 * Math.random() - 1) * this.settings.scale
      this.baseParticlesTexture.image.data[i * 4 + 1] = (2 * Math.random() - 1) * this.settings.scale
      this.baseParticlesTexture.image.data[i * 4 + 2] = (2 * Math.random() - 1) * this.settings.scale
      this.baseParticlesTexture.image.data[i * 4 + 3] = Math.random()
    }

    this.shader = /* glsl */ `
      #include <simplex>

      uniform float uTime;
      uniform float uTransition;
      uniform float uDeltaTime;
      uniform float uFrequency;

      uniform sampler2D uBasePositions;

      const float FLOWFIELD_SIZE = 1.0;
      const float FLOWFIELD_STRENGTH = 2.5;
      const float LIFETIME = 5.0;

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec4 particleTexture = texture2D(uParticles, uv);
        vec4 basePositionTexture = texture2D(uBasePositions, uv);

        if (particleTexture.a >= 1.0) {
          // If Dead
          particleTexture.a = fract(particleTexture.a);
          particleTexture.xyz = basePositionTexture.xyz;
        } else {
          // If Alive, apply flow field
          vec3 flowField = vec3(
            simplexNoise4d(vec4(particleTexture.xyz * FLOWFIELD_SIZE + 0.0, uTime * 0.25)),
            simplexNoise4d(vec4(particleTexture.xyz * FLOWFIELD_SIZE + 1.0, uTime * 0.25)),
            simplexNoise4d(vec4(particleTexture.xyz * FLOWFIELD_SIZE + 2.0, uTime * 0.25))
          );

          flowField = normalize(flowField);
          particleTexture.xyz += flowField * FLOWFIELD_STRENGTH * uDeltaTime;

          // Decay
          particleTexture.a += uDeltaTime * LIFETIME;
        }

        gl_FragColor = mix(particleTexture, basePositionTexture, pow(uFrequency * 15., 3.0));
      }
    `

    this.gpgpu.particlesVariable = this.gpgpu.computation.addVariable('uParticles', this.shader, this.baseParticlesTexture)
    this.gpgpu.computation.setVariableDependencies(this.gpgpu.particlesVariable, [this.gpgpu.particlesVariable])

    // Uniforms
    this.gpgpu.particlesVariable.material.uniforms.uTime = new THREE.Uniform(0.0)
    this.gpgpu.particlesVariable.material.uniforms.uDeltaTime = new THREE.Uniform(0.0)
    this.gpgpu.particlesVariable.material.uniforms.uBasePositions = new THREE.Uniform(this.baseParticlesTexture)
    this.gpgpu.particlesVariable.material.uniforms.uFrequency = new THREE.Uniform(0.0)

    this.gpgpu.computation.init()

    /* 
      Particles
    */
    this.particles = {}

    this.particlesUvArray = new Float32Array(this.settings.count * 2)
    this.randomArray = new Float32Array(this.settings.count)

    for (let y = 0; y < this.gpgpu.size; y++) {
      for (let x = 0; x < this.gpgpu.size; x++) {
        const i = y * this.gpgpu.size + x
        const i2 = i * 2

        const uvX = (x + 0.5) / this.gpgpu.size
        const uvY = (y + 0.5) / this.gpgpu.size

        this.particlesUvArray[i2 + 0] = uvX
        this.particlesUvArray[i2 + 1] = uvY

        this.randomArray[i] = Math.random()
      }
    }

    this.particles.geometry = new THREE.BufferGeometry()
    this.particles.geometry.setDrawRange(0, this.settings.count)
    this.particles.geometry.setAttribute('aParticlesUv', new THREE.BufferAttribute(this.particlesUvArray, 2))
    this.particles.geometry.setAttribute('aRandom', new THREE.BufferAttribute(this.randomArray, 1))
    this.particles.geometry.boundingSphere = new THREE.Sphere(
      new THREE.Vector3(0, 0, 0), // Center
      this.settings.scale * 2 // Radius (big enough to contain all particles)
    )

    this.particles.material = new THREE.ShaderMaterial({
      transparent: true,
      // blending: THREE.AdditiveBlending,
      uniforms: {
        tParticlesTexture: new THREE.Uniform(null),

        uResolution: new THREE.Uniform(new THREE.Vector2(this.gl.sizes.width * this.gl.sizes.pixelRatio, this.gl.sizes.height * this.gl.sizes.pixelRatio)),

        uFocusDistance: new THREE.Uniform(7.5),
        uFocusRange: new THREE.Uniform(0.25),

        COLOR: new THREE.Uniform(new THREE.Color(0xffffff)),
        ALPHA: new THREE.Uniform(0.5),
        SIZE: new THREE.Uniform(0.05),
      },
      vertexShader: /* glsl */ `
        uniform vec2 uResolution;
        uniform sampler2D tParticlesTexture;

        uniform float uFocusDistance;
        uniform float uFocusRange;
        attribute vec2 aParticlesUv;
        attribute float aRandom;
        
        varying vec4 vColor;
        varying vec2 vParticlesUv;
        varying float vLifeSize;
        varying float vDepth;
        
        uniform float SIZE;

        void main() {
          vec4 particle = texture2D(tParticlesTexture, aParticlesUv);

          // Final position
          vec4 modelPosition = modelMatrix * vec4(particle.xyz, 1.0);
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectedPosition = projectionMatrix * viewPosition;
          gl_Position = projectedPosition;

          // Life Size
          float lifeIn = smoothstep(0.0, 0.1, particle.a);
          float lifeOut = 1.0 - smoothstep(0.9, 1.0, particle.a);
          float lifeSize = min(lifeIn, lifeOut);
      
          // Point size (with distance attenuation)
          float distanceAttenuation = (1.0 / -viewPosition.z) * SIZE;
          gl_PointSize = aRandom * lifeSize * uResolution.y * distanceAttenuation;
      
          // Varyings
          vColor = vec4(vec3(1.0), particle.a);
          vParticlesUv = aParticlesUv;
          vLifeSize = lifeSize;
          vDepth = min(abs((uFocusDistance + viewPosition.z) * uFocusRange), 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec4 vColor;
        varying vec2 vParticlesUv;
        varying float vLifeSize;
        varying float vDepth;

        uniform sampler2D tParticlesTexture;

        uniform vec3 COLOR;
        uniform float ALPHA;
        uniform float SIZE;

        void main() {
          vec4 particle = texture2D(tParticlesTexture, vParticlesUv);

          float distanceToCenter = length(gl_PointCoord - 0.5) * 2.0;
          if(distanceToCenter > 1.0) discard;

          float alpha = smoothstep(1.0, 1.0 - vDepth, distanceToCenter) * vLifeSize;

          vec4 color = vec4(COLOR, alpha * ALPHA);

          gl_FragColor = color;
        }
      `,
    })

    this.particles.material.depthWrite = false

    this.mesh = new THREE.Points(this.particles.geometry, this.particles.material)

    this.instance.add(this.mesh)
  }

  resize() {
    this.particles.material.uniforms.uResolution.value = new THREE.Vector2(this.gl.sizes.width * this.gl.sizes.pixelRatio, this.gl.sizes.height * this.gl.sizes.pixelRatio)
  }

  update() {
    this.gpgpu.particlesVariable.material.uniforms.uTime.value = this.gl.time.elapsed * this.settings.speed
    this.gpgpu.particlesVariable.material.uniforms.uDeltaTime.value = this.gl.time.delta * 0.001 * this.settings.speed
    this.gpgpu.computation.compute()
    this.particles.material.uniforms.tParticlesTexture.value = this.gpgpu.computation.getCurrentRenderTarget(this.gpgpu.particlesVariable).texture
  }
}
