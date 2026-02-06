import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Gl from '../../Gl'

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
    this.scene = new THREE.Scene()
    this.scene.matrixAutoUpdate = false

    /* 
      Render Plane
    */
    this.renderPlane = {
      mesh: new THREE.Mesh(
        //
        new THREE.PlaneGeometry(1, 1),
        new THREE.ShaderMaterial({
          defines: {
            IS_FOLLOWING_DOM: this.params?.isFollowingDom ? 1 : 0,
          },
          uniforms: {
            tDiffuse: new THREE.Uniform(null),

            uScale: new THREE.Uniform(new THREE.Vector2(this.gl.sizes.width, this.gl.sizes.height)),
            uPosition: new THREE.Uniform(new THREE.Vector2(0, 0)),
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
              
              // Debug
              // gl_FragColor.rgb += vec3(vUv.x, vUv.y, 0.0);
              // gl_FragColor.a = 1.0;
            }
          `,
        })
      ),
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
    this.renderTarget = new THREE.WebGLRenderTarget(this.gl.sizes.width * this.gl.sizes.pixelRatio, this.gl.sizes.height * this.gl.sizes.pixelRatio, {
      // depthBuffer: false,
      // stencilBuffer: false,
    })

    /* 
      Camera
    */
    this.camera = new THREE.PerspectiveCamera(75, this.gl.sizes.width / this.gl.sizes.height, 0.1, 1000)
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
      Functions
    */
    this.setIsRendering()
    this.getBounds()

    if (this.params?.isFollowingDom) {
      this.setScroll()
      this.resize() // Resizeto match the DOM element's size, aspect ratio
    }

    if (this.gl.isDebug) {
      this.setOrbitControls()
      this.setDebug()
    }
  }

  setOrbitControls() {
    this.controls = new OrbitControls(this.camera, this.gl.canvas)
    this.controls.enableDamping = true
    this.controls.enableZoom = false
  }

  resize() {
    this.getBounds()

    if (this.params?.isFollowingDom) {
      this.renderTarget.setSize(this.bounds.width * this.gl.sizes.pixelRatio, this.bounds.height * this.gl.sizes.pixelRatio)

      this.camera.aspect = this.bounds.width / this.bounds.height
      this.camera.updateProjectionMatrix()
    } else {
      this.renderTarget.setSize(this.gl.sizes.width * this.gl.sizes.pixelRatio, this.gl.sizes.height * this.gl.sizes.pixelRatio)

      this.camera.aspect = this.renderPlane.mesh.material.uniforms.uScale.value.x / this.renderPlane.mesh.material.uniforms.uScale.value.y
      this.camera.updateProjectionMatrix()
    }
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
    if (this.params?.isFollowingDom) {
      this.bounds = this.params.dom.getBoundingClientRect()

      this.renderPlane.mesh.material.uniforms.uResolution.value.set(this.gl.sizes.width, this.gl.sizes.height)
      this.renderPlane.mesh.material.uniforms.uPosition.value.x = this.bounds.left
      this.renderPlane.mesh.material.uniforms.uScale.value.set(this.bounds.width, this.bounds.height)
    } else {
      this.renderPlane.mesh.material.uniforms.uResolution.value.set(this.gl.sizes.width, this.gl.sizes.height)
      this.renderPlane.mesh.material.uniforms.uScale.value.set(this.gl.sizes.width, this.gl.sizes.height)
    }
  }

  setScroll() {
    /* 
      Basic
    */
    gsap.fromTo(
      this.renderPlane.mesh.material.uniforms.uPosition.value,
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
          // onRefresh: () => {
          //   this.getBounds()
          //   this.updateCameraAspect()
          // },
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

  setDebug() {
    this.debugFolder = this.gl.world.debugFolder.addFolder({
      title: 'Boilerplate',
    })
  }

  renderPipeline() {
    if (!this.isRendering) return

    this.gl.renderer.instance.setRenderTarget(this.renderTarget)
    this.gl.renderer.instance.render(this.scene, this.camera)

    this.renderPlane.mesh.material.uniforms.tDiffuse.value = this.renderTarget.texture
  }

  update() {
    if (!this.isRendering) return

    this.plane.position.y = Math.sin(this.gl.time.elapsed)
  }
}
