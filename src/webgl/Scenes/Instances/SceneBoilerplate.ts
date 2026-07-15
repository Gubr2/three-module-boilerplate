import * as THREE from 'three'

import _Scene, { SceneParams } from './_Scene'

export default class extends _Scene {
  scene: THREE.Scene
  renderTarget: THREE.WebGLRenderTarget
  camera: THREE.PerspectiveCamera
  model?: THREE.Mesh
  interface: Record<string, any>

  constructor(_params: SceneParams) {
    super(_params)

    /* 
      Interface
    */
    this.interface = {
      //
    }

    /* 
      Scene
    */
    this.scene = new THREE.Scene()
    // this.scene.matrixAutoUpdate = false

    /* 
      Render Target
    */
    this.renderTarget = new THREE.WebGLRenderTarget(this.bounds.viewWidth * this.gl.sizes.pixelRatio, this.bounds.viewHeight * this.gl.sizes.pixelRatio, {
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

        uScale: new THREE.Uniform(new THREE.Vector2(this.bounds.viewWidth, this.bounds.viewHeight)),
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
    this.camera = new THREE.PerspectiveCamera(32, this.bounds.viewWidth / this.bounds.viewHeight, 0.1, 100)
    this.camera.position.z = 5

    /* 
      Models
    */
    this.setModels()

    /* 
      Init scroll functions
    */
    if (this.params?.isFollowingDom) {
      this.setDefaultScroll({
        renderPlane: this.renderPlane,
        trigger: this.params.dom,
        endTrigger: this.params.endDom,
      })
    }

    /* 
      Debug
    */
    if (this.gl.isDebug) this.setDebug()
  }

  setModels() {
    this.model = new THREE.Mesh(
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

    this.scene.add(this.model)
  }

  resize() {
    super.resize()

    /* 
      Render Target
    */
    this.renderTarget.setSize(this.bounds.viewWidth * this.gl.sizes.pixelRatio, this.bounds.viewHeight * this.gl.sizes.pixelRatio)

    /* 
      Render Plane
    */
    this.renderPlane.material.uniforms.uResolution.value.set(this.gl.sizes.width, this.gl.sizes.height)
    this.renderPlane.material.uniforms.uPosition.value.x = this.bounds.left
    this.renderPlane.material.uniforms.uScale.value.set(this.bounds.viewWidth, this.bounds.viewHeight)

    /* 
      Camera
    */
    this.camera.aspect = this.bounds.viewWidth / this.bounds.viewHeight
    this.camera.updateProjectionMatrix()
  }

  async compile() {
    return new Promise<void>(async (_resolve) => {
      await this.gl.renderer.instance.compileAsync(this.scene, this.camera)

      _resolve()
    })
  }

  renderPipeline() {
    if (!this.isRendering) return

    this.gl.renderer.instance.setRenderTarget(this.renderTarget)
    this.gl.renderer.instance.render(this.scene, this.camera)
  }

  update() {
    if (!this.isRendering) return

    if (this.model) this.model.position.y = Math.sin(this.gl.time.elapsed)
  }

  dispose() {
    super.dispose()

    /* 
      Clear scene
    */
    this.scene.traverse((_child) => {
      if (_child instanceof THREE.Mesh) {
        this.gl.dispose.allTextures(_child)

        _child.material.dispose()
        _child.geometry.dispose()
      }
    })

    /* 
      Remove RTs
    */
    this.renderTarget.dispose()
  }
}
