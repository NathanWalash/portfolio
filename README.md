# Developer Portfolio

A custom developer portfolio built as a proper web app project: planned in stages, developed on branches, reviewed between milestones, and protected by basic CI checks.

## Goal

Build a clean, fast, personal developer portfolio that feels custom rather than template-driven. The first version should be simple enough to maintain, but structured well enough to grow over time.

## Planned Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Motion
- Lucide React
- React Router
- Vercel
- GitHub Actions

## Version 1 Scope

- Home page at `/`
- About page at `/about`
- Projects page at `/projects`
- Project detail route at `/projects/:slug`
- Static local project and skills data
- Responsive layout
- shadcn/ui buttons, cards, badges, and tabs
- Subtle Motion animations
- GitHub and live demo links
- `mailto:` contact call to action
- Vercel deployment

Out of scope for version 1:

- Backend contact form
- Authentication
- Database
- CMS
- Blog
- Docker
- Complex global state management

## Working Process

Development should happen in small, reviewable branches. `main` stays stable.

Suggested branch order:

1. `docs/project-roadmap`
   - Track the project brief.
   - Clean up documentation.
   - Define workflow, scope, and setup steps.

2. `chore/bootstrap-vite`
   - Scaffold the Vite React TypeScript app.
   - Install Tailwind CSS.
   - Initialize shadcn/ui.
   - Add React Router, Motion, and Lucide React.

3. `chore/ci`
   - Add GitHub Actions.
   - Run install, lint, typecheck, tests, and build.
   - Keep test setup lightweight.

4. `feature/app-shell`
   - Add app routes.
   - Add navbar and footer.
   - Establish layout structure.

5. `feature/project-data`
   - Add project and skills data models.
   - Add initial placeholder portfolio content.

6. `feature/home-page`
   - Build the home page sections.
   - Add featured projects, skills preview, about preview, and contact CTA.

7. `feature/projects-pages`
   - Build projects grid.
   - Add filter tabs.
   - Add project detail pages.

8. `feature/about-page`
   - Build the about page.
   - Add story, focus areas, values, and contact links.

9. `polish/responsive-animation`
   - Refine responsive layouts.
   - Add tasteful animations.
   - Run an accessibility and visual polish pass.

10. `deploy/vercel`
    - Deploy to Vercel.
    - Document deployment details.

## Local Setup

Requires Node.js `22.12+`.

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local URL printed by Vite, usually:

```txt
http://localhost:5173/
```

Current quality checks:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

For watch mode while developing:

```bash
npm run test:watch
```

## Continuous Integration

GitHub Actions runs the same quality checks on pushes and pull requests:

```bash
npm ci
npm run lint
npm run typecheck
npm test
npm run build
```

## Documentation

The main planning brief lives in:

```txt
developer-portfolio-project-decisions.md
```

That file is the source of truth for the version 1 product direction until implementation decisions are captured directly in the codebase.
