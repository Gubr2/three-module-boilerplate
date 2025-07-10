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
        this.scenes.push(
          new SceneObjects({
            dom: _scene,
          })
        )
      }
    })

    for (const key in this.scenes) {
      this.gl.scene.add(this.scenes[key].renderPlane.mesh)
    }
  }

  destroy() {
    if (this.gl.isDebug) console.log('Before destroy:', this.gl.renderer.instance.info)

    /* 
      Scenes
    */
    for (const key in this.scenes) {
      // Remove everything from the scene and dispose
      this.gl.scene.remove(this.scenes[key].renderPlane.mesh)
      if (this.scenes[key].renderTarget) this.scenes[key].renderTarget.dispose()
      this.scenes[key].renderPlane.mesh.geometry.dispose()
      this.scenes[key].renderPlane.mesh.material.dispose()

      // Remove everything from the scene
      if (this.scenes[key].scene) {
        this.scenes[key].scene.traverse((object) => {
          this.scenes[key].scene.remove(object.name)

          if (!object.isMesh) return

          object.geometry.dispose()

          if (object.material.isMaterial) {
            this.cleanMaterial(object.material)
          } else {
            // an array of materials
            for (const material of object.material) this.cleanMaterial(material)
          }
        })
      }
    }

    this.selectors = []
    this.scenes = []

    // Clear renderer image
    this.gl.renderer.instance.setRenderTarget(null)
    this.gl.renderer.instance.clear()

    if (this.gl.isDebug) console.log('After destroy:', this.gl.renderer.instance.info)
  }

  cleanMaterial(material) {
    material.dispose()

    // dispose textures
    for (const key of Object.keys(material)) {
      const value = material[key]
      if (value && typeof value === 'object' && 'minFilter' in value) {
        value.dispose()
      }
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
