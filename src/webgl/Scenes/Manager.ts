import Gl from '../Gl'

import _Scene from './Instances/_Scene'
import SceneBoilerplate from './Instances/SceneBoilerplate'

interface SceneDom {
  id: string
  name: string | undefined
  dom: HTMLElement
  endDom: HTMLElement | null
}

export default class Manager {
  gl: Gl
  sceneInstances!: Record<string, _Scene>
  debugFolder: any

  sceneDoms: SceneDom[]

  constructor() {
    this.gl = new Gl()

    /* 
      Scenes
    */
    this.sceneDoms = []
    this.sceneInstances = {}

    // Get scene DOMs on first init
    this.getSceneDoms()
  }

  init() {
    // Debug (first to expose the folder)
    if (this.gl.isDebug) this.setDebug()

    // Add scenes
    this.add()
  }

  setDebug() {
    this.debugFolder = this.gl.debug.gui.addFolder({
      title: 'Scenes',
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
    this.sceneDoms.forEach((_scene, _index) => {
      switch (_scene.name) {
        case 'boilerplate':
          this.sceneInstances[_scene.id] = new SceneBoilerplate({
            dom: _scene.dom,
            endDom: _scene.endDom,
            isFollowingDom: true,
            id: _scene.name,
          })

          break

        default:
          break
      }
    })

    for (const key in this.sceneInstances) {
      this.gl.scene.add(this.sceneInstances[key].renderPlane)
    }
  }

  getSceneDoms() {
    this.sceneDoms = Array.from(document.querySelectorAll<HTMLElement>('[data-gl-scene], [data-gl-scene-start]'))
      .map((_scene): SceneDom | null => {
        // If it comes from a start
        const hasStart = _scene.dataset.glSceneStart

        // Check if there is an end
        let end: HTMLElement | null = null

        if (hasStart) {
          end = document.querySelector<HTMLElement>(`[data-gl-scene-end="${_scene.dataset.glSceneStart}"]`)

          // If no end scene found, warn
          if (!end) {
            console.warn(`[WebGL] [Scene: ${_scene.dataset.glSceneStart}] - No end scene found for start scene`)

            return null
          }
        }

        // Return the scene object
        return {
          id: `${hasStart ? _scene.dataset.glSceneStart : _scene.dataset.glScene}_${crypto.randomUUID()}`,
          name: hasStart ? _scene.dataset.glSceneStart : _scene.dataset.glScene,
          dom: _scene,
          endDom: end,
        }
      })
      // Filter out scenes with start but no end
      .filter((scene) => scene !== null)
  }

  dispose() {
    for (const key in this.sceneInstances) {
      this.gl.scene.remove(this.sceneInstances[key].renderPlane)
      this.sceneInstances[key].dispose()
    }

    this.sceneInstances = {}
  }

  resize() {
    for (const key in this.sceneInstances) {
      this.sceneInstances[key].resize()
    }
  }

  update() {
    for (const key in this.sceneInstances) {
      this.sceneInstances[key].update()
    }
  }
}
