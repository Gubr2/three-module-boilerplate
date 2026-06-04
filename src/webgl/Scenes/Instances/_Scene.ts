import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Gl from '../../Gl'

export interface SceneParams {
  dom: HTMLElement
  endDom?: HTMLElement
  isFollowingDom?: boolean
  id: string
}

interface ScrollParams {
  renderPlane: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>
  trigger: HTMLElement
  endTrigger?: HTMLElement
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
    viewWidth: number
    viewHeight: number
  }
  renderPlane: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>
  gsapResources: Array<any>
  disposableFunctions: Record<string, () => void>
  debugFolder: any
  scrollCameraOffset: number

  constructor(_params: SceneParams) {
    gsap.registerPlugin(ScrollTrigger)

    /* 
      Params
    */
    this.params = _params

    /* 
      Flags
    */
    this.isRendering = true

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
      Scroll Camera Offset
      ↳ Helper variable in case the scroll container is taller than the screen height 
        to offset the camera position to simulate scroll-like movement
      ↳ Needs to be used manually in the child scene based on the current needs
    */
    this.scrollCameraOffset = 0

    /* 
      Disposable resources
    */
    this.gsapResources = []

    /* 
      Disposable functions
    */
    this.disposableFunctions = {}
  }

  resize() {
    this.getBounds()
  }

  setIsRendering(_dom: HTMLElement, _domEnd?: HTMLElement) {
    // Turn of automtic rendering and let it be handled by the scroll trigger
    this.isRendering = false

    this.gsapResources.push(
      ScrollTrigger.create({
        trigger: _dom,
        endTrigger: _domEnd,
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
      const bounds = this.params.dom.getBoundingClientRect()

      this.bounds = {
        width: bounds.width,
        height: bounds.height,
        viewWidth: bounds.width,
        viewHeight: Math.min(bounds.height, this.gl.sizes.height), // Clamp the scene height to the screen height if the bounds are bigger to prevent rendering content outside the screen
        left: bounds.left,
        top: bounds.top,
      }

      // Handle end bounds if exits
      if (this.params.endDom) {
        const endBounds = this.params.endDom.getBoundingClientRect()

        this.bounds.height = bounds.height + endBounds.height
        this.bounds.viewHeight = Math.min(bounds.height + endBounds.height, this.gl.sizes.height)
      }
    } else {
      this.bounds = {
        width: this.gl.sizes.width,
        height: this.gl.sizes.height,
        viewWidth: this.gl.sizes.width,
        viewHeight: this.gl.sizes.height,
        left: 0,
        top: 0,
      }
    }
  }

  /* 
    By default, the scroll is sticky.
    This can be changed to regular by using the this.scrollCameraOffset variable manually
  */
  setDefaultScroll(_params: ScrollParams) {
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
            trigger: _params.endTrigger ? _params.endTrigger : _params.trigger,
            start: () => `bottom bottom-=${Math.max((this.gl.sizes.height - this.bounds.height) / 2, 0)}`,
            end: () => `bottom+=${this.gl.sizes.height} bottom-=${Math.max((this.gl.sizes.height - this.bounds.height) / 2, 0)}`,
            refreshPriority: -100,
            // markers: true,
          },
        }
      )
    )

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
            start: () => `top-=${this.gl.sizes.height} top+=${Math.max((this.gl.sizes.height - this.bounds.height) / 2, 0)}`,
            end: () => `top top+=${Math.max((this.gl.sizes.height - this.bounds.height) / 2, 0)}`,
            refreshPriority: -99,
            // markers: true,
          },
        }
      )
    )

    // Set manual offset outside the screen to prevent gsap rendering to take pla
    // this.renderPlane.material.uniforms.uPosition.value.y = -999999

    // Scroll Camera Offset
    this.gsapResources.push(
      gsap.fromTo(
        this,
        {
          scrollCameraOffset: 0,
        },
        {
          scrollCameraOffset: Math.max(this.bounds.height - this.gl.sizes.height, 0),
          ease: 'none',
          scrollTrigger: {
            invalidateOnRefresh: true,
            scrub: true,
            trigger: _params.trigger,
            start: () => 'top top',
            end: () => `top+=${Math.max(this.bounds.height - this.gl.sizes.height, 0)} top`,
            // markers: true,
          },
        }
      )
    )
  }

  setDebug() {
    this.debugFolder = this.gl.manager.debugFolder.addFolder({
      title: 'Scene: ' + this.params.id.charAt(0).toUpperCase() + this.params.id.slice(1),
    })
  }

  async compile() {
    return new Promise<void>(async (_resolve) => {
      _resolve() // Placeholder in case the scene will not have a compile step
    })
  }

  renderPipeline() {}

  update() {}

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
