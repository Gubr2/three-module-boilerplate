import * as THREE from 'three/webgpu'
import { positionLocal, positionGeometry, Fn, sin, cos, uvec2, vec2, vec3, vec4, mul, div, sub, add, float, Var, uniform, fract, texture, uv, oneMinus, pass, distance, time, smoothstep, passTexture, textureStore, instanceIndex, storageTexture, NodeAccess } from 'three/tsl'
import { afterImage } from 'three/examples/jsm/tsl/display/AfterImageNode.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Gl from '../../Gl'

import Plane from '../Geometry/Plane'
import Suzanne from '../Geometry/Suzanne'
import Particles from '../Geometry/Particles'

import Lighting from '../Lighting/Lighting'

export default class SceneObjects {
  constructor(_params) {
    gsap.registerPlugin(ScrollTrigger)

    /* 
      Setup
    */
    this.id = 'objects'

    /* 
      Params
    */
    this.params = _params

    /* 
      Flags
    */
    this.isRendering = false

    /* 
      GL
    */
    this.gl = new Gl()

    /* 
      Scene
    */
    this.scene = new THREE.Scene()

    /* 
      Render Plane
    */
    this.renderPlane = {
      mesh: new THREE.Mesh(
        //
        new THREE.PlaneGeometry(1, 1),
        new THREE.MeshBasicNodeMaterial({
          // color: 'green',
          transparent: true,
        })
      ),
    }

    this.renderPlane.mesh.frustumCulled = false
    this.renderPlane.mesh.matrixAutoUpdate = false

    /* 
      Render Target
    */
    this.renderTarget = new THREE.WebGLRenderTarget(this.gl.sizes.width * this.gl.sizes.pixelRatio, this.gl.sizes.height * this.gl.sizes.pixelRatio, {
      samples: 1,
    })

    /* 
      Uniforms
    */
    this.uniforms = {
      uScale: uniform(new THREE.Vector2(this.gl.sizes.width, this.gl.sizes.height)),
      uPosition: uniform(new THREE.Vector2(0, 0)),
      uResolution: uniform(new THREE.Vector2(this.gl.sizes.width, this.gl.sizes.height)),
    }

    /* 
      Nodes
    */
    this.renderPlane.mesh.material.positionNode = Fn(() => {
      const position = positionGeometry.mul(2)

      // Scale
      position.x.mulAssign(float(this.uniforms.uScale.x).div(this.uniforms.uResolution.x))
      position.y.mulAssign(float(this.uniforms.uScale.y).div(this.uniforms.uResolution.y))

      // Position
      position.x.addAssign(float(-1.0).add(this.uniforms.uPosition.x.div(this.uniforms.uResolution.x).mul(2)).add(this.uniforms.uScale.x.div(this.uniforms.uResolution.x)))
      position.y.subAssign(float(this.uniforms.uPosition.y).div(this.uniforms.uResolution.y).mul(2))

      return vec4(position, 1.0)
    })()

    this.renderPlane.mesh.material.colorNode = Fn(() => {
      const color = texture(this.renderTarget.texture)

      return color
    })()

    /* 
      Bounds
    */
    this.bounds = {}

    /* 
      Camera
    */
    this.camera = new THREE.PerspectiveCamera(65, 1, 0.1, 100)
    this.camera.position.z = 2

    /* 
      Models
    */
    // this.plane = new Plane()
    // this.suzanne = new Suzanne()
    this.particles = new Particles()

    // this.scene.add(this.plane.instance)
    // this.scene.add(this.suzanne.instance)
    this.scene.add(this.particles.instance)

    /* 
      Lighting
    */
    this.lighting = new Lighting()

    /* 
      Functions
    */
    this.setIsRendering()
    this.getBounds()
    this.setScroll()

    if (this.gl.isDebug) {
      this.setOrbitControls()
    }
  }

  setOrbitControls() {
    this.controls = new OrbitControls(this.camera, this.gl.canvas)
    this.controls.enableDamping = true
    this.controls.enableZoom = false
  }

  resize() {
    this.renderTarget.setSize(this.gl.sizes.width * this.gl.sizes.pixelRatio, this.gl.sizes.height * this.gl.sizes.pixelRatio)
  }

