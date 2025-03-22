import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import Gl from '../../Gl'

import sceneObjectsVertex from '../../Shaders/Vertex/sceneObjectsVertex.glsl'
import sceneObjectsFragment from '../../Shaders/Fragment/sceneObjectsFragment.glsl'

import Plane from '../Geometry/Plane'
import Suzanne from '../Geometry/Suzanne'

import Lighting from '../Lighting/Lighting'

export default class SceneObjects {
  constructor() {
    /* 
      Setup
    */
    this.id = 'objects'

    /* 
      GL
    */
    this.gl = new Gl()

    /* 
      Scene
    */
    this.scene = new THREE.Scene()
    this.scene.environment = this.gl.assets.hdri

    /* 
      Render Plane
    */
    this.renderPlane = {
      mesh: new THREE.Mesh(
        //
        new THREE.PlaneGeometry(1, 1),
        new THREE.ShaderMaterial({
          vertexShader: sceneObjectsVertex,
          fragmentShader: sceneObjectsFragment,
          transparent: true,
          uniforms: {
            tDiffuse: new THREE.Uniform(null),
          },
        })
      ),
      bounds: null,
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

    this.setOrbitControls()

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
    this.renderPlane.mesh.position.set(this.renderPlane.bounds.left - this.gl.sizes.width / 2 + this.renderPlane.bounds.width / 2, -this.renderPlane.bounds.top + this.gl.sizes.height / 2 - this.renderPlane.bounds.height / 2, 0)
    this.renderPlane.mesh.scale.set(this.renderPlane.bounds.width, this.renderPlane.bounds.height)

    // Camera
    this.camera.aspect = this.renderPlane.bounds.width / this.renderPlane.bounds.height
    this.camera.updateProjectionMatrix()
  }

  renderPipeline() {
    this.gl.renderer.instance.setRenderTarget(this.renderTarget)
    this.gl.renderer.instance.render(this.scene, this.camera)

    this.renderPlane.mesh.material.uniforms.tDiffuse.value = this.renderTarget.texture
  }

  update() {
    this.suzanne.update()
    this.plane.update()
  }
}
