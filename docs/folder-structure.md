# Folder Structure

The `src/` directory is divided into two folders: **`core`** and **`features`**.

## Architecture Overview

```
src/
├── assets/     # Global stylesheet (main.css) and static assets
├── core/       # Global layouts, components, pages, router and constants
├── features/   # Business modules (auth, capture, ...)
├── App.vue     # Root component: renders <RouterView />
└── main.ts     # App bootstrap (Pinia, router, main.css)
```

### 1. `assets/`

- **`public/favicon.svg`**: the "i" mark (olive tile, cream "i", pale-olive dot). Used as the tab icon and drawn again in `core/components/AppLogoMark.vue` for the header and footer logo. Change both together.
- **`assets/main.css`**: the single global stylesheet. It imports Tailwind and Roboto, defines the **Oat & Olive** design tokens (`@theme`), the typography utilities (`text-page-title`, `text-lead`, ...) and the shared component classes (`btn`, `field`, `card`, `link`). All styling must come from these tokens; see `DESIGN/DESIGN.md` at the repo root.

### 2. `core/`

Globally shared pieces that do not belong to a specific feature.

- **`core/components/`**: Reusable UI components (e.g., `AppLogo`, `PrimaryHeader`, `SignVideo`, `PipelineSteps`).
- **`core/layouts/`**: Layouts that wrap pages (see below).
- **`core/pages/`**: Global pages (e.g., `NotFound`).
- **`core/router/`**: Router instance. Each feature exports its own routes and the router mounts them under the right layout.
- **`core/constants/`**: Global constants and config variables (e.g., `APP_NAME`, `APP_TAGLINE`, `DEMO_VIDEO` in `media.ts`, `PIPELINE_STEPS` in `pipeline.ts`).

#### Layouts

| Layout | Used by | Contents |
|---|---|---|
| `SecondaryLayout` | Account pages (log in, sign up, ...) | Wordmark-only header, centred content, slim green footer. No navigation. |
| `PrimaryLayout` | Content pages (home, translate, about) | `PrimaryHeader` (nav and Log in) and `PrimaryFooter` (green, links). |

A layout renders its page through `<RouterView />` (or a slot). Features never import a layout themselves; the router assigns it by nesting the feature's routes:

```ts
{ path: '/', component: SecondaryLayout, children: authRoutes }
```

### 3. `features/`

This directory holds the modules of the application. Currently: `auth`, `home`, `translate`, `about`. Camera capture and the model connection will be added inside `translate`. New features are added here as the app grows.

Each feature folder contains only what it needs:
- **`views/`**: Feature pages (routed).
- **`components/`**: Components used only within this feature.
- **`stores/`**: Pinia stores for this feature.
- **`composables/`**: Logic for this feature.
- **`services/`**: API calls for this feature.
- **`routes.ts`**: The feature's route records, imported by `core/router`.

Tests live in a `__tests__/` folder next to the code they cover (see [testing.md](./testing.md)).

#### Example: Auth

```
features/auth/
├── routes.ts
├── views/LoginView.vue
├── components/
│   ├── LoginForm.vue
│   ├── WelcomeCharacter.vue
│   └── __tests__/LoginForm.spec.ts
└── composables/
    ├── useLoginForm.ts
    └── __tests__/useLoginForm.spec.ts
```

#### Example: Home

```
features/home/
├── routes.ts                 # /home, nested under PrimaryLayout
├── views/HomeView.vue        # composes the three sections below
└── components/
    ├── HomeHero.vue              # headline, paragraph, CTAs, then HomeDemo
    ├── HomeDemo.vue              # compact portrait clip + "How it works" pipeline beside it
    ├── HomeWhy.vue
    └── HomeBuilt.vue
```

#### Example: About

The long "About us" page (`/about`, under `PrimaryLayout`). Each section of the design is its own component, so a section can change without touching the others. All copy lives in one file.

```
features/about/
├── routes.ts                       # /about
├── views/AboutView.vue             # stacks the sections in order
├── constants/aboutContent.ts       # copy: gap words, audiences, goals, steps, community
└── components/
    ├── AboutHero.vue               # headline + HandPoseIllustration
    │   └── HandPoseIllustration.vue
    ├── AboutNumbers.vue            # 01 · The gap in numbers
    │   ├── DotGrid.vue             #   "4 in 100"
    │   └── DataBars.vue            #   250 h vs almost none
    ├── AboutProblem.vue            # 02 · The problem (statement, gap words, who it's for)
    ├── AboutGoals.vue              # 03 · What we're doing
    ├── AboutHowItWorks.vue         # 04 · How it works
    ├── AboutCommunity.vue          # 05 · Built with the community
    └── AboutCta.vue                # "See it for yourself." band
```

