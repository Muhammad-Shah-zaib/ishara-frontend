# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Ishara is the web frontend for live subtitles of Pakistani Sign Language. Stack: Vue 3 + TypeScript + Vite + Tailwind CSS 4 + Pinia + Vue Router. Features: auth, home, about, translate (camera capture and the model connection are still to be added to translate; it runs on placeholder data). The backend lives elsewhere. The design spec is `../../DESIGN/DESIGN.md`, with mockups next to it.

## Commands

```
npm run dev                                  # dev server (add -- --host to reach it from a phone)
npm run build                                # vue-tsc -b && vite build (this is the type check)
npm run test:run                             # all tests, once
npm run test                                 # watch mode
npx vitest run src/features/auth             # one folder
npx vitest run -t "emits guest"              # one test by name
```

There is no linter configured.

## Architecture

- `src/core/` holds global pieces: layouts, shared components, pages, the router, constants. `src/features/<name>/` holds modules, each with its own `views`, `components`, `composables`, `stores`, `services` and `routes.ts`. Only create the subfolders a feature uses. Full rules are in `docs/folder-structure.md`.
- **Layout wiring:** features never import layouts. `core/router/index.ts` nests each feature's exported `routes.ts` under a layout (for example `{ path: '/', component: SecondaryLayout, children: authRoutes }`), and the layout renders the page through `<RouterView />`. `SecondaryLayout` is for account pages (wordmark-only header, slim footer). `PrimaryLayout` is for content pages (home, and later translate and about) with a navigation header and a full footer. `/` redirects to `/home`.
- `core` must not import from a feature, except `core/router`, which registers feature routes. Features should not import each other. Shared code moves to `core`.
- Use the `@/` alias (→ `src/`) for cross-folder imports and relative imports inside a feature.

## Styling

All styling comes from `src/assets/main.css`. It resets Tailwind's default colours, shadows and radii (`--color-*: initial` and so on), so only the Ishara tokens exist as utilities (`bg-primary`, `text-ink`, `border-outline`, `rounded-card`). It also defines the type utilities (`text-page-title`, `text-lead`...) and the shared classes (`btn`, `btn-primary`, `field`, `card`, `link`). Do not use arbitrary hex colours or default Tailwind palette classes. They do not exist and would silently do nothing. No shadows, gradients or pill-shaped buttons.

## Icons

Use only **Material Design Icons (`mdi:`) from Iconify**: `import { Icon } from '@iconify/vue'` and `<Icon icon="mdi:eye-outline" />`. Do not use any other icon set, emoji, or hand-written icon SVGs in components.

## Tests

Vitest + @vue/test-utils + jsdom. Tests live in a `__tests__/` folder next to the code, named `<Name>.spec.ts`, and import `describe`/`it`/`expect` from `vitest` (no globals). Stub `RouterLink` with `RouterLinkStub` for components that do not need a real router. Details are in `docs/testing.md`.

## Docs

When structure, layouts or tooling change, update `docs/folder-structure.md`, `docs/setup.md` or `docs/testing.md` in the same change.
