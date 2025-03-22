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

      this.scenes[_index].setScenePlaneDimensions()
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
