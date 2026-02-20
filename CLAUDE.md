# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — dev server on localhost:3000
- `npm run build` — production build to /dist
- `npm run preview` — preview production build locally
- `npm run deploy` — build and deploy to GitHub Pages via gh-pages

## Architecture

React 19 portfolio site built with **Vite** and **Tailwind CSS v4**. Pure JavaScript (no TypeScript).

### Routing

React Router v7 with flat top-level routes defined in `src/App.jsx`:
- `/` → Home (hero + about + skills)
- `/experience` → Experience (custom timeline)
- `/projects` → Projects (custom timeline)
- `/resume` → Resume (embedded PDF viewer)

### Key Directories

- `src/pages/` — Route page components (`.jsx`)
- `src/components/` — Organized by feature:
  - `ui/` — Card, Badge, SocialIcon, SectionHeading, ExternalLink
  - `layout/` — Layout, Footer, PageWrapper
  - `navigation/` — Navigation, ThemeToggle
  - `background/` — AnimatedBackground (canvas)
  - `timeline/` — Timeline, TimelineItem
  - `home/` — HeroSection, AboutSection, SkillsSection
  - `experience/` — ExperienceCard
  - `projects/` — ProjectCard
- `src/data/` — Static data (profile, social, skills, projects, experience)
- `src/context/` — ThemeContext, BackgroundContext
- `src/hooks/` — useTheme, useBackground
- `src/assets/` — Media files (photo, resume PDF)

### Data Layer

All data is static — no API calls or database. Data lives in `src/data/`:
- `projects.js`, `experience.js`, `skills.js`, `social.js`, `profile.js`

### Styling

- **Tailwind CSS v4** with `@theme` design tokens in `src/index.css`
- Color palette: primary `#3399ff`, secondary `#eeff33`, background `#131313`
- Dark/light mode via class strategy on `<html>` (ThemeContext)
- Glass morphism utility: `glass` class
- No MUI, no CSS-in-JS, no component-scoped CSS files

### Animated Background

`AnimatedBackground.jsx` renders a React-managed canvas with drifting wireframe shapes. Toggleable via BackgroundContext, persisted to localStorage.

## Git Workflow

- `development` branch for active work
- PRs merged into `main` for deployment
- Deployed to GitHub Pages with custom domain (see `public/CNAME`)
