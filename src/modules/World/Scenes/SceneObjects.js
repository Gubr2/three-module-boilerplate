import { Mesh, Plane, Program, RenderTarget, Transform, Camera, Vec2 } from 'ogl'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Gl from '../../Gl'

import DefaultPlane from '../Geometry/DefaultPlane'

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
    this.scene = new Transform()

    /* 
      Render Plane
    */
    this.renderPlane = {
      mesh: new Mesh(this.gl.renderer.instance.gl, {
        //
        geometry: new Plane(this.gl.renderer.instance.gl, {
          width: 1,
          height: 1,
        }),
        program: new Program(this.gl.renderer.instance.gl, {
          uniforms: {
            tDiffuse: { value: null },

            uScale: { value: new Vec2(this.gl.sizes.width, this.gl.sizes.height) },
            uPosition: { value: new Vec2(0, 0) },
            uResolution: { value: new Vec2(this.gl.sizes.width, this.gl.sizes.height) },
          },
          vertex: /* glsl */ `
            attribute vec3 position;
            attribute vec2 uv;

            varying vec2 vUv;

            uniform vec2 uPosition;
            uniform vec2 uScale;
            uniform vec2 uResolution;

            void main() {
              vec2 pos = position.xy * 2.0;

              // Scale
              pos.x *= uScale.x / uResolution.x;
              pos.y *= uScale.y / uResolution.y;

              // Position
              pos.x += - 1.0 + uPosition.x / uResolution.x * 2. + uScale.x / uResolution.x;
              pos.y -= uPosition.y / uResolution.y * 2.0;
              
              gl_Position = vec4(pos.xy, 0.0, 1.0);
            
              // Varyings
              vUv = uv;
            }
          `,
          fragment: /* glsl */ `
            precision highp float;
           
            varying vec2 vUv;

            uniform sampler2D tDiffuse;
            
            void main() {
              vec4 textureDiffuse = texture2D(tDiffuse, vUv);
            
              gl_FragColor.rgb = textureDiffuse.rgb;
              gl_FragColor.a = textureDiffuse.a;
              
              // Debug
              // gl_FragColor.rgb += vec3(vUv.x, vUv.y, 0.0);
              // gl_FragColor.a = 1.0;
            }
          `,
        }),
      }),
    }

    this.renderPlane.mesh.frustumCulled = false
    this.renderPlane.mesh.matrixAutoUpdate = false

    /* 
      Bounds
    */
    this.bounds = {}

    /* 
      Render Target
    */
    this.renderTarget = new RenderTarget(this.gl.renderer.instance.gl, {
      width: this.gl.sizes.width * this.gl.sizes.pixelRatio,
      height: this.gl.sizes.height * this.gl.sizes.pixelRatio,
    })

    /* 
      Camera
    */
    this.camera = new Camera(this.gl.renderer.instance.gl)
    this.camera.perspective({
      fov: 75,
      aspect: this.gl.sizes.width / this.gl.sizes.height,
      near: 0.1,
      far: 10,
    })
    this.camera.position.z = 2

    /* 
      Models
    */
    this.defaultPlane = new DefaultPlane()
    this.defaultPlane.instance.setParent(this.scene)

    /* 
      Functions
    */
    this.setIsRendering()
    this.getBounds()
    this.setScroll()
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
    this.camera.aspect = this.renderPlane.mesh.program.uniforms.uScale.value.x / this.renderPlane.mesh.program.uniforms.uScale.value.y
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

    this.renderPlane.mesh.program.uniforms.uResolution.value.set(this.gl.sizes.width, this.gl.sizes.height)
    this.renderPlane.mesh.program.uniforms.uPosition.value.x = this.bounds.left
    this.renderPlane.mesh.program.uniforms.uScale.value.set(this.bounds.width, this.bounds.height)
  }

  setScroll() {
    /* 
      Basic
    */
    gsap.fromTo(
      this.renderPlane.mesh.program.uniforms.uPosition.value,
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

    this.gl.renderer.instance.render({
      scene: this.scene,
      camera: this.camera,
      target: this.renderTarget,
    })

    this.renderPlane.mesh.program.uniforms.tDiffuse.value = this.renderTarget.texture
  }

  update() {
    if (!this.isRendering) return

    this.defaultPlane.update()
  }
}
