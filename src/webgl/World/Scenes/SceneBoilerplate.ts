import * as THREE from 'three'

import _Scene, { SceneParams } from './_Scene'

export default class SceneBoilerplate extends _Scene {
  scene: THREE.Scene
  renderTarget: THREE.WebGLRenderTarget
  camera: THREE.PerspectiveCamera
  plane: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>

  constructor(_params: SceneParams) {
    super(_params)

    /* 
      Scene
    */
    this.scene = new THREE.Scene()
    this.scene.matrixAutoUpdate = false

    /* 
      Render Target
    */
    this.renderTarget = new THREE.WebGLRenderTarget(this.bounds.width * this.gl.sizes.pixelRatio, this.bounds.height * this.gl.sizes.pixelRatio, {
      // depthBuffer: false,
      // stencilBuffer: false,
    })

    /* 
      Render Plane
    */
    this.renderPlane.material = new THREE.ShaderMaterial({
      defines: {
        IS_FOLLOWING_DOM: this.params?.isFollowingDom ? 1 : 0,
      },
      uniforms: {
        tDiffuse: new THREE.Uniform(this.renderTarget.texture),

        uScale: new THREE.Uniform(new THREE.Vector2(this.bounds.width, this.bounds.height)),
        uPosition: new THREE.Uniform(new THREE.Vector2(this.bounds.left, this.bounds.top)),
        uResolution: new THREE.Uniform(new THREE.Vector2(this.gl.sizes.width, this.gl.sizes.height)),
      },
      vertexShader: /* glsl */ `
        uniform vec2 uPosition;
        uniform vec2 uScale;
        uniform vec2 uResolution;

        varying vec2 vUv;

        void main() {
          vec2 pos = position.xy * 2.0;

          #if IS_FOLLOWING_DOM

          // Scale
          pos.x *= uScale.x / uResolution.x;
          pos.y *= uScale.y / uResolution.y;

          // Position
          pos.x += - 1.0 + uPosition.x / uResolution.x * 2. + uScale.x / uResolution.x;
          pos.y -= uPosition.y / uResolution.y * 2.0;

          #endif
          
          gl_Position = vec4(pos.xy, 0.0, 1.0);
        
          // Varyings
          vUv = uv;
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec2 vUv;

        uniform sampler2D tDiffuse;
        
        void main() {
          vec4 textureDiffuse = texture2D(tDiffuse, vUv);
        
          gl_FragColor = textureDiffuse;
        }
      `,
    })

    /* 
      Camera
    */
    this.camera = new THREE.PerspectiveCamera(75, this.bounds.width / this.bounds.height, 0.1, 1000)
    this.camera.position.z = 2

    /* 
      Models
    */
    this.plane = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.ShaderMaterial({
        //
        vertexShader: /* glsl */ `
          varying vec2 vUv;

          void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          
            vUv = uv;
          }
        `,
        fragmentShader: /* glsl */ `
        varying vec2 vUv;
        
        void main() {        
          gl_FragColor = vec4(vec3(vUv.x, vUv.y, 0.0), 1.0);
        }
      `,
        side: THREE.DoubleSide,
      })
    )

    this.scene.add(this.plane)

    /* 
      Disposable resources
    */
    this.gsapResources = []

    /* 
      Disposable functions
    */
    this.disposableFunctions = {
      // updateScrollUniforms: this.updateScrollUniforms.bind(this),
    }

    /* 
      Functions
    */
    this.setIsRendering(this.params.dom)
    if (this.params?.isFollowingDom) {
      this.setDefaultScroll({
        renderPlane: this.renderPlane,
        trigger: this.params.dom,
        type: 'regular',
      })
    }
  }

  resize() {
    super.resize()

    /* 
      Render Target
    */
    this.renderTarget.setSize(this.bounds.width * this.gl.sizes.pixelRatio, this.bounds.height * this.gl.sizes.pixelRatio)

    /* 
      Render Plane
    */
    this.renderPlane.material.uniforms.uResolution.value.set(this.gl.sizes.width, this.gl.sizes.height)
    this.renderPlane.material.uniforms.uPosition.value.x = this.bounds.left
    this.renderPlane.material.uniforms.uScale.value.set(this.bounds.width, this.bounds.height)

    /* 
      Camera
    */
    this.camera.aspect = this.bounds.width / this.bounds.height
    this.camera.updateProjectionMatrix()
  }

  renderPipeline() {
    super.renderPipeline()

    this.gl.renderer.instance.setRenderTarget(this.renderTarget)
    this.gl.renderer.instance.render(this.scene, this.camera)
  }

  update() {
    super.update()

    this.plane.position.y = Math.sin(this.gl.time.elapsed)
  }

  dispose() {
    super.dispose()

    /* 
      Remove plane
    */
    if (this.plane.geometry) this.plane.geometry.dispose()
    if (this.plane.material) {
      this.plane.material.dispose()
      this.gl.dispose.allTextures(this.plane)
    }
    this.scene.remove(this.plane)

    /* 
      Remove RTs
    */
    this.renderTarget.dispose()
  }
}
