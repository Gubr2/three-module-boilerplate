import * as THREE from 'three'
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
        new THREE.ShaderMaterial({
          vertexShader: /* glsl */ `
            varying vec2 vUv;

            void main() {
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            
              vUv = uv;
            }
          `,
          fragmentShader: /* glsl */ `
            varying vec2 vUv;

            uniform sampler2D tDiffuse;
            
            void main() {
              vec4 textureDiffuse = texture(tDiffuse, vUv);
            
              gl_FragColor = textureDiffuse;
              // gl_FragColor.rgb += vec3(vUv.x, vUv.y, 0.0);
              // gl_FragColor.a = 1.0;
            }
          `,
          transparent: true,
          uniforms: {
            tDiffuse: new THREE.Uniform(null),
          },
        })
      ),
      bounds: {
        top: 0,
        left: 0,
        width: this.gl.sizes.width,
        height: this.gl.sizes.height,
      },
    }

    /* 
      Render Target
    */
    this.renderTarget = new THREE.WebGLRenderTarget(this.gl.sizes.width * this.gl.sizes.pixelRatio, this.gl.sizes.height * this.gl.sizes.pixelRatio, {
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
    this.plane = new Plane()
    this.suzanne = new Suzanne()

    this.scene.add(this.plane.instance)
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

  setScenePlaneDimensions() {
    // Mesh
    this.renderPlane.mesh.position.set(
      //
      this.renderPlane.bounds.left - this.gl.sizes.width / 2 + this.renderPlane.bounds.width / 2,
      -this.renderPlane.bounds.top,
      0
    )
    this.renderPlane.mesh.scale.set(
      //
      this.renderPlane.bounds.width,
      this.renderPlane.bounds.height
    )

    // Camera
    this.camera.aspect = this.renderPlane.bounds.width / this.renderPlane.bounds.height
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
    const bounds = this.params.dom.getBoundingClientRect()

    this.renderPlane.bounds.left = bounds.left
    this.renderPlane.bounds.width = bounds.width
    this.renderPlane.bounds.height = bounds.height
  }

  setScroll() {
    /* 
      Basic
    */
    gsap.fromTo(
      this.renderPlane.bounds,
      {
        top: () => this.gl.sizes.height,
      },
      {
        top: () => -this.gl.sizes.height,
        ease: 'none',
        scrollTrigger: {
          invalidateOnRefresh: true,
          scrub: true,
          trigger: this.params.dom,
          start: () => `center-=${this.gl.sizes.height} top+=${this.gl.sizes.height / 2}`,
          end: () => `center+=${this.gl.sizes.height} top+=${this.gl.sizes.height / 2}`,
          refreshPriority: -99,
          // markers: true,

          onRefresh: () => {
            this.getBounds()
            this.setScenePlaneDimensions()
          },
          // markers: true,
        },
        onUpdate: (_self) => {
          this.setScenePlaneDimensions()
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
    //         this.setScenePlaneDimensions();
    //       },
    //       refreshPriority: -99,
    //       // markers: true,
    //     },
    //     onUpdate: (_self) => {
    //       this.setScenePlaneDimensions();
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
    //         this.setScenePlaneDimensions();
    //       },
    //       refreshPriority: -99,
    //       // markers: true,
    //     },
    //     onUpdate: (_self) => {
    //       this.setScenePlaneDimensions();
    //     },
    //   }
    // );
  }

  renderPipeline() {
    if (!this.isRendering) return

    this.gl.renderer.instance.setRenderTarget(this.renderTarget)
    this.gl.renderer.instance.render(this.scene, this.camera)

    this.renderPlane.mesh.material.uniforms.tDiffuse.value = this.renderTarget.texture
  }

  update() {
    if (!this.isRendering) return

    this.suzanne.update()
    this.plane.update()
  }
}