  updateCameraAspect() {
    // Camera
    this.camera.aspect = this.uniforms.uScale.value.x / this.uniforms.uScale.value.y
    this.camera.updateProjectionMatrix()
  }

  setIsRendering() {
    ScrollTrigger.create({
      trigger: this.params.dom,
      start: () => `top-=${this.gl.sizes.height / 2} bottom`,
      end: () => `bottom+=${this.gl.sizes.height / 2} top`,
      invalidateOnRefresh: true,
      // markers: true,

      onEnter: () => {
        this.isRendering = true
      },
      onEnterBack: () => {
        this.isRendering = true
      },
      onLeave: () => {
        this.isRendering = false
      },
      onLeaveBack: () => {
        this.isRendering = false
      },
    })
  }

  getBounds() {
    this.bounds = this.params.dom.getBoundingClientRect()

    this.uniforms.uResolution.value.set(this.gl.sizes.width, this.gl.sizes.height)
    this.uniforms.uPosition.value.x = this.bounds.left
    this.uniforms.uScale.value.set(this.bounds.width, this.bounds.height)
  }

  setScroll() {
    /* 
      Basic
    */
    gsap.fromTo(
      this.uniforms.uPosition.value,
      {
        y: () => Math.max(this.gl.sizes.height, this.bounds.height),
      },
      {
        y: () => -Math.max(this.gl.sizes.height, this.bounds.height),
        ease: 'none',
        scrollTrigger: {
          invalidateOnRefresh: true,
          scrub: true,
          trigger: this.params.dom,
          start: () => `center-=${Math.max(this.gl.sizes.height, this.bounds.height)} top+=${this.gl.sizes.height / 2}`,
          end: () => `center+=${Math.max(this.gl.sizes.height, this.bounds.height)} top+=${this.gl.sizes.height / 2}`,
          refreshPriority: -99,
          // markers: true,
          onRefresh: () => {
            this.getBounds()
            this.updateCameraAspect()
          },
          // markers: true,
        },
        onUpdate: (_self) => {
          this.updateCameraAspect()
        },
      }
    )
    /* 
      Sticky
    */
    // Enter
    // gsap.fromTo(
    //   this.renderPlane.bounds,
    //   {
    //     top: () => this.gl.sizes.height,
    //   },
    //   {
    //     top: 0,
    //     ease: 'none',
    //     scrollTrigger: {
    //       invalidateOnRefresh: true,
    //       scrub: true,
    //       trigger: '[data-gl-track=""]',
    //       start: () => `top-=${this.gl.sizes.height} top`,
    //       end: () => `top top`,
    //       onRefresh: () => {
    //         // this.getBounds();
    //         this.updateCameraAspect();
    //       },
    //       refreshPriority: -99,
    //       // markers: true,
    //     },
    //     onUpdate: (_self) => {
    //       this.updateCameraAspect();
    //     },
    //   }
    // );
    // // Leave
    // gsap.fromTo(
    //   this.renderPlane.bounds,
    //   {
    //     top: 0,
    //   },
    //   {
    //     top: () => -this.gl.sizes.height,
    //     ease: 'none',
    //     scrollTrigger: {
    //       invalidateOnRefresh: true,
    //       scrub: true,
    //       trigger: '[data-gl-track=""]',
    //       start: () => `bottom bottom`,
    //       end: () => `bottom+=${this.gl.sizes.height} bottom`,
    //       onRefresh: () => {
    //         // this.getBounds();
    //         this.updateCameraAspect();
    //       },
    //       refreshPriority: -99,
    //       // markers: true,
    //     },
    //     onUpdate: (_self) => {
    //       this.updateCameraAspect();
    //     },
    //   }
    // );
  }

  renderPipeline() {
    if (!this.isRendering) return

    this.gl.renderer.instance.setRenderTarget(this.renderTarget)
    this.gl.renderer.instance.render(this.scene, this.camera)
    // this.gl.renderer.instance.setRenderTarget(null)
  }

  update() {
    if (!this.isRendering) return

    this.suzanne.update()
    this.plane.update()
  }
}
