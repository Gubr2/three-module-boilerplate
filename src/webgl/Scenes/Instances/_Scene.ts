import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Gl from '../../Gl'

export interface SceneParams {
  dom: HTMLElement
  endDom?: HTMLElement | null
  isFollowingDom?: boolean
  id: string
}

interface ScrollParams {
  renderPlane: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>
  trigger: HTMLElement
  endTrigger?: HTMLElement | null
}

export default class _Scene {
  params: SceneParams
  isRendering: boolean
  isResponsiveVisible: boolean
  isScrollBelow!: boolean
  gl: Gl
  bounds!: {
    left: number
    top: number
    width: number
    height: number
    aspect: number
    viewWidth: number
    viewHeight: number
    viewAspect: number
  }
  renderPlane: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>
  gsapResources: Array<any>
  disposableFunctions: Record<string, (...args: any[]) => void>
  debugFolder: any
  scrollCameraOffset: {
    default: number
    inverted: number
  }
  enterScroll: any
  leaveScroll: any

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
      Responsive visibility
      ↳ When set to false, the scene stops rendering and its render plane gets hidden
    */
    this.isResponsiveVisible = true

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
      new THREE.PlaneGeometry(1, 1),
    )

    this.renderPlane.frustumCulled = false
    this.renderPlane.matrixAutoUpdate = false

    /* 
      Scroll Camera Offset
      ↳ Helper variable in case the scroll container is taller than the screen height 
        to offset the camera position to simulate scroll-like movement
      ↳ Needs to be used manually in the child scene based on the current needs
    */
    this.scrollCameraOffset = {
      default: 0,
      inverted: 0,
    }

    /* 
      Disposable resources
    */
    this.gsapResources = []

    /* 
      Disposable functions
    */
    this.disposableFunctions = {}

    /* 
      Set is rendering
    */
    this.setRenderingOnScroll()
  }

  resize() {
    this.getBounds()

    if (this.params?.isFollowingDom) {
      this.enterScroll.scrollTrigger.vars.refreshPriority = this.isScrollBelow ? -99 : -100
      this.leaveScroll.scrollTrigger.vars.refreshPriority = this.isScrollBelow ? -100 : -99
    }
  }

  updateIsRendering(_isRendering?: boolean) {
    this.isRendering = this.isResponsiveVisible ? (_isRendering ?? false) : false
    this.renderPlane.visible = this.isResponsiveVisible ? (_isRendering ?? false) : false
  }

  setRenderingOnScroll() {
    if (!this.params?.isFollowingDom) return

    // Turn of automtic rendering and let it be handled by the scroll trigger
    this.updateIsRendering(false)

    this.gsapResources.push(
      ScrollTrigger.create({
        trigger: this.params.dom,
        endTrigger: this.params.endDom,
        start: () => `top-=${this.gl.sizes.height / 2} bottom`,
        end: () => `bottom+=${this.gl.sizes.height / 2} top`,
        invalidateOnRefresh: true,
        // markers: true,

        onEnter: () => {
          this.updateIsRendering(true)
        },
        onEnterBack: () => {
          this.updateIsRendering(true)
        },
        onLeave: () => {
          this.updateIsRendering(false)
        },
        onLeaveBack: () => {
          this.updateIsRendering(false)
        },
        onRefresh: (_self) => {
          const scrollState = _self.scroll()
          this.updateIsRendering(scrollState >= _self.start && scrollState < _self.end)
        },
      }),
    )
  }

  getBounds() {
    if (this.params?.isFollowingDom) {
      const bounds = this.params.dom!.getBoundingClientRect()

      this.bounds = {
        width: bounds.width,
        height: bounds.height,
        aspect: 0,
        viewWidth: bounds.width,
        viewHeight: Math.min(bounds.height, this.gl.sizes.height), // Clamp the scene height to the screen height if the bounds are bigger to prevent rendering content outside the screen
        viewAspect: 0,
        left: bounds.left,
        top: bounds.top,
      }

      // Handle end bounds if exits
      if (this.params.endDom) {
        const endBounds = this.params.endDom.getBoundingClientRect()

        this.bounds.height = bounds.height + endBounds.height
        this.bounds.viewHeight = Math.min(bounds.height + endBounds.height, this.gl.sizes.height)
      }

      this.bounds.aspect = this.bounds.width / this.bounds.height
      this.bounds.viewAspect = this.bounds.viewWidth / this.bounds.viewHeight

      /* 
        Check if the scroll is below the scene
      */
      this.isScrollBelow = this.bounds.top + this.bounds.height / 2 - this.gl.sizes.height / 2 < 0 ? true : false
    } else {
      this.bounds = {
        width: this.gl.sizes.width,
        height: this.gl.sizes.height,
        aspect: this.gl.sizes.width / this.gl.sizes.height,
        viewWidth: this.gl.sizes.width,
        viewHeight: this.gl.sizes.height,
        viewAspect: this.gl.sizes.width / this.gl.sizes.height,
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
    // Enter
    // ↳ Move in
    // ↳ Compensate for tall devices, where the screen height gets greater than the sticky container height
    this.enterScroll = gsap.fromTo(
      _params.renderPlane.material.uniforms.uPosition.value,
      {
        y: () => 1,
      },
      {
        y: 0,
        ease: 'none',
        immediateRender: false,
        scrollTrigger: {
          invalidateOnRefresh: true,
          scrub: true,
          trigger: _params.trigger,
          start: () => `top-=${this.gl.sizes.height} top+=${Math.max((this.gl.sizes.height - this.bounds.height) / 2, 0)}`,
          end: () => `top top+=${Math.max((this.gl.sizes.height - this.bounds.height) / 2, 0)}`,
          refreshPriority: this.isScrollBelow ? -99 : -100,
          // markers: true,
        },
      },
    )

    this.gsapResources.push(this.enterScroll)

    // Leave
    // ↳ Move out
    // ↳ Compensate for tall devices, where the screen height gets greater than the sticky container height
    this.leaveScroll = gsap.fromTo(
      _params.renderPlane.material.uniforms.uPosition.value,
      {
        y: 0,
      },
      {
        y: () => -1,
        ease: 'none',
        immediateRender: false,
        scrollTrigger: {
          invalidateOnRefresh: true,
          scrub: true,
          trigger: _params.endTrigger ? _params.endTrigger : _params.trigger,
          start: () => `bottom top+=${this.gl.sizes.height - Math.max((this.gl.sizes.height - this.bounds.height) / 2, 0)}`,
          end: () => `bottom+=${this.gl.sizes.height} top+=${this.gl.sizes.height - Math.max((this.gl.sizes.height - this.bounds.height) / 2, 0)}`,
          refreshPriority: this.isScrollBelow ? -100 : -99,
          // markers: true,
        },
      },
    )

    this.gsapResources.push(this.leaveScroll)

    // Set default value
    if (!this.isRendering) {
      gsap.set(_params.renderPlane.material.uniforms.uPosition.value, {
        y: this.isScrollBelow ? -this.gl.sizes.height : this.gl.sizes.height,
      })
    }
    // Set manual offset outside the screen to prevent gsap rendering to take pla
    // this.renderPlane.material.uniforms.uPosition.value.y = -999999

    // Scroll Camera Offset
    this.gsapResources.push(
      gsap.fromTo(
        this.scrollCameraOffset,
        {
          default: 0,
        },
        {
          default: () => Math.max(this.bounds.height - this.gl.sizes.height, 0),
          ease: 'none',
          immediateRender: false,
          scrollTrigger: {
            invalidateOnRefresh: true,
            scrub: true,
            trigger: _params.trigger,
            start: () => 'top top',
            end: () => `top+=${Math.max(this.bounds.height - this.gl.sizes.height, 0)} top`,
            // markers: true,
          },
        },
      ),
    )

    this.gsapResources.push(
      gsap.fromTo(
        this.scrollCameraOffset,
        {
          inverted: () => Math.max(this.bounds.height - this.gl.sizes.height, 0),
        },
        {
          inverted: 0,
          ease: 'none',
          immediateRender: false,
          scrollTrigger: {
            invalidateOnRefresh: true,
            scrub: true,
            trigger: _params.trigger,
            start: () => 'top top',
            end: () => `top+=${Math.max(this.bounds.height - this.gl.sizes.height, 0)} top`,
            // markers: true,
          },
        },
      ),
    )
  }

  setDebug() {
    // this.debugFolder = this.gl.manager.debugFolder.addFolder({
    //   title: 'Scene: ' + this.params.id.charAt(0).toUpperCase() + this.params.id.slice(1),
    // })
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
