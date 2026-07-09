# Anand Pipe Agencies

Premium, fully responsive business website for Anand Pipe Agencies built with Next.js App Router and Tailwind CSS, covering PVC, CPVC, UPVC pipes and fittings, bath fittings, tanks and pumps.

## Tech Stack

- Next.js 15
- React 19
- Tailwind CSS 4
- TypeScript
- Heroicons

## Project Structure

```text
.
|-- app
|   |-- globals.css
|   |-- layout.tsx
|   `-- page.tsx
|-- components
|   |-- brand-grid.tsx
|   |-- navbar.tsx
|   `-- reveal-on-scroll.tsx
|-- public
|   |-- anand_logo.png
|   |-- Kohler.png
|   |-- parryware.png
|   |-- jaquar.svg
|   |-- finolex.png
|   |-- ashirvad.png
|   |-- Avonplast.png
|   |-- aquatech.png
|   |-- oxford.svg
|   |-- Gravity.png
|   |-- Neelkund.png
|   |-- Suguna.png
|   |-- piller-pumps.svg
|   |-- leader-pumps.svg
|   |-- texmo.png
|   `-- luxury-bathroom-jacuzzi-hero.png
|-- next.config.ts
|-- next-env.d.ts
|-- package.json
|-- postcss.config.mjs
`-- tsconfig.json
```

## Features

- Sticky premium navbar with logo and scroll shadow
- Elegant hero section with CTA buttons
- Logo-based product category grids with grayscale hover effect
- Showroom section highlighting 3500 sq ft space and live demo experience
- Why Choose Us section with Heroicons
- Contact and location sections with WhatsApp link and Google Maps embed
- SEO-friendly metadata and semantic headings
- Responsive image handling with Next.js `Image`
- Lightweight fade-in scroll reveal animation

## Run Locally

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

This project is configured for static export with GitHub Pages and the custom domain `anandpipes.in`.

1. Push the repository to GitHub.
2. In GitHub, open **Settings > Pages**.
3. Set **Source** to **GitHub Actions**. Do not use **Deploy from a branch**, because that serves the repository files and can show this README instead of the exported website.
4. Push to the `main` branch, or run the **Deploy to GitHub Pages** workflow manually.

The workflow builds the site into `out/` and deploys it to Pages. The Next config currently uses root paths so `https://anandpipes.in/` loads CSS and images correctly.

The `public/CNAME` file keeps GitHub Pages mapped to the custom domain:

```text
anandpipes.in
```

If you temporarily want to use the GitHub project URL `https://vsokks3.github.io/anandpipes/` instead, change the `basePath` fallback in `next.config.ts`, `app/page.tsx`, `components/navbar.tsx`, and `components/brand-grid.tsx` from an empty string to `/anandpipes`, and remove `public/CNAME`.

In Hostinger DNS, point the domain to GitHub Pages:

- `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `CNAME` record for `www`: `<your-github-username>.github.io`

After DNS is set, add `anandpipes.in` in **GitHub repo > Settings > Pages > Custom domain** and enable HTTPS when available.

## Contact Number

Primary phone and WhatsApp number: `+91 7305400590`.
