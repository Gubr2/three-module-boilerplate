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

    /* 
      Debug
    */
    if (this.gl.isDebug) this.setDebug()
  }

  setDebug() {
    this.debugWorldFolder = this.gl.debug.gui.addFolder({
      title: 'World',
    })
  }

  add() {
    this.selectors = document.querySelectorAll('[data-gl]')

    this.selectors.forEach((_scene, _index) => {
      if (_scene.dataset.gl === 'objects') {
        this.scenes.objects = new SceneObjects({
          dom: _scene,
        })
      }
    })

    for (const key in this.scenes) {
      this.scenes[key].renderPlane.mesh.setParent(this.gl.scene)
    }
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
  }
}
