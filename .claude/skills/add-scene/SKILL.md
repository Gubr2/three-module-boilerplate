---
name: add-scene
description: Add a new WebGPU scene to this boilerplate. Wires a DOM element to a _Scene subclass, registers it in the Manager and gives it assets. Use when asked to add, duplicate or remove a scene, or when a new [data-gl-scene] element needs something rendered into it.
---

# Add a scene

A scene is four coupled pieces: a DOM element, a class extending `_Scene`, a `case` in `Manager.add()` and, optionally, asset dependencies. Read `src/webgl/AGENTS.md` and `src/webgl/Docs/architecture.md` for the render model before starting.

**One name binds them.** The string in `data-gl-scene-start` / `data-gl-scene` is the same string as the `switch` case and the same string used in an `Assets` dependency array. A mismatch fails silently: the element is found, no class matches, nothing renders and no warning is printed.

## 1. Fix the name and the DOM shape

Choose a lowercase name, then pick the shape:

- **Single element**: `<div data-gl-scene="name"></div>`. Bounds are that element.
- **Range**: `<div data-gl-scene-start="name"></div>` … `<div data-gl-scene-end="name"></div>`. Bounds span both elements combined. A start without a matching end is dropped with a console warning.

Add the markup to the page and give the element real geometry in CSS: position, width and height. In this repo that is `src/index.html` and `src/styles/index.scss`; in a host project it is wherever that page and its styles live. A zero-height element yields zero bounds and an invisible scene. The `[data-gl-scene-start='boilerplate']` and `[data-gl-scene-end='boilerplate']` rules are the pattern to copy.

Done when the element exists in the page and has a non-zero width and height.

## 2. Write the scene class

Copy `src/webgl/Scenes/Instances/SceneBoilerplate.ts` to `src/webgl/Scenes/Instances/Scene<Name>.ts` and edit it. It is the reference implementation, so keep its structure and its `/* Title */` sections.

Keep as-is unless there is a reason to change:

- `export default class extends _Scene` and `super(_params)` first in the constructor. It fills `this.bounds`, `this.state` and `this.renderPlane`.
- The `scene` named `'Scene: ' + <Id>`, so it is identifiable in the Inspector.
- `this.renderTarget`, a `THREE.RenderTarget` sized `bounds.viewWidth / viewHeight × sizes.pixelRatio`.
- `uniformsRenderPlane` with `uScale` and `uPosition`, the `THREE.NodeMaterial` on `renderPlane` with `transparent = true`, and its `vertexNode` including the `if (this.params?.isFollowingDom)` branch.
- `renderPlane.material.fragmentNode = texture(this.renderTarget.texture, uv())`.
- The `setDefaultScroll({ renderPlane, uniformsRenderPlane, trigger, endTrigger })` call behind `if (this.params?.isFollowingDom)`.
- `if (this.gl.isDebug) this.setDebug()` at the end of the constructor.
- `compile()`: `setRenderTarget(this.renderTarget)`, then `await compileAsync(this.scene, this.camera)`.
- `renderPipeline()`: `if (!this.state.isRendering) return`, then `setRenderTarget(this.renderTarget)` and `render(this.scene, this.camera)`.

Change:

- `this.interface`: every tunable value of the scene (sizes, strengths, colours, durations). Read it as `this.interface.x` everywhere, never through a local alias.
- `setModels()`: the actual content, with materials built from `three/tsl` nodes (see `Docs/materials.md`).
- The camera, if the scene needs a different one.
- `update()`: keep `if (!this.state.isRendering) return` as the first line, then per-frame animation driven by `this.gl.time.elapsed` / `.delta`.
- `resize()`: `super.resize()` first, then resize the render target, update `uPosition.value.x` and `uScale.value`, and update the camera. Leave `uPosition.value.y` to the scroll tweens.
- `dispose()`: `super.dispose()` first, then traverse and dispose every mesh, material, texture and render target this scene created, and remove every listener it added.

While writing it:

- New uniforms are `u`-prefixed (`uProgress: uniform(0)`).
- Every timeline, scroll-triggered tween or ScrollTrigger goes into `this.gsapResources`.
- Event handlers are stored in `this.disposableFunctions.name` before `addEventListener`, and removed with the same reference in `dispose()`.

Done when `npm run lint` and `npm run typecheck` pass and every resource created in the constructor has a matching line in `dispose()`.

## 3. Register it in the Manager

In `src/webgl/Scenes/Manager.ts`, import the class and add a `case` to the `switch` in `add()`, mirroring the `boilerplate` case:

```ts
case 'name':
  this.sceneInstances[_scene.id] = new SceneName({
    dom: _scene.dom,
    endDom: _scene.endDom,
    isFollowingDom: true,
    id: _scene.name,
  })

  break
```

`isFollowingDom: false` makes a fullscreen scene with screen-sized bounds and no scroll tweens. It must call `this.updateIsRendering(true)` in its constructor: `_Scene` starts every scene with `state.isRendering = false` and only the scroll trigger turns it on, so a non-DOM scene otherwise renders nothing.

Done when the case string equals the `data-gl-scene*` value character for character.

## 4. Declare assets

If the scene needs assets, add them in `Assets.load()` with `customLoader(path, loader, onLoad, ['name'])` so they are mandatory only on pages carrying this scene. `onLoad` receives `(_result)`. Uncomment the loader it needs, both its import and its instance in the `Assets` constructor (GLTF, KTX2, HDR, EXR and Font are pre-written and commented out). Assets used by every page take `'all'`; anything that can arrive late takes `false`.

Done when the dependency array holds the same scene name as step 1.

## 5. Verify

1. `npm run lint` and `npm run typecheck` pass with no errors.
2. Open the page with `?debug` in whatever dev server the host project uses and confirm:
   - The console shows `[WebGPU]` logs for `Assets loaded`, `Compiled` and `Initialized`, with no warning about a missing end scene.
   - The scene's render plane sits exactly over its DOM element.
   - Scrolling past the element starts and stops its rendering, and the plane slides in and out.
   - Resizing the window keeps the plane locked to the element.

Report which of these were checked.
