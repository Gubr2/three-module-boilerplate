import Gl from '../Gl'

import SceneObjects from './Scenes/SceneObjects'

export default class World {
  constructor() {
    this.gl = new Gl()

    /* 
      Scenes
    */
    this.selectors = []
    this.scenes = []
  }

  add() {
    this.selectors = document.querySelectorAll('[data-gl]')

    this.selectors.forEach((_scene, _index) => {
      if (_scene.dataset.gl === 'objects') {
        this.scenes.push(new SceneObjects())
      }
    })

    for (const key in this.scenes) {
      this.gl.scene.add(this.scenes[key].renderPlane.mesh)
    }
  }

  setScenePlanesDimensions() {
    this.selectors.forEach((_selector, _index) => {
      let bounds = _selector.getBoundingClientRect()

      this.scenes[_index].renderPlane.bounds = bounds

      // Mesh
      this.scenes[_index].renderPlane.mesh.position.set(bounds.left - this.gl.sizes.width / 2 + bounds.width / 2, -bounds.top + this.gl.sizes.height / 2 - bounds.height / 2, 0)
      this.scenes[_index].renderPlane.mesh.scale.set(bounds.width, bounds.height)

      // Camera
      this.scenes[_index].camera.aspect = bounds.width / bounds.height
      this.scenes[_index].camera.updateProjectionMatrix()
    })
  }

  resize() {
    for (const key in this.scenes) {
      this.scenes[key].resize()
    }
  }

  update() {
    for (const key in this.scenes) {
      this.scenes[key].update()
    }

    this.setScenePlanesDimensions()
  }
}
