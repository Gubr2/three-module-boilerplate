import * as THREE from 'three/webgpu'
import { positionLocal, positionGeometry, Fn, sin, cos, vec2, vec3, vec4, mul, div, sub, add, float, Var, uniform, fract, texture, uv, oneMinus, pass, distance, time, smoothstep, passTexture } from 'three/tsl'

import Gl from '../Gl'

import SceneObjects from './Scenes/SceneObjects'

export default class World {
  constructor() {
    this.gl = new Gl()

    /* 
      Scenes
    */
    this.selectors = []
    this.scenes = []

    /* 
      Scene
    */
    this.scene = new THREE.Scene()

    /*
        Camera
      */
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    /* 
      RTs
    */
    this.renderTargetA = new THREE.RenderTarget(this.gl.sizes.width * this.gl.sizes.pixelRatio, this.gl.sizes.height * this.gl.sizes.pixelRatio, {
      samples: 1,
    })

    this.renderTargetB = new THREE.RenderTarget(this.gl.sizes.width * this.gl.sizes.pixelRatio, this.gl.sizes.height * this.gl.sizes.pixelRatio, {
      samples: 1,
    })

    /* 
      Uniforms
    */
    this.uniforms = {
      tPingPong: texture(null),
    }

    /* 
      Quad
    */
    this.quad = new THREE.Mesh(
      //
      new THREE.PlaneGeometry(2, 2),
      new THREE.MeshBasicNodeMaterial({ color: 0x00ff00 })
    )

    this.quad.material.fragmentNode = Fn(() => {
      // this.uniforms.tPingPong.uvNode = uv()
      const tPingPong = this.uniforms.tPingPong.sample().toVar()

      const cursor = distance(uv().mul(2).sub(1), vec2(sin(time), cos(time))).toVar()
      cursor.assign(smoothstep(0.0, 0.5, cursor))
      // cursor.addAssign(tPingPong.r.mul(0.1))

      return vec4(vec3(cursor), 1.0)
    })()

    this.gl.scene.add(this.quad)
  }

  add() {
    this.selectors = document.querySelectorAll('[data-gl]')

    this.selectors.forEach((_scene, _index) => {
      if (_scene.dataset.gl === 'objects') {
        this.scenes.push(
          new SceneObjects({
            dom: _scene,
          })
        )
      }
    })

    for (const key in this.scenes) {
      this.gl.scene.add(this.scenes[key].renderPlane.mesh)
    }
  }

  destroy() {
    if (this.gl.isDebug) console.log('Before destroy:', this.gl.renderer.instance.info)

    /* 
      Scenes
    */
    for (const key in this.scenes) {
      // Remove everything from the scene and dispose
      this.gl.scene.remove(this.scenes[key].renderPlane.mesh)
      if (this.scenes[key].renderTarget) this.scenes[key].renderTarget.dispose()
      this.scenes[key].renderPlane.mesh.geometry.dispose()
      this.scenes[key].renderPlane.mesh.material.dispose()

      // Remove everything from the scene
      if (this.scenes[key].scene) {
        this.scenes[key].scene.traverse((object) => {
          this.scenes[key].scene.remove(object.name)

          if (!object.isMesh) return

          object.geometry.dispose()

          if (object.material.isMaterial) {
            this.cleanMaterial(object.material)
          } else {
            // an array of materials
            for (const material of object.material) this.cleanMaterial(material)
          }
        })
      }
    }

    this.selectors = []
    this.scenes = []

    // Clear renderer image
    this.gl.renderer.instance.setRenderTarget(null)
    this.gl.renderer.instance.clear()

    if (this.gl.isDebug) console.log('After destroy:', this.gl.renderer.instance.info)
  }

  cleanMaterial(material) {
    material.dispose()

    // dispose textures
    for (const key of Object.keys(material)) {
      const value = material[key]
      if (value && typeof value === 'object' && 'minFilter' in value) {
        value.dispose()
      }
    }
  }

  resize() {
    for (const key in this.scenes) {
      this.scenes[key].resize()
    }
  }

  update() {
    this.gl.renderer.instance.setRenderTarget(this.renderTargetA)
    this.gl.renderer.instance.renderAsync(this.gl.scene, this.gl.camera)

    this.uniforms.tPingPong.value = this.renderTargetA.texture

    // Swap
    let temp = this.renderTargetA
    this.renderTargetA = this.renderTargetB
    this.renderTargetB = temp
  }
}
