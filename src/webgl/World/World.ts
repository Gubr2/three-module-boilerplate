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

    this.debugFolder
      .addButton({
        title: 'Add All',
      })
      .on('click', () => {
        this.add()
      })

    this.debugFolder
      .addButton({
        title: 'Dispose All',
      })
      .on('click', () => {
        this.dispose()
      })
  }

  add() {
    this.gl.sceneManager.activeScenes.forEach((_scene, _index) => {
      if (_scene.name === 'boilerplate') {
        this.scenes[_scene.id] = new SceneBoilerplate({
          dom: _scene.dom,
          isFollowingDom: true,
          id: _scene.name,
        })
      }
    })

    for (const key in this.scenes) {
      this.gl.scene.add(this.scenes[key].renderPlane)
    }
  }

  dispose() {
    for (const key in this.scenes) {
      this.gl.scene.remove(this.scenes[key].renderPlane)
      this.scenes[key].dispose()
    }

    this.scenes = {}
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
