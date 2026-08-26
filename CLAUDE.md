# CLAUDE.md

Personal portfolio site for Nathan Walsh. Live at https://nathanwalsh.me
(Vercel, auto-deploys `main`; PRs get preview deploys).

## Stack

Vite + React 19 + TypeScript + Tailwind 4 + shadcn/ui + Motion + React Router.
Node 24 in CI; `engines` allows >= 22.12.

## Commands

```bash
npm run dev        # vite dev server, usually :5173
npm run lint       # eslint
npm run typecheck  # tsc -b
npm test           # vitest run
npm run build      # tsc -b && vite build
```

CI runs all four on every push and PR. Run all four before opening a PR.

## Content lives in data files, not JSX

`src/data/` is the source of truth for everything the site says:

- `profile.ts` — name, title, summary, highlights, socials
- `projects.ts` — every project and its case-study fields
- `skills.ts` — skill groups

Change copy there, not in the components. If a component hardcodes content
that belongs in a data file, that is a bug worth fixing rather than following.

## Adding a project category

`projectCategories` in `projects.ts` drives the filter tabs on `/projects`
automatically. It also keys `visualStyles` in
`src/components/projects/ProjectVisual.tsx`, which is looked up **unguarded**:

```ts
const visual = visualStyles[project.category]
```

A new category without a matching `visualStyles` entry is a runtime crash on
the projects page. Always update both together.

## Animation and reduced motion

All animation is JS-driven through Motion. The `prefers-reduced-motion` block
in `index.css` only affects CSS `animation-duration` / `transition-duration`,
so it does **not** cover Motion animations. Any new animated component must
call `useReducedMotion()` and branch explicitly, the way `TiltCard`,
`TypewriterText`, and `ScrollProgress` do.

## Headings inside cards

`CardTitle` renders a `<div>`, not a heading element. Every call site passes
`role="heading"` with an explicit `aria-level` to place it correctly in the
document outline. Keep doing this, and pick the level that matches the
surrounding page structure.

## Testing

One integration test file, `src/App.test.tsx`, renders the app across routes.
It touches `localStorage` via `ThemeToggle`, which is guarded — leave the
guard in place, since Node 24+ exposes a `localStorage` global that is
undefined unless `--localstorage-file` is passed.

## Workflow

`main` stays deployable. Work on a branch named for the change
(`content/...`, `feature/...`, `fix/...`, `polish/...`, `docs/...`), open a
PR, let CI pass, check the Vercel preview, then merge.

## Git identity

This repo lives under `~/Personal/`, so commits are stamped with the personal
email automatically. Pushing needs the personal GitHub account to be active:
`gh personal && git push && gh work`, or the `gpush` helper. See
`~/Personal/README.md`.
