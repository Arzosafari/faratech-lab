# FaraTech — Base44 Dev Environment

## Overview

FaraTech is a React + Vite + Tailwind CSS website for a technology studio. It has no external dependencies or secrets — everything runs locally.

## Tech Stack

- **Framework:** React 18 + Vite 5
- **Styling:** Tailwind CSS 3
- **Routing:** React Router DOM 6
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Manrope (display/body) + JetBrains Mono (utility labels), Google Fonts

## Running the App

```bash
docker compose -f docker-compose.base44.yml up -d --build
```

The app serves on port 3000 (mapped to Vite dev server on 5173 inside the container).

## Architecture

### Data Access Layer

All content is served through typed data access functions in `src/data/`:

- `projects.js` — `getPublishedProjects()`, `getProjectBySlug()`, `getFeaturedProjects()`, `getAdminProjects()`, `createProject()`, `updateProject()`, `publishProject()`, `unpublishProject()`, `deleteProject()`
- `services.js` — `getServices()`
- `team.js` — `getTeamMembers()`
- `aiLab.js` — `getAiLabDemos()`
- `contact.js` — `submitContactRequest()`, `validateContactForm()`

Currently backed by in-memory mock data. To connect a real backend, replace function bodies with API calls — signatures and return shapes stay the same.

### Pages

- `/` — Home
- `/work` — Project portfolio
- `/work/:slug` — Individual project case study
- `/services` — Services detail
- `/about` — About page
- `/team` — Team page
- `/contact` — Contact form
- `/ai-lab` — AI Lab
- `/admin` — Admin dashboard (mock data, no auth)
- `/privacy` — Privacy policy placeholder

### Configuration

Site-wide config (contact info, navigation, CTAs) lives in `src/config/site.js`.

## Design System

The site uses a single dark "monolithic minimalist" theme — deep charcoal surfaces,
hairline dividers, oversized display type, and mono utility labels.

- **Palette tokens** (`tailwind.config.js`): `ink` (page/section surfaces), `mist` (text),
  `ember` (structural accent), `line` / `line-strong` (hairlines), `flare` (warm ambient glow).
- **Typography**: `.display` / `.display-sm` (clamped headline scale), `.label` (mono,
  uppercase, letter-spaced), `.lead` / `.body-text` (secondary copy).
- **Layout**: `.container-content`, `.section` (extreme vertical rhythm), `.card`, `.hairline`,
  `.hero-orb` (ambient gradient sculpture), `.grid-lines`.
- **Shared primitives**: `components/PageHero.jsx` (inner-page header), `components/Reveal.jsx`
  (slow-scroll reveal), `components/Ticker.jsx` (marquee band), `components/Button.jsx`
  (pill variants: `light`, `ember`, `outline`, `ghost`).
- **Accessibility**: a 2px `ember` focus ring with 2px offset applies to every focusable element
  from `index.css`. Keep semantic heading order (`h1` → `h2` → `h3`) even when visual size differs.

Copy is deliberately short (one line per item, no walls of text) — keep it that way when editing
`src/data/*` content.

## Base44 Sandbox Notes

- The Vite dev server adds the sandbox wildcard host through `BASE44_PREVIEW_MODE` (passed as a
  bare Compose environment entry). Unset or any other value → original allowlist behavior.
- `tailwind.config.js` is read once when the dev server boots. Editing it while the container
  runs can leave Tailwind on the old palette (styles 500 with "class does not exist") — restart
  the `web` service after changing the Tailwind config, then confirm `/src/index.css` returns 200.

## What Works vs. What Needs Backend

| Feature | Status |
|---------|--------|
| All public pages | ✅ Working |
| Responsive layout | ✅ Working |
| Contact form validation | ✅ Working |
| Contact form delivery | ❌ Disabled (adapter ready) |
| Admin project CRUD | ✅ Working (mock, in-memory) |
| Admin authentication | ❌ Requires backend |
| Persistent storage | ❌ Requires backend |
| File uploads | ❌ Requires backend |
| AI Lab demos | ❌ Empty state (structure ready) |

## Secrets

No external secrets required. The app runs entirely on local mock data.
