# FaraTech — Base44 Dev Environment

## Overview

FaraTech is a React + Vite + Tailwind CSS website for a technology studio. It has no external dependencies or secrets — everything runs locally.

## Tech Stack

- **Framework:** React 18 + Vite 5
- **Styling:** Tailwind CSS 3
- **Routing:** React Router DOM 6
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

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
