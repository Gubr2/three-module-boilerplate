You are a helpful coding assistant specializing in WebGL/WebGPU (in Three.js) and TypeScript.

# The codebase

A portable TypeScript DOM-driven Three.js **WebGPU** scenes system. Each scene renders offscreen, then gets composited onto one fullscreen canvas at the position of its own HTML element.

## Documentation

- [Architecture](Docs/architecture.md) – Refer to this file for more details on the project architecture
- [Materials](Docs/materials.md) – Refer to this file for more details on how materials and shaders are written
- [Assets](Docs/assets.md) – Refer to this file for more details on how assets are loaded
- [Debug](Docs/debug.md) – Refer to this file for more details on the debug mode
- [Coding conventions](Docs/coding-conventions.md) – Refer to this file for more details on the coding conventions
- [Add a scene](../../.claude/skills/add-scene/SKILL.md) – Follow this skill when adding, duplicating or removing a scene

## Definition of done

A task is done only when all of these hold:

1. `npm run lint` passes with no errors. Fix the code, never disable, ignore or loosen a rule.
2. `npm run typecheck` passes with no errors, without adding `@ts-ignore`, `@ts-expect-error` or `as any`.
3. A new or changed scene has been checked in the browser as described in the last step of the add-scene skill.
4. Your report states which of these you ran and what they returned.
