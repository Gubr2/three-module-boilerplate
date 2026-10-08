# Coding conventions

– No semicolons, single quotes, 2-space indent, long lines (~200 cols); no formatter config is committed. Parameters and callback arguments are `_`-prefixed (`_params`, `_scene`, `_event`).
– Never destructure objects.
– Uniforms are prefixed with `u` (`uScale`, `uPosition`).
– Classes that get extended are prefixed with `_` (`_Scene`), and so is the name they are imported under.

## Read values from their source

Never copy a `this` property into a local variable to shorten it. Write the full path every time it is used.

Not this:

```ts
const easing = this.settings.easing
gsap.to(this.camera.position, { y: 0, ease: easing })
```

This:

```ts
gsap.to(this.camera.position, { y: 0, ease: this.settings.easing })
```

A local is allowed only when inlining would change behaviour or types:

- `const camera = this.camera` after a null check, when it is used inside a callback (TypeScript drops the check inside closures)
- an indexed lookup, `const entry = this.entries[_name]`
- a value kept before its source changes, `const previous = this.activeIndex`
- the result of a getter that builds TSL nodes or does work
- a cast, `const image = this.texture.image as HTMLImageElement`

## Comments

The only comment allowed is a section title. Sections inside a class or a long method are separated by a title block holding a few words and nothing else:

```ts
/*
  Render Target
*/
```

Never write any other comment: no explanations, no `//` notes, no `↳` lines under a title, no JSDoc, no commented-out code, no lint or TypeScript disable directives. This applies to the code you write; leave existing comments as they are unless asked to change them.

## Enforced by `npm run lint`

oxlint runs the local rules in `lint/rules.js` plus `no-unused-vars`. Write code that passes them the first time:

- `no-object-destructuring`: no object destructuring
- `no-interface-alias`: no local aliases of `this.interface` properties
- `no-unused-vars`: no unused imports or variables
- `param-prefix`: every function, callback and `catch` parameter starts with `_`
- `uniform-prefix`: every `uniform()`, `uniformArray()`, `uniformTexture()` and `uniformCubeTexture()` is stored under a `u`-prefixed name
- `base-class-prefix`: a project class used after `extends` starts with `_`
- `no-inline-listener`: `addEventListener` gets a stored reference (`this.disposableFunctions.name`, `this.events.name`), never an inline or bound function
- `scene-super-call`: `resize()` and `dispose()` in a scene call `super.resize()` and `super.dispose()`
- `scene-rendering-guard`: `update()` and `renderPipeline()` in a scene open with `if (!this.state.isRendering) return`
- `gsap-tracked`: a timeline, a tween with a `scrollTrigger`, or a `ScrollTrigger.create()` in a scene goes into `this.gsapResources` or is killed in `dispose()`

## Over-engineering
Avoid over-engineering. Only make changes that are directly requested or clearly
necessary. Keep solutions simple and focused:

- Scope: Don't add features, refactor code, or make "improvements" beyond what was
  asked. A bug fix doesn't need surrounding code cleaned up. A simple feature doesn't need
  extra configurability.

- Defensive coding: Don't add error handling, fallbacks, or validation for scenarios
  that can't happen. Trust internal code and framework guarantees. Only validate at system
  boundaries (user input, external APIs).

- Abstractions: Don't create helpers, utilities, or abstractions for one-time
  operations. Don't design for hypothetical future requirements. The right amount of
  complexity is the minimum needed for the current task.
