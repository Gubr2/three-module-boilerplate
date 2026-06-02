interface ActiveScene {
  id: string
  name: string | undefined
  dom: HTMLElement
  end: HTMLElement | null
}

export default class SceneManager {
  activeScenes: ActiveScene[]

  constructor() {
    this.activeScenes = []

    // Run on init
    this.getActiveScenes()
  }

  /* 
    Use this function to get the active scenes on init or page transition
  */
  getActiveScenes() {
    this.activeScenes = Array.from(document.querySelectorAll<HTMLElement>('[data-gl-scene], [data-gl-scene-start]'))
      .map((_scene): ActiveScene | null => {
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
          end: end,
        }
      })
      // Filter out scenes with start but no end
      .filter((scene) => scene !== null)
  }
}
