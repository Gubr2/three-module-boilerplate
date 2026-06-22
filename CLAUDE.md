# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Big-picture architecture

This is a Three.js boilerplate where **WebGL scenes are driven by, and visually anchored to, DOM elements** as the page scrolls. It is meant to be the WebGL layer behind a scrollable HTML page (think award-site style background canvas).

### Singleton `Gl` orchestrator (`src/webgl/Gl.ts`)

`Gl` is a singleton — `new Gl()` anywhere returns the same instance, which is how every module (`Renderer`, `Manager`, `Assets`, scenes, utils) gets references to shared state without prop-drilling. It owns the global `THREE.Scene`, the `THREE.Camera`, and all utilities (`time`, `sizes`, `mouse`, `shaderChunks`, `dispose`, `misc`).

Boot sequence (entry point is `src/script.ts`):

1. `new Gl({ canvas })` → `setup()` instantiates utils, the global scene/camera, `Renderer`, `Manager`, `Assets`. Bails out early with a `webgl-not-available` class if WebGL2 is unsupported.
2. `gl.load()` → `assets.load()` (mandatory assets) → `gl.init()`.
3. `init()` optionally loads `Debug`, calls `compile()` on every active scene (`compileAsync` shader precompile), then kicks off async asset loading and starts the `gsap.ticker` render loop.
4. The per-frame `update()` runs only once `isLoaded` is true: `time → manager → renderer → mouse`.

### The render-to-texture / DOM-following pipeline

This is the core concept and spans `Manager`, `Renderer`, `_Scene`, and the concrete scene classes:

- Each scene (e.g. `SceneBoilerplate`) owns its **own** `THREE.Scene`, camera, and a `THREE.WebGLRenderTarget`. In `renderPipeline()` it renders itself into that render target.
- Each scene also owns a `renderPlane` — a `PlaneGeometry` mesh added to the **global** scene. Its `ShaderMaterial` samples the render target (`tDiffuse`) and positions the plane in clip space to overlap the scene's DOM element, using `uPosition`/`uScale`/`uResolution` uniforms (see the vertex shader gated by the `IS_FOLLOWING_DOM` define).
- `Renderer.update()` (`src/webgl/Renderer.ts`) first calls every scene's `renderPipeline()` (rendering to their targets), then does a single final pass rendering the global scene (all the render planes) to the screen.

So: scenes render off-screen → their output is composited as DOM-aligned planes in one final pass.

### DOM-driven scene registration (`src/webgl/Scenes/Manager.ts`)

Scenes are declared in HTML, not code. `Manager.getSceneDoms()` scans for:

- `data-gl-scene="name"` — a single-element scene, or
- `data-gl-scene-start="name"` paired with `data-gl-scene-end="name"` — a scene that spans from a start element to an end element (a start with no matching end is dropped with a warning).

`Manager.add()` maps a scene `name` to a concrete `_Scene` subclass. **To add a new scene type you must (1) create the class extending `_Scene`, (2) add a `name`-matched branch in `Manager.add()`, and (3) add the corresponding `data-gl-scene*` element(s) in `src/index.html`.**

### `_Scene` base class (`src/webgl/Scenes/Instances/_Scene.ts`)

Base for all scenes. Provides:

- `getBounds()` — computes `bounds` from the DOM element's `getBoundingClientRect()` (clamping height to viewport); subclasses size their render target / camera from `bounds`.
- `setDefaultScroll()` — wires GSAP `ScrollTrigger` to animate the render plane's `uPosition` uniform so the scene scrolls in/out, with compensation for viewports taller than the scene container. `scrollCameraOffset` is a helper for sticky/tall scroll containers, applied manually per-scene.
- `setIsRendering()` — toggles `isRendering` via ScrollTrigger so off-screen scenes skip rendering/updating.
- Lifecycle hooks subclasses override: `compile()`, `renderPipeline()`, `update()`, `resize()`, `dispose()`. Always call `super.*()` when overriding `resize`/`dispose`.

`SceneBoilerplate.ts` is the reference implementation — copy it as the starting point for new scenes.

### Scroll & resize

GSAP `ScrollTrigger` drives all scroll behavior. Window `resize` (in `Gl.setup()`) re-runs bounds/renderer/scene resizes and then calls `ScrollTrigger.refresh()` so trigger positions stay correct. A resize that happens before WebGL finishes loading is replayed after load (`didResizedBeforeWebglLoaded`).

### Assets (`src/webgl/Scenes/Assets.ts`)

Custom loader wrapping any Three.js loader. Assets are split into:

- **Mandatory** (`dependencies: 'all'`, or an array of scene names that are present on the page) — awaited during initial `load()` before init.
- **Async** — everything else; loaded after compilation via `loadAsync()`, grouped by scene dependency so `checkSceneDependenciesLoaded()` can gate things like page transitions.

Mandatory textures call `renderer.instance.initTexture()` to upload to the GPU up front. Loaders for GLTF/KTX2/HDR/EXR/Font are stubbed (commented) — uncomment as needed.

### Utilities (`src/webgl/Utils/`)

`Time`, `Sizes` (viewport + `pixelRatio` capped at 2, touch/desktop breakpoint at 992, `setResponsiveFov` helper), `Mouse`, `ShaderChunks` (registers a `snoise` chunk into `THREE.ShaderChunk` for reuse in shaders), `Dispose` (`allTextures` walks material props + uniforms to dispose textures), `Misc`, and the dev-only `Debug` (Tweakpane + `three-perf`/`stats-gl`).

## Conventions

- Shaders are written inline as `/* glsl */`-tagged template strings in scene classes.
- Renderer is intentionally minimal for performance: `antialias: false`, `depth: false`, `stencil: false`, `precision: 'lowp'`. Anti-aliasing/precision is expected to be handled per-scene if needed.
- Static assets live in `static/` (served at the site root by Vite) — includes `draco/` and `basis/` decoders and `textures/`.
- If you create modifiable parameters for a scene, put them into `this.interface` object in the scene constructor
