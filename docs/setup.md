# Project Setup

Vue 3 + TypeScript + Vite, with Tailwind CSS 4, Pinia, Vue Router and Iconify.

## Run it

```
npm install
npm run dev        # dev server
npm run build      # type-check + production build
npm run preview    # serve the production build
npm run test:run   # unit and component tests
```

## Configuration

- **`vite.config.ts`**: Vue and Tailwind plugins, and the `@` alias pointing to `src/`.
- **`vitest.config.ts`**: extends the Vite config; runs tests in `jsdom`.
- **`tsconfig.app.json`**: strict app config, including the `@/*` path alias.

## Styling

Everything is styled from `src/assets/main.css`. It resets Tailwind's default palette, radii and shadows, so only the Ishara tokens exist as utilities (`bg-primary`, `text-ink`, `border-outline`, `rounded-card`, ...). Do not add one-off hex colours in components. The design rules are in `DESIGN/DESIGN.md`.

## Deployment (Vercel)

The app uses history-mode routing (`/translate`, `/about`, `/login`), so the server must serve `index.html` for any path that is not a real file. Otherwise opening or refreshing a page directly returns a 404. `vercel.json` handles this:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

Vercel serves real files first (`/assets/*`, `/Videos/*`, `/favicon.svg`) and only applies the rewrite to the rest, so static files are unaffected.

Project settings: Framework preset **Vite**, build command `npm run build`, output directory `dist`, and the root directory set to this folder (`Frontend/Ishara-Frontend`) if the repository root is higher up.
