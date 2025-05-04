import * as THREE from 'three/webgpu'
import { positionLocal, Fn, vec2, vec4, mul, div, add, float, Var, uniform } from 'three/tsl'
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
    this.scene.environment = this.gl.assets.hdris.studio

    /* 
      Render Plane
    */
    this.renderPlane = {
      mesh: new THREE.Mesh(
        //
        new THREE.PlaneGeometry(1, 1),
        new THREE.MeshBasicNodeMaterial({
          color: 'red',
        })
        // new THREE.ShaderMaterial({
        //   uniforms: {
        //     tDiffuse: new THREE.Uniform(null),

        //     uScale: new THREE.Uniform(new THREE.Vector2(this.gl.sizes.width, this.gl.sizes.height)),
        //     uPosition: new THREE.Uniform(new THREE.Vector2(0, 0)),
        //     uResolution: new THREE.Uniform(new THREE.Vector2(this.gl.sizes.width, this.gl.sizes.height)),
        //   },
        //   vertexShader: /* glsl */ `
        //     varying vec2 vUv;

        //     uniform vec2 uPosition;
        //     uniform vec2 uScale;
        //     uniform vec2 uResolution;

        //     void main() {
        //       vec2 pos = position.xy * 2.0;

        //       // Scale
        //       pos.x *= uScale.x / uResolution.x;
        //       pos.y *= uScale.y / uResolution.y;

        //       // Position
        //       pos.x += - 1.0 + uPosition.x / uResolution.x * 2. + uScale.x / uResolution.x;
        //       pos.y -= uPosition.y / uResolution.y * 2.0;

        //       gl_Position = vec4(pos.xy, 0.0, 1.0);

        //       // Varyings
        //       vUv = uv;
        //     }
        //   `,
        //   fragmentShader: /* glsl */ `
        //     varying vec2 vUv;

        //     uniform sampler2D tDiffuse;

        //     void main() {
        //       vec4 textureDiffuse = texture(tDiffuse, vUv);

        //       gl_FragColor = textureDiffuse;

        //       // Debug
        //       // gl_FragColor.rgb += vec3(vUv.x, vUv.y, 0.0);
        //       // gl_FragColor.a = 1.0;
        //     }
        //   `,
        // })
      ),
    }

    this.uniforms = {
      uScale: uniform(new THREE.Vector2(this.gl.sizes.width, this.gl.sizes.height)),
      uPosition: uniform(new THREE.Vector2(0, 0)),
      uResolution: uniform(new THREE.Vector2(this.gl.sizes.width, this.gl.sizes.height)),
    }

    this.calculateVertexPosition = Fn(() => {
      const position = positionLocal.mul(2).toVar()
      position.x.mulAssign(float(this.uniforms.uScale.value.x).div(this.uniforms.uResolution.value.x))
      position.y.mulAssign(float(this.uniforms.uScale.value.y).div(this.uniforms.uResolution.value.y))

      // position.x.addAssign(float(-1.0).add(this.uniforms.uPosition.value.x.div()) /  * 2.0 + this.uniforms.uScale.value.x / this.uniforms.uResolution.value.x)
      position.y.subAssign(float(this.uniforms.uPosition.value.y).div(this.uniforms.uResolution.value.y))

      // position.add(1)

      // // Scale
      // pos.x *= uScale.x / uResolution.x;
      // pos.y *= uScale.y / uResolution.y;

      // // Position
      // pos.x += - 1.0 + uPosition.x / uResolution.x * 2. + uScale.x / uResolution.x;
      // pos.y -= uPosition.y / uResolution.y * 2.0;

      // gl_Position = vec4(pos.xy, 0.0, 1.0);

      return vec4(position, 1.0)
    })

    this.renderPlane.mesh.material.positionNode = this.calculateVertexPosition()

    this.renderPlane.mesh.frustumCulled = false
    this.renderPlane.mesh.matrixAutoUpdate = false

    /* 
      Bounds
    */
    this.bounds = {}

    /* 
      Render Target
    */
    this.renderTarget = new THREE.RenderTarget(this.gl.sizes.width * this.gl.sizes.pixelRatio, this.gl.sizes.height * this.gl.sizes.pixelRatio, {
      samples: 1,
    })

    /* 
      Camera
    */
    this.camera = new THREE.PerspectiveCamera(75, this.gl.sizes.width / this.gl.sizes.height, 0.1, 1000)
    this.camera.position.z = 2

    /* 
      Models
    */
    // this.plane = new Plane()
    this.suzanne = new Suzanne()

    // this.scene.add(this.plane.instance)
    this.scene.add(this.suzanne.instance)

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
    // Mesh
    // this.renderPlane.mesh.position.set(
    //   //
    //   ((this.renderPlane.bounds.left - this.gl.sizes.width / 2 + this.renderPlane.bounds.width / 2) / this.gl.sizes.width) * 2,
    //   (-this.renderPlane.bounds.top / this.gl.sizes.height) * 2,
    //   // 0,
    //   // 0,
    //   0
    // )
    // this.renderPlane.mesh.material.uniforms.uPosition.value.y = (-this.renderPlane.bounds.top / this.gl.sizes.height) * 2

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

    setTimeout(() => {
      // this.uniforms.uPosition.value.x = this.bounds.left
      this.uniforms.uScale.value.set(10, this.bounds.height)
    }, 1000)
  }

  setScroll() {
    /* 
      Basic
    */
    // gsap.fromTo(
    //   this.uniforms.uPosition.value,
    //   {
    //     y: () => Math.max(this.gl.sizes.height, this.bounds.height),
    //   },
    //   {
    //     y: () => -Math.max(this.gl.sizes.height, this.bounds.height),
    //     ease: 'none',
    //     scrollTrigger: {
    //       invalidateOnRefresh: true,
    //       scrub: true,
    //       trigger: this.params.dom,
    //       start: () => `center-=${Math.max(this.gl.sizes.height, this.bounds.height)} top+=${this.gl.sizes.height / 2}`,
    //       end: () => `center+=${Math.max(this.gl.sizes.height, this.bounds.height)} top+=${this.gl.sizes.height / 2}`,
    //       refreshPriority: -99,
    //       // markers: true,
    //       onRefresh: () => {
    //         this.getBounds()
    //         this.updateCameraAspect()
    //       },
    //       // markers: true,
    //     },
    //     onUpdate: (_self) => {
    //       this.updateCameraAspect()
    //     },
    //   }
    // )
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

    // this.renderPlane.mesh.material.uniforms.tDiffuse.value = this.renderTarget.texture
  }

  update() {
    if (!this.isRendering) return

    this.suzanne.update()

    this.uniforms.uTime = this.gl.time.elapsed

    // this.plane.update()
  }
}
