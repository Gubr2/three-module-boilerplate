# Materials

Import three as `three/webgpu` and nodes from `three/tsl`. Use new `Node` materials. Uniforms are TSL `uniform(...)` objects held in a plain record on the scene (`uniformsRenderPlane`), not in `material.uniforms`; animate them by writing `u.value` (gsap tweens `u.value` directly).

There are no `.glsl` files and no shader-string materials anywhere in the module — write node graphs, not GLSL.

If you ever write a new shaderchunk (`Fn`), always check if there is not a native TSL node available before writing your own one.
