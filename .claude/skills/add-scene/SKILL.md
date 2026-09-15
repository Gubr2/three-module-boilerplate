---
name: add-scene
description: Add a new WebGPU scene to this boilerplate — wire a DOM element to a _Scene subclass, register it in the Manager, and give it assets. Use when asked to add, duplicate or remove a scene, or when a new [data-gl-scene] element needs something rendered into it.
---

# Add a scene

A scene in this repo is four coupled pieces: a DOM element, a class extending `_Scene`, a `case` in `Manager.add()`, and (optionally) asset dependencies. Read `CLAUDE.md` for the render model before starting.

**One name binds them.** The string in `data-gl-scene-start` / `data-gl-scene` is the same string as the `switch` case and the same string used in an `Assets` dependency array. A mismatch fails silently: the element is found, no class matches, nothing renders, no warning is printed.

## 1. Fix the name and the DOM shape

Choose a lowercase name, then pick the shape:

- **Single element** — `<div data-gl-scene="name"></div>`. Bounds are that element.
- **Range** — `<div data-gl-scene-start="name"></div>` … `<div data-gl-scene-end="name"></div>`. Bounds span both elements combined; a start without a matching end is dropped with a console warning.

Add the markup to the page and give the element real geometry in CSS — position, width, height. In this repo that is `src/index.html` and `src/styles/index.scss`; in a host project it is wherever that page and its styles live. A zero-height element yields zero bounds and an invisible scene. The existing `boilerplate` rules are the pattern to copy.

Done when the element exists in `index.html` and has non-zero width and height from `index.scss`.

## 2. Write the scene class

Copy `src/webgl/Scenes/Instances/SceneBoilerplate.ts` to `src/webgl/Scenes/Instances/Scene<Name>.ts` and edit it. It is the reference implementation — keep its structure:

Keep as-is unless there is a reason to change:

- `super(_params)` first in the constructor.
- `this.renderTarget` sized `bounds.viewWidth/viewHeight × sizes.pixelRatio`.
- `uniformsRenderPlane` (`uScale`, `uPosition`) and the `renderPlane.material.vertexNode` that consumes them, including its `if (this.params?.isFollowingDom)` guard — that branch is skipped at compile time for non-DOM scenes.
- `renderPlane.material.colorNode = texture(this.renderTarget.texture, uv())`.
- The `setDefaultScroll({...})` call behind `if (this.params?.isFollowingDom)`.
- `compile()`, and the `if (!this.isRendering) return` guard opening `renderPipeline()` and `update()`.

Change:

- `setModels()` — the actual content, materials built from `three/tsl` nodes.
- `update()` — per-frame animation, driven by `this.gl.time.elapsed` / `.delta`.
- `resize()` — after `super.resize()`, resize the render target, update `uPosition.value.x` and `uScale.value`, update the camera. Leave `uPosition.value.y` to the scroll tweens.
- `dispose()` — after `super.dispose()`, traverse and dispose every mesh, material, texture and render target this scene created.

Every gsap tween or ScrollTrigger the scene creates goes into `this.gsapResources` so `_Scene.dispose()` can kill it.

Done when the class compiles and every resource created in the constructor has a matching line in `dispose()`.

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

`isFollowingDom: false` makes a fullscreen scene with screen-sized bounds and no scroll tweens. It must call `this.updateIsRendering(true)` in its constructor: `_Scene` starts every scene at `isRendering = false` and only the scroll trigger turns it on, so a non-DOM scene otherwise renders nothing.

Done when the case string equals the `data-gl-scene*` value character for character.

## 4. Declare assets

If the scene needs assets, add them in `Assets.load()` with `customLoader(path, loader, onLoad, ['name'])` so they are mandatory only on pages carrying this scene. Uncomment the loader it needs in the `Assets` constructor (GLTF, KTX2, HDR, EXR, Font are all pre-written and commented out). Assets used by every page take `'all'`; anything that can arrive late takes `false`.

Done when the dependency array holds the same scene name as step 1.

## 5. Verify in the browser

Open the page with `?debug` in whatever dev server the host project uses. Confirm all four:

1. Console shows `Assets loaded`, `Compiled`, `Initialized` with no warnings about a missing end scene.
2. The scene's render plane appears aligned with its DOM element (the element's background colour shows through around it while styling is still visible).
3. Scrolling past the element starts and stops its rendering, and the plane slides in and out.
4. Resizing the window keeps the plane locked to the element.

Report which of the four were checked.
