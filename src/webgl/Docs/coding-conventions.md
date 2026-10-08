# Coding conventions

– No semicolons, single quotes, 2-space indent, long lines (~200 cols); no formatter config is committed. Parameters and callback arguments are `_`-prefixed (`_params`, `_scene`, `_event`). Sections inside a class are separated by `/* Title */` block comments — follow that when adding code.
– Its stictly forbinned to comment the code or leave any kind of explanation of the code you generate
– Avoid destructuring variables or creating local aliases of objects, always reference them directly from source. Object destructuring and aliasing `this.interface` properties into local variables are enforced by `npm run lint` (oxlint, rules in `lint/no-object-destructuring.js`)

## Over-engineering
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
