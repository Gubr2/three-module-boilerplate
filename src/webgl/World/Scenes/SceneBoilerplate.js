import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Gl from '../../Gl'
import { Camera, Program, RenderTarget, Mesh, Vec2, Transform, Plane, Orbit } from 'ogl'

export default class SceneBoilerplate {
  constructor(_params) {
    gsap.registerPlugin(ScrollTrigger)

    /* 
      Setup
    */
    this.id = 'boilerplate'

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
    this.scene.matrixAutoUpdate = false

    /* 
      Bounds
    */
    this.bounds = {}
    this.getBounds()

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
          defines: {
            IS_FOLLOWING_DOM: this.params?.isFollowingDom ? 1 : 0,
          },
          uniforms: {
            tDiffuse: { value: null },

            uScale: { value: new Vec2(this.bounds.width, this.bounds.height) },
            uPosition: { value: new Vec2(this.bounds.left, this.bounds.top) },
            uResolution: { value: new Vec2(this.gl.sizes.width, this.gl.sizes.height) },
          },
          vertex: /* glsl */ `
            #define IS_FOLLOWING_DOM ${this.params?.isFollowingDom ? 1 : 0}

            precision lowp float;

            attribute vec2 uv;
            attribute vec3 position;

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
          fragment: /* glsl */ `
            precision lowp float;

            varying vec2 vUv;

            uniform sampler2D tDiffuse;
            
            void main() {
              vec4 textureDiffuse = texture2D(tDiffuse, vUv);
            
              gl_FragColor = textureDiffuse;
              
              // Debug
              // gl_FragColor.rgb += vec3(vUv.x, vUv.y, 0.0);
              // gl_FragColor.a = 1.0;
            }
          `,
        })
      }),
    }

    /* 
      Render Target
    */
    this.renderTarget = new RenderTarget(this.gl.renderer.instance.gl, {
      width: this.bounds.width * this.gl.sizes.pixelRatio,
      height: this.bounds.height * this.gl.sizes.pixelRatio,
      depth: false,
      stencil: false,
    })

    /* 
      Camera
    */
    this.camera = new Camera(this.gl.renderer.instance.gl, {
      fov: 75,
      aspect: this.bounds.width / this.bounds.height,
      near: 0.1,
      far: 100,
    })
    this.camera.position.z = 2

    /* 
      Models
    */
    this.plane = new Mesh(
      this.gl.renderer.instance.gl,
      {
        geometry: new Plane(this.gl.renderer.instance.gl, {
          width: 1,
          height: 1,
        }),
        program: new Program(this.gl.renderer.instance.gl, {
          vertex: /* glsl */ `
            precision lowp float;

            uniform mat4 projectionMatrix;
            uniform mat4 modelViewMatrix;

            attribute vec2 uv;
            attribute vec3 position;

            varying vec2 vUv;
  
            void main() {
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          
              vUv = uv;
            }
          `,
          fragment: /* glsl */ `
            precision lowp float;

            varying vec2 vUv;
            
            void main() {        
              gl_FragColor = vec4(vec3(vUv.x, vUv.y, 0.0), 1.0);
            }
          `,
        })
      }
    )

    this.scene.addChild(this.plane)

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
    this.setIsRendering()

    if (this.params?.isFollowingDom) {
      this.setScroll()
    }

    if (this.gl.isDebug) {
      this.setOrbitControls()
      this.setDebug()
    }
  }

  setOrbitControls() {
    this.controls = new Orbit(this.camera, this.gl.canvas)
  }

  resize() {
    this.getBounds()

    /* 
      Render Target
    */
    this.renderTarget.setSize(this.bounds.width * this.gl.sizes.pixelRatio, this.bounds.height * this.gl.sizes.pixelRatio)

    /* 
      Render Plane
    */
    this.renderPlane.mesh.program.uniforms.uResolution.value.set(this.gl.sizes.width, this.gl.sizes.height)
    this.renderPlane.mesh.program.uniforms.uPosition.value.x = this.bounds.left
    this.renderPlane.mesh.program.uniforms.uScale.value.set(this.bounds.width, this.bounds.height)

    /* 
      Camera
    */
    this.camera.perspective({ aspect: this.bounds.width / this.bounds.height });
    this.camera.updateProjectionMatrix()
  }

  setIsRendering() {
    this.gsapResources.push(
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
    )
  }

  getBounds() {
    if (this.params?.isFollowingDom) {
      this.bounds = this.params.dom.getBoundingClientRect()
    } else {
      this.bounds = {
        left: 0,
        top: 0,
        width: this.gl.sizes.width,
        height: this.gl.sizes.height,
      }
    }
  }

  setScroll() {
    /* 
      Basic
    */
    this.gsapResources.push(
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
          },
        }
      )
    )

    /* 
      Sticky
    */
    // // Enter
    // this.gsapResources.push(
    //   gsap.fromTo(
    //     this.renderPlane.mesh.program.uniforms.uPosition.value,
    //     {
    //       y: () => this.gl.sizes.height,
    //     },
    //     {
    //       y: 0,
    //       ease: 'none',
    //       scrollTrigger: {
    //         invalidateOnRefresh: true,
    //         scrub: true,
    //         trigger: '[data-gl-track=""]',
    //         start: () => `top-=${this.gl.sizes.height} top`,
    //         end: () => `top top`,
    //         refreshPriority: -99,
    //         // markers: true,
    //       },
    //     }
    //   )
    // )

    // // Leave
    // this.gsapResources.push(
    //   gsap.fromTo(
    //     this.renderPlane.mesh.program.uniforms.uPosition.value,
    //     {
    //       y: 0,
    //     },
    //     {
    //       y: () => -this.gl.sizes.height,
    //       ease: 'none',
    //       scrollTrigger: {
    //         invalidateOnRefresh: true,
    //         scrub: true,
    //         trigger: '[data-gl-track=""]',
    //         start: () => `bottom bottom`,
    //         end: () => `bottom+=${this.gl.sizes.height} bottom`,
    //         refreshPriority: -99,
    //         // markers: true,
    //       },
    //     }
    //   )
    // )
  }

  setDebug() {
    this.debugFolder = this.gl.world.debugFolder.addFolder({
      title: 'Boilerplate',
    })
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

    this.plane.position.y = Math.sin(this.gl.time.elapsed)
  }

  dispose() {
    /* 
      Remove assets
    */
    // this.renderPlane.mesh.material.dispose()
    // this.renderPlane.mesh.geometry.dispose()

    /* 
      Remove listeners
    */
    // Scroll.off('scroll', this.disposableFunctions.updateScrollUniforms)

    /* 
      Remove RTs
    */
    // this.renderTarget.dispose()


    /* 
      Kill ScrollTriggers
    */
    this.gsapResources.forEach((_item) => _item.kill())
    this.gsapResources = []

    /* 
      Remove debug folder
    */
    if (this.debugFolder) {
      this.debugFolder.dispose()
    }
  }
}
