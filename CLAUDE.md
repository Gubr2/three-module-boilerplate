# three-module-boilerplate

A portable TypeScript module for DOM-driven Three.js **WebGPU** scenes. Each scene renders offscreen, then gets composited onto one fullscreen canvas at the position of its own HTML element.

`src/webgl/` is the boilerplate; it gets dropped into different host projects, so build tooling, bundler config and package scripts are the host's concern — leave them out of changes here. Everything below is about the WebGL module itself.

There is no typecheck, lint or test step here, and types are never checked at build. Verify changes visually: run the host project's dev server and read the page plus the console.

## Architecture

`src/script.ts` constructs one `Gl` and calls `gl.load()`. Every other module reaches it with `new Gl()` — `Gl` is a singleton whose constructor returns the existing instance, so `this.gl = new Gl()` means "get the app", never "make one". The construction order inside `Gl.setup()` is a dependency order: utils → composite scene + camera → `Renderer` → `Manager` → `Assets`.

Boot sequence: `load()` awaits mandatory assets → `init()` awaits `renderer.instance.init()` and every scene's `compile()` → starts async assets → adds `update` to the gsap ticker. Per frame: `time` → `manager.update()` (scene logic) → `renderer.update()` (all rendering) → `mouse.update()`.

### Two-stage render

Nothing draws to the screen directly. `Renderer.update()`:

1. walks `manager.sceneInstances` and calls each `renderPipeline()`, which renders that scene into its own render target;
2. renders `gl.scene` — a flat composite scene holding one `renderPlane` per scene instance — through a fixed orthographic camera.

A `renderPlane` is a unit plane whose `vertexNode` maps it into clip space from its DOM element's bounds (`uScale`, `uPosition`), which is what puts the scene exactly where its element sits on the page. `frustumCulled` and `matrixAutoUpdate` are off; those uniforms are the only thing positioning it.

### Scenes are bound to DOM elements

`Manager.getSceneDoms()` collects `[data-gl-scene="name"]` (single element) and `[data-gl-scene-start="name"]` + matching `[data-gl-scene-end="name"]` (a range whose bounds span both elements — the nested-scene setup this branch demos). A start with no matching end is dropped with a console warning. `Manager.add()` then maps `name` → class through a `switch`; a name with no `case` produces no scene and no warning.

With `isFollowingDom: true` a scene renders only while scrolled near the viewport: a ScrollTrigger in `_Scene.setRenderingOnScroll()` toggles `isRendering` and `renderPlane.visible`, while `setDefaultScroll()` scrubs `uPosition.value.y` so the plane slides through the viewport. Hence every `update()` and `renderPipeline()` opens with `if (!this.isRendering) return`. `scrollCameraOffset.default` / `.inverted` are scrubbed 0 → overflow height for scenes taller than the screen; a scene uses them manually to fake scroll inside its own camera.

### Scene lifecycle

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

## Materials are TSL, not GLSL

Import three as `three/webgpu` and nodes from `three/tsl`. Materials are `NodeMaterial` / `MeshBasicNodeMaterial` with `vertexNode` and `colorNode` built inside `Fn(() => …)()`. Uniforms are TSL `uniform(...)` objects held in a plain record on the scene (`uniformsRenderPlane`), not in `material.uniforms`; animate them by writing `u.value` (gsap tweens `u.value` directly).

There are no `.glsl` files and no shader-string materials anywhere in the module — write node graphs, not GLSL.

If you ever write a new shaderchunk (Fn), always check if there is not a native TSL node available before writing your own one.

## Assets

`Scenes/Assets.ts` splits loading in two: `load()` is awaited before the first render, `loadAsync()` fires after shader compilation. The last argument of `customLoader(path, loader, onLoad, dependencies)` decides the bucket:

- `'all'` — always mandatory, blocks first paint;
- `['sceneName', …]` — mandatory only when one of those scenes is present in the DOM;
- `false` — always async.

Paths are built from `this.path` (empty by default) and are relative to the host project's public asset root — `static/` here, as in `this.path + 'textures/noise.webp'`. Set `this.path` when the host serves assets from somewhere else. Most loaders (GLTF, KTX2, HDR, EXR, Font) are commented out in the constructor — uncomment the one you need. `checkSceneDependenciesLoaded(['sceneName'])` awaits one scene's async assets, e.g. before a page transition.

## Debug

Append `?debug` to the URL in a dev build: it sets `gl.isDebug`, attaches three's `Inspector` to the renderer, and enables the `[WebGPU] [ █ █ █ ]` progress logs. Scene panels hang off `gl.manager.debugFolder` (created in `Manager.setDebug()`) via `_Scene.setDebug()`. The Inspector has no destroy API yet, so `dispose()` only hides a scene's folder.

## Gotchas

- The main renderer is built with `depth: false, stencil: false, antialias: false`. Depth belongs to each scene's own render target, and the composite pass has none.
- `resize()` and post-load both call `ScrollTrigger.refresh()`. Scroll values must therefore be written in function form (`start: () => …`) with `invalidateOnRefresh: true` to survive a refresh.
- `isRendering` starts `false` and is only ever set by the scroll trigger, so a scene created with `isFollowingDom: false` must call `updateIsRendering(true)` itself or it renders nothing.
- `Gl` falls back to a `webgl-not-available` class on `<html>` when WebGL2 is missing, and `load()` resolves without building anything.

## Style

– No semicolons, single quotes, 2-space indent, long lines (~200 cols); no formatter config is committed. Parameters and callback arguments are `_`-prefixed (`_params`, `_scene`, `_event`). Sections inside a class are separated by `/* Title */` block comments — follow that when adding code.
– Stop commenting your generated code. If necessary, be super brief
– Avoid destructuring objects when accessing a variable from it – instead reference it directly
