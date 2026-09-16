# Debug

Append `?debug` to the URL in a dev build: it sets `gl.isDebug`, attaches three's `Inspector` to the renderer, and enables the `[WebGPU] [ █ █ █ ]` progress logs. Scene panels hang off `gl.manager.debugFolder` (created in `Manager.setDebug()`) via `_Scene.setDebug()`. The Inspector has no destroy API yet, so `dispose()` only hides a scene's folder.
