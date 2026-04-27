# Copilot instructions for this repository

Purpose: guide future Copilot sessions to quickly understand how to build, run, and reason about this Next.js static site.

## Build, test, and lint commands
- Install deps: `npm install` or `npm ci` (CI)
- Dev server: `npm run dev` → starts Next.js app (App Router in `app/`).
- Build (static export): `npm run build` → repository uses `next.config.ts` with `output: "export"` so the build emits a static `out/` export used for GitHub Pages.
- Start (production server for exported site): `npm run start` (if used).
- Lint: `npm run lint` (delegates to `next lint`).
- Tests: none configured in package.json. There is no test runner or test scripts to run. If tests are added, include `npm run test` and document how to run a single test.

Notes:
- GitHub Actions workflow `Deploy to GitHub Pages` (uses Node 20) runs `npm ci` and `npm run build` and uploads `out/`.

## High-level architecture (big picture)
- Framework: Next.js (App Router) + React + TypeScript + Tailwind CSS.
- Routing/Pages: `app/` contains layouts and page entrypoints (App Router patterns, server components by default).
- UI primitives: `components/` holds reusable components (e.g., navbar, brand-grid, reveal-on-scroll).
- Static assets: `public/` contains images, CNAME for GitHub Pages domain mapping.
- Build target: `next.config.ts` sets `output: "export"`, `trailingSlash: true`, and configures `basePath`/`assetPrefix` via env var NEXT_PUBLIC_BASE_PATH to support hosting at a subpath (e.g., `/$REPO_NAME` for GitHub Pages).
- Images: `images.unoptimized = true` in config — the app uses Next Image but expects unoptimized/static behavior for exported site.
- Deployment: GitHub Actions workflow builds into `out/` and uses the Pages deploy action to publish the static site.

## Key repository conventions (project-specific)
- App Router (app/) is the source-of-truth for routing and layout; prefer placing pages and page-level metadata there.
- basePath handling: runtime/CI can set NEXT_PUBLIC_BASE_PATH. When deploying to a non-root path (e.g., GitHub Pages project site), set this env var or change the fallback in `next.config.ts` and the components that construct links (`app/page.tsx`, `components/navbar.tsx`, `components/brand-grid.tsx`).
- Static export expectations: code assumes static export (`out/`) with root-relative asset references. Do not introduce server-only APIs unless they are guarded from static export.
- Public assets/CNAME: `public/CNAME` is used to map the Pages custom domain. If switching to the GitHub project URL, remove `public/CNAME` and set `basePath` to `/anandpipes` (or the repo name).
- Images: because `images.unoptimized = true`, external image optimization is disabled — image handling is static and compatible with exported sites.
- Naming: components use kebab-case file names (e.g., `brand-grid.tsx`, `reveal-on-scroll.tsx`). Keep consistency for new components.
- TypeScript: strict mode enabled (`tsconfig.json`), `@/*` path maps to repo root — use absolute imports with that alias where convenient.

## CI / Workflow notes (important for automation)
- Workflow: `.github/workflows/deploy-pages.yml` runs on push to `main`/`master` and on manual dispatch; it checks out, sets up Node 20, runs `npm ci`, `npm run build`, and uploads `out/` to Pages.
- When modifying build behavior, update workflow if new build steps or environment variables are required (e.g., NEXT_PUBLIC_BASE_PATH).

## Files and places Copilot should inspect first
- next.config.ts — explains static export, basePath, and image behavior.
- app/ — main App Router pages and layout.
- components/ — reusable UI and link construction (affects basePath handling).
- public/ — static assets including CNAME.
- package.json — scripts used by CI and local dev.
- .github/workflows/deploy-pages.yml — CI/CD flow and Node version.

## AI/assistant integration files
Checked for common assistant config files (CLAUDE.md, AGENTS.md, .cursorrules, AIDER_CONVENTIONS.md, etc.) — none present in the repository. Add integration notes here if such files are added later.

---

If Copilot is asked to make changes that affect routing, deployment, or public assets, prioritize verifying:
- basePath and assetPrefix usage and consistency across next.config.ts and components that build URLs
- presence/absence of public/CNAME when changing target domain
- that `images.unoptimized` and `output: "export"` remain consistent with static export goals

(End of Copilot instructions)
