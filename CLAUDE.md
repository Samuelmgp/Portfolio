# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — dev server on localhost:3000
- `npm run build` — production build to /build
- `npm test` — run tests in watch mode (react-scripts/Jest)
- `npm run deploy` — build and deploy to GitHub Pages via gh-pages

## Architecture

React 19 portfolio site bootstrapped with Create React App. Pure JavaScript (no TypeScript).

### Routing

React Router v7 with flat top-level routes defined in `src/App.js`:
- `/` → Home (ContactCard hero)
- `/experience` → Experience (MUI Timeline of jobs)
- `/projects` → Projects (MUI Timeline of project cards)
- `/resume` → Resume (embedded PDF viewer)

### Key Directories

- `src/pages/` — Route page components (`.js` extension)
- `src/components/` — Reusable UI components (`.jsx` extension)
- `src/assets/` — Static data files and media (profile photo, resume PDF)
- `src/css/` — Component-scoped CSS files

### Data Layer

All data is static — no API calls or database. Project and experience data live in:
- `src/assets/Projects.js` — array of project objects
- `src/assets/WorkExperience.js` — array of employment objects

These are imported directly by their respective page components and rendered via `ProjectCard.jsx` and `EmploymentCard.jsx`.

### Styling

- CSS custom properties for theming defined in `src/css/App.css` `:root` (primary: `#3399ff`, secondary: `#eeff33`, background: `#131313`)
- Plain CSS files per component — no Tailwind, no CSS-in-JS (Emotion is only used by MUI internally)
- MUI `sx` prop used for Timeline component styling
- Responsive breakpoints: mobile (<768px), tablet (769-1024px), desktop (default)

### Canvas Background

`src/Canvas.js` renders an interactive 2D canvas with animated geometric shapes behind all pages. It reads theme colors from CSS custom properties and responds to mouse hover. The canvas element lives in `public/index.html`.

## Git Workflow

- `development` branch for active work
- PRs merged into `main` for deployment
- Deployed to GitHub Pages with custom domain (see `public/CNAME`)