Sections alternate between the `surface` and `surface-card` backgrounds. The Problem section follows its own notes: one tinted panel, no divider lines, and an auto-fit grid of equal-height boxes. Page-specific type styles (`text-box-title`, `text-gap-word`, `text-stat-title`, `text-stat-giant`) are defined in `assets/main.css`.

#### Example: Translate

The page where a user signs to the camera and reads live subtitles (`/translate`, under `PrimaryLayout`). It is split into small presentational components; the view owns the state and wires them together.

```
features/translate/
├── routes.ts                        # /translate
├── views/TranslateView.vue          # composes everything, owns session + caption size
├── components/
│   ├── TranslateIntro.vue           # title, subtitle, ModelStatus
│   ├── ModelStatus.vue
│   ├── CameraStage.vue              # dark video area (placeholder for now); default slot = camera <video>
│   │   ├── CameraPlaceholder.vue    #   shown until the camera is added
│   │   ├── LiveBadge.vue            #   LIVE / PAUSED
│   │   └── CaptionBar.vue           #   live subtitle bar
│   ├── CameraControls.vue           # Stop/Start, switch camera, full screen
│   ├── TextSizeControl.vue          # A- / A+
│   ├── TranscriptPanel.vue          # card: Copy all, list, signing-now, actions
│   │   ├── TranscriptList.vue
│   │   ├── SigningNowCard.vue
│   │   └── TranscriptActions.vue    #   Download .txt / Clear
├── composables/
│   ├── useCameraSession.ts          # running / model-connected state (placeholder)
│   ├── useCaptionSize.ts            # 22 / 28 / 36px steps
│   └── useTranscriptExport.ts       # copy to clipboard, download .txt
├── stores/transcriptStore.ts        # entries, current line, clear, text export
├── constants/demoTranscript.ts      # sample data shown until the model is connected
└── utils/formatTime.ts              # seconds → mm:ss
```

Status: the UI is complete but runs on placeholder data. To finish the feature:
- Put the camera `<video>` in the default slot of `CameraStage` and replace `useCameraSession` with real `getUserMedia` and model connection handling.
- Feed real predictions into `transcriptStore` instead of `loadDemo()` (called in `TranslateView`).
- Wire the "Switch camera" and "Full screen" buttons (`CameraControls` already emits `switchCamera` and `fullscreen`).

`LoginView` (a feature view) is rendered inside `SecondaryLayout` (core). The view only composes components and talks to the router; form state and validation live in `useLoginForm`.

### Rules

- A feature may import from `core`. `core` must not import from a feature, except `core/router` which registers feature routes.
- Features should not import from each other; move shared pieces to `core`.
- Use the `@/` alias for absolute imports (`@/core/...`); use relative imports inside a feature.
- Only create the subfolders a feature actually uses.

## Static media (`public/`)

Files in `public/` are served as-is from the site root (`public/Videos/x.mp4` → `/Videos/x.mp4`). The demo clip lives in `public/Videos/`:

| File | Purpose |
|---|---|
| `are-you-hungry.mp4` | The clip the site plays: 720x1280 portrait H.264, about 0.5 MB. Referenced by `DEMO_VIDEO` in `core/constants/media.ts`. |
| `are-you-hungry-poster.jpg` | First-frame poster, shown before playback or when the user prefers reduced motion. |
| `PXL_20260901_061002315.TS.mp4` | Original phone recording (HEVC, 10.9 MB). Not referenced by the app. Keep it out of `public/` if you do not want it in builds. |

`core/components/SignVideo.vue` renders a clip (muted, looping, inline) and fills its nearest positioned parent. `fit="cover"` crops it to the box (biased to the lower middle so head and hands stay visible); the default `contain` letterboxes it. Because the clip is a portrait phone recording, the home page shows it in a compact 4:5 box (`HomeDemo`) with the "How it works" steps beside it, not in a wide banner. The Translate page does not use the clip: it shows the dashed camera placeholder until the live camera is added to `CameraStage`.

To add or replace a clip, re-encode it to H.264 at a sensible size (the original HEVC does not play in every browser) and update `DEMO_VIDEO`.

## Icons

We use **Iconify** for icons, and **only** the Material Design Icons (MDI) set (`mdi:` prefix). No other icon sets.
- **Package**: `@iconify/vue` (icons load on demand; add `@iconify-json/mdi` later if we want them bundled offline)
- **Usage**: Import `Icon` from `@iconify/vue` and use `<Icon icon="mdi:icon-name" />`
