# Styling conventions

– No semicolons, single quotes, 2-space indent, long lines (~200 cols); no formatter config is committed. Parameters and callback arguments are `_`-prefixed (`_params`, `_scene`, `_event`). Sections inside a class are separated by `/* Title */` block comments — follow that when adding code.
– Stop commenting your generated code. If necessary, be super brief
– Avoid destructuring objects when accessing a variable from it – instead reference it directly
