import * as THREE from 'three/webgpu'
import { positionLocal, positionGeometry, Fn, sin, cos, uvec2, vec2, vec3, vec4, mul, div, sub, add, float, Var, uniform, fract, texture, uv, oneMinus, pass, distance, time, smoothstep, passTexture, textureStore, instanceIndex, storageTexture, NodeAccess } from 'three/tsl'
import { afterImage } from 'three/examples/jsm/tsl/display/AfterImageNode.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Gl from '../../Gl'

import Plane from '../Geometry/Plane'
import Suzanne from '../Geometry/Suzanne'

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
    // this.scene.environment = this.gl.assets.hdris.studio

    /* 
      Compute Texture
    */
    this.currentTargetIndex = 0

    this.computeTextures = [new THREE.StorageTexture(this.gl.sizes.width, this.gl.sizes.height), new THREE.StorageTexture(this.gl.sizes.width, this.gl.sizes.height)]

    this.computeFn = Fn(({ readTexture, writeTexture }) => {
      const posX = instanceIndex.mod(this.gl.sizes.width)
      const posY = instanceIndex.div(this.gl.sizes.width)
      const indexUV = vec2(posX, posY)

      const texelUV = indexUV.add(0.5).div(vec2(this.gl.sizes.width, this.gl.sizes.height))

      const prev = texture(readTexture, texelUV).toVar()

      const cursor = distance(texelUV.mul(2).sub(1), vec2(0.0, cos(time))).toVar()
      cursor.assign(smoothstep(0.1, 0.0, cursor))

      const color = cursor.add(prev).mul(0.9)
      // color.assign(smoothstep(0.0, 1.0, color))

      textureStore(writeTexture, indexUV, color)
    })

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

    this.renderPlane.mesh.material.colorNode = texture(this.computeTextures[this.currentTargetIndex])

    /* 
      Bounds
    */
    this.bounds = {}

    /* 
      Camera
    */
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    // this.camera.position.z = 2

    /* 
      Models
    */
    this.plane = new Plane()
    this.suzanne = new Suzanne()

    // this.scene.add(this.plane.instance)
    // this.scene.add(this.suzanne.instance)

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
    // this.renderTargetA.setSize(this.gl.sizes.width * this.gl.sizes.pixelRatio, this.gl.sizes.height * this.gl.sizes.pixelRatio)
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

    const readIndex = this.currentTargetIndex
    const writeIndex = 1 - this.currentTargetIndex

    this.computeNode = this.computeFn({
      readTexture: this.computeTextures[readIndex],
      writeTexture: this.computeTextures[writeIndex],
    }).compute(this.gl.sizes.width * this.gl.sizes.height)

    this.gl.renderer.instance.computeAsync(this.computeNode)

    this.currentTargetIndex = writeIndex
  }

  update() {
    if (!this.isRendering) return

    this.suzanne.update()
    this.plane.update()
  }
}
