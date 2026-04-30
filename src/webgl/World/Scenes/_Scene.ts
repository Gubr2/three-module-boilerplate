import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Gl from '../../Gl'

export interface SceneParams {
  dom: HTMLElement
  isFollowingDom: boolean
  id: string
}

interface ScrollParams {
  renderPlane: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>
  trigger: HTMLElement
  type: 'regular' | 'sticky'
}

export default class _Scene {
  params: SceneParams
  isRendering: boolean
  gl: Gl
  bounds!: {
    left: number
    top: number
    width: number
    height: number
  }
  renderPlane: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>
  gsapResources: Array<any>
  disposableFunctions: Object
  debugFolder: any

  constructor(_params: SceneParams) {
    gsap.registerPlugin(ScrollTrigger)

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
      Bounds
    */
    this.getBounds()

    /* 
      Render Plane
    */
    this.renderPlane = new THREE.Mesh(
      //
      new THREE.PlaneGeometry(1, 1)
    )

    this.renderPlane.frustumCulled = false
    this.renderPlane.matrixAutoUpdate = false

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
    if (this.gl.isDebug) this.setDebug()
  }

  resize() {
    this.getBounds()
  }

  setIsRendering(_dom: HTMLElement) {
    this.gsapResources.push(
      ScrollTrigger.create({
        trigger: _dom,
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
        width: this.gl.sizes.width,
        height: this.gl.sizes.height,
        left: 0,
        top: 0,
      }
    }
  }

  setDefaultScroll(_params: ScrollParams) {
    if (_params.type === 'regular') {
      this.gsapResources.push(
        gsap.fromTo(
          _params.renderPlane.material.uniforms.uPosition.value,
          {
            y: () => Math.max(this.gl.sizes.height, this.bounds.height),
          },
          {
            y: () => -Math.max(this.gl.sizes.height, this.bounds.height),
            ease: 'none',
            scrollTrigger: {
              invalidateOnRefresh: true,
              scrub: true,
              trigger: _params.trigger,
              start: () => `center-=${Math.max(this.gl.sizes.height, this.bounds.height)} top+=${this.gl.sizes.height / 2}`,
              end: () => `center+=${Math.max(this.gl.sizes.height, this.bounds.height)} top+=${this.gl.sizes.height / 2}`,
              refreshPriority: -99,
              // markers: true,
            },
          }
        )
      )
    } else if (_params.type === 'sticky') {
      // Enter
      // ↳ Move in
      // ↳ Compensate for tall devices, where the screen height gets greater than the sticky container height
      this.gsapResources.push(
        gsap.fromTo(
          _params.renderPlane.material.uniforms.uPosition.value,
          {
            y: () => this.gl.sizes.height,
          },
          {
            y: 0,
            ease: 'none',
            scrollTrigger: {
              invalidateOnRefresh: true,
              scrub: true,
              trigger: _params.trigger,
              start: () => `
                top-=${this.gl.sizes.height} 
                top+=${Math.max((this.gl.sizes.height - this.bounds.height) / 2, 0)} 
              `,
              end: () => `
                top 
                top+=${Math.max((this.gl.sizes.height - this.bounds.height) / 2, 0)}
              `,
              refreshPriority: -100,
              // markers: true,
            },
          }
        )
      )

      // Leave
      // ↳ Move out
      // ↳ Compensate for tall devices, where the screen height gets greater than the sticky container height
      this.gsapResources.push(
        gsap.fromTo(
          _params.renderPlane.material.uniforms.uPosition.value,
          {
            y: 0,
          },
          {
            y: () => -this.gl.sizes.height,
            ease: 'none',
            scrollTrigger: {
              invalidateOnRefresh: true,
              scrub: true,
              trigger: _params.trigger,
              start: () => `
                bottom 
                bottom-=${Math.max((this.gl.sizes.height - this.bounds.height) / 2, 0)}
              `,
              end: () => `
                bottom+=${this.gl.sizes.height} 
                bottom-=${Math.max((this.gl.sizes.height - this.bounds.height) / 2, 0)}
              `,
              refreshPriority: -99,
              // markers: true,
            },
          }
        )
      )
    }
  }

  setDebug() {
    this.debugFolder = this.gl.world.debugFolder.addFolder({
      title: 'Scene: ' + this.params.id.charAt(0).toUpperCase() + this.params.id.slice(1),
    })
  }

  renderPipeline() {
    if (!this.isRendering) return
  }

  update() {
    if (!this.isRendering) return
  }

  dispose() {
    /* 
      Remove render plane
    */
    this.renderPlane.geometry.dispose()
    this.renderPlane.material.dispose()
    this.gl.dispose.allTextures(this.renderPlane)

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
