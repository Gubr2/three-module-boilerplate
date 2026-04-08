import Gl from '../Gl'

import _Scene from './Scenes/_Scene'
import SceneBoilerplate from './Scenes/SceneBoilerplate'

export default class World {
  gl: Gl
  selectors!: NodeListOf<HTMLElement>
  scenes!: Record<string, _Scene>
  debugFolder: any

  constructor() {
    this.gl = new Gl()

    /* 
      Scenes
    */
    this.scenes = {}

    /* 
      Debug
    */
    if (this.gl.isDebug) this.setDebug()
  }

  setDebug() {
    this.debugFolder = this.gl.debug.gui.addFolder({
      title: 'World',
    })
  }

  add() {
    this.selectors = document.querySelectorAll('[data-gl]')

    this.selectors.forEach((_scene, _index) => {
      if (_scene.dataset.gl === 'boilerplate') {
        this.scenes['boilerplate'] = new SceneBoilerplate({
          dom: _scene,
          isFollowingDom: true,
          id: _scene.dataset.gl,
        })
      }
    })

    for (const key in this.scenes) {
      this.gl.scene.add(this.scenes[key].renderPlane)
    }
  }

  dispose() {
    for (const key in this.scenes) {
      this.scenes[key].dispose()
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
