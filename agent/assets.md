# Assets

`Scenes/Assets.ts` splits loading in two: `load()` is awaited before the first render, `loadAsync()` fires after shader compilation. The last argument of `customLoader(path, loader, onLoad, dependencies)` decides the bucket:

- `'all'` — always mandatory, blocks first paint;
- `['sceneName', …]` — mandatory only when one of those scenes is present in the DOM;
- `false` — always async.

Paths are built from `this.path` (empty by default) and are relative to the host project's public asset root — `static/` here, as in `this.path + 'textures/noise.webp'`. Set `this.path` when the host serves assets from somewhere else. Most loaders (GLTF, KTX2, HDR, EXR, Font) are commented out in the constructor — uncomment the one you need. `checkSceneDependenciesLoaded(['sceneName'])` awaits one scene's async assets, e.g. before a page transition.
