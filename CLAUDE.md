# AnandPipes

Static marketing site for Anand Pipe Agencies (Erode, TN). Deployed to GitHub Pages.

## Stack

| Layer | Tool |
|-------|------|
| Framework | Next.js 15 — App Router, `output: "export"` |
| UI | React 19 + TypeScript 5 (strict) |
| Styling | Tailwind CSS 4 + PostCSS |
| Hosting | GitHub Pages via `out/` static export |
| Tests | None |

## Commands

```bash
npm run dev          # dev server (localhost:3000)
npm run build        # static export → out/
npm run lint         # next lint
npx tsc --noEmit     # type-check without emitting
```

## Directory map

```
app/            layout.tsx · page.tsx · globals.css
components/     navbar.tsx · brand-grid.tsx · reveal-on-scroll.tsx
public/         images + CNAME (anandpipes.in)
.github/workflows/deploy-pages.yml   CI: Node 20, npm ci + build → Pages
```

## Key conventions

- **Imports**: use `@/*` alias (maps to repo root); avoid relative `../../` paths.
- **Components**: kebab-case filenames. Client components need `"use client"`.
- **basePath**: controlled by `NEXT_PUBLIC_BASE_PATH`. Propagate changes to `next.config.ts`, `app/page.tsx`, `components/navbar.tsx`, `components/brand-grid.tsx`.
- **Images**: `images.unoptimized: true` is required for static export — do not remove.
- **Static only**: no server features (`getServerSideProps`, API routes, middleware) — incompatible with `output: "export"`.

## Constraints — never do these

- Change `output`, `trailingSlash`, or `images.unoptimized` in `next.config.ts` without confirming it won't break the Pages deploy.
- Modify `public/CNAME` without explicit user confirmation of domain change.
- Add server-only Next.js features.
- Push to remote or open PRs without user confirmation.

## Workflow

1. Read only files relevant to the task — avoid loading the full codebase.
2. Prefer targeted `Edit` over full rewrites.
3. After edits that touch TypeScript, run `npx tsc --noEmit` to confirm no type errors.
4. After edits that touch layout or styles, confirm with `npm run build` that the static export succeeds.
5. Lint check: `npm run lint` before marking any UI task done.
