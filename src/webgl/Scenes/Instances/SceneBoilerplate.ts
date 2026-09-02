import * as THREE from 'three/webgpu'

import _Scene, { SceneParams } from './_Scene'
import { Fn, float, vec2, vec3, vec4, uv, texture, uniform, uniformTexture, positionLocal, mul } from 'three/tsl'

export default class extends _Scene {
  scene: THREE.Scene
  renderTarget: THREE.WebGLRenderTarget
  camera: THREE.PerspectiveCamera
  model?: THREE.Mesh
  interface: Record<string, any>
  uniformsRenderPlane: Record<string, any>

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
    this.uniformsRenderPlane = {
      uScale: uniform(vec2(this.bounds.viewWidth / this.gl.sizes.width, this.bounds.viewHeight / this.gl.sizes.height)),
      uPosition: uniform(vec2(this.bounds.left / this.gl.sizes.width, this.bounds.top / this.gl.sizes.height)),
    }

    this.renderPlane.material = new THREE.NodeMaterial()
    this.renderPlane.material.transparent = true

    this.renderPlane.material.vertexNode = Fn(() => {
      const pos = positionLocal.xy.mul(2.0)

      // Skip if not needed on compile step
      if (this.params?.isFollowingDom) {
        // Scale
        pos.x.mulAssign(this.uniformsRenderPlane.uScale.x)
        pos.y.mulAssign(this.uniformsRenderPlane.uScale.y)

        // Position
        pos.x.addAssign(float(-1.0).add(this.uniformsRenderPlane.uPosition.x.mul(2)).add(this.uniformsRenderPlane.uScale.x))
        pos.y.subAssign(this.uniformsRenderPlane.uPosition.y.mul(2.0))
      }

      return vec4(pos, 0.0, 1.0)
    })()

    this.renderPlane.material.colorNode = texture(this.renderTarget.texture, uv())

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
        uniformsRenderPlane: this.uniformsRenderPlane,
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
    const material = new THREE.MeshBasicNodeMaterial()
    material.colorNode = vec3(uv(), 0.0)

    this.model = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material)

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
    this.uniformsRenderPlane.uPosition.value.x = this.bounds.left / this.gl.sizes.width
    this.uniformsRenderPlane.uScale.value.set(this.bounds.viewWidth / this.gl.sizes.width, this.bounds.viewHeight / this.gl.sizes.height)

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
