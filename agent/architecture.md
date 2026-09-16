# Architecture

`src/script.ts` constructs one `Gl` and calls `gl.load()`. Every other module reaches it with `new Gl()` — `Gl` is a singleton whose constructor returns the existing instance, so `this.gl = new Gl()` means "get the app", never "make one". The construction order inside `Gl.setup()` is a dependency order: utils → composite scene + camera → `Renderer` → `Manager` → `Assets`.

Boot sequence: `load()` awaits mandatory assets → `init()` awaits `renderer.instance.init()` and every scene's `compile()` → starts async assets → adds `update` to the gsap ticker. Per frame: `time` → `manager.update()` (scene logic) → `renderer.update()` (all rendering) → `mouse.update()`.

## Two-stage render

Nothing draws to the screen directly. `Renderer.update()`:

1. walks `manager.sceneInstances` and calls each `renderPipeline()`, which renders that scene into its own render target;
2. renders `gl.scene` — a flat composite scene holding one `renderPlane` per scene instance — through a fixed orthographic camera.

A `renderPlane` is a unit plane whose `vertexNode` maps it into clip space from its DOM element's bounds (`uScale`, `uPosition`), which is what puts the scene exactly where its element sits on the page. `frustumCulled` and `matrixAutoUpdate` are off; those uniforms are the only thing positioning it.

## Scenes are bound to DOM elements

`Manager.getSceneDoms()` collects `[data-gl-scene="name"]` (single element) and `[data-gl-scene-start="name"]` + matching `[data-gl-scene-end="name"]` (a range whose bounds span both elements — the nested-scene setup this branch demos). A start with no matching end is dropped with a console warning. `Manager.add()` then maps `name` → class through a `switch`; a name with no `case` produces no scene and no warning.

With `isFollowingDom: true` a scene renders only while scrolled near the viewport: a ScrollTrigger in `_Scene.setRenderingOnScroll()` toggles `isRendering` and `renderPlane.visible`, while `setDefaultScroll()` scrubs `uPosition.value.y` so the plane slides through the viewport. Hence every `update()` and `renderPipeline()` opens with `if (!this.isRendering) return`. `scrollCameraOffset.default` / `.inverted` are scrubbed 0 → overflow height for scenes taller than the screen; a scene uses them manually to fake scroll inside its own camera.

## Scene lifecycle

`src/webgl/Scenes/Instances/_Scene.ts` is the base class. Subclasses override these, calling `super` where noted:

| Method             | Called                       | Contract                                                                                              |
| ------------------ | ---------------------------- | ----------------------------------------------------------------------------------------------------- |
| `constructor`      | from `Manager.add()`         | `super(_params)` first — it fills `this.bounds` and creates `renderPlane`                             |
| `compile()`        | once, before the first frame | `await gl.renderer.instance.compileAsync(scene, camera)`; `Gl.init()` awaits all of them              |
| `update()`         | each frame, before rendering | animation and uniform writes only                                                                     |
| `renderPipeline()` | each frame                   | `setRenderTarget(rt)` + `render(scene, camera)`                                                       |
| `resize()`         | on window resize             | `super.resize()`, then render target, uniforms, camera aspect                                         |
| `dispose()`        | from `Manager.dispose()`     | `super.dispose()`, then traverse the scene disposing geometry/material/textures and the render target |

Anything gsap creates — tweens, ScrollTriggers — belongs in `this.gsapResources`; `_Scene.dispose()` kills that array. A tween left out of it survives disposal and keeps writing into dead uniforms.

## Gotchas

- Main `resize()` method call `ScrollTrigger.refresh()`. Scroll values must therefore be written in function form (`start: () => …`) with `invalidateOnRefresh: true` to survive a refresh.
- `isRendering` starts `false` and is only ever set by the scroll trigger, so a scene created with `isFollowingDom: false` must call `updateIsRendering(true)` itself or it renders nothing.
- `Gl` falls back to a `webgl-not-available` class on `<html>` when WebGL2 is missing, and `load()` resolves without building anything.
