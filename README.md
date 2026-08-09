# Fine Arts Club — Puducherry Technological University

A fully static, client-side rendered website for the Fine Arts Club of Puducherry Technological University. The site presents the club's exhibitions, workshops, membership, and achievements in an editorial storytelling style.

Built with React 19, Vite 8, Tailwind CSS v4, React Router 7, and Framer Motion — with **zero backend, zero database, and zero runtime third-party services**.

## Quick start

```bash
npm install
npm run dev       # Start the dev server (HMR)
npm run build     # Production build → dist/
npm run preview   # Preview the production build locally
npm run lint      # Run Oxlint
```

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `VITE_FORM_ENDPOINT` | No (pre-deployment) | URL of the form-submission backend (contact, membership, newsletter). When unset, forms return a clear "not live yet" message instead of silently losing submissions. Wire it when the serverless function is deployed. |

Copy `.env.example` to `.env` and fill in values as needed. **Never commit `.env`** — it is gitignored. No secrets exist in this project (TRD §18.5); `VITE_FORM_ENDPOINT` is a public URL only.

## Site origin

The production origin lives in two places and **must be updated together at deployment**:

- `src/lib/seo.jsx` → `SITE_URL` (used by the static `sitemap.xml`; canonical/OG URLs resolve from `window.location.origin` at runtime, so they always match the served domain).
- `public/sitemap.xml` and `public/robots.txt` → hard-coded URLs.

## Deployment requirements (provider-neutral)

The project builds to a fully static `dist/` directory (TRD §16.2) and is compatible with any static host (Netlify, Vercel, GitHub Pages, etc.). Requirements that apply regardless of provider:

1. **Build:** `npm run build` → deploy `dist/`.
2. **SPA routing:** client-side routes (`/about`, `/gallery`, `/events`, `/artwork`, `/team`, `/achievements`, `/membership`) must fall back to `index.html` so deep links and refreshes work. Configure the provider's SPA fallback (e.g. a redirects rule or rewrite) — the exact mechanism differs per platform and is deliberately **not** hard-coded in this repo (deployment neutrality, deferred platform selection).
3. **HTTPS/SSL:** enabled on the host (default on Netlify/Vercel; required for a custom domain).
4. **Form backend:** implement the serverless function (Netlify Functions / Vercel Edge Functions, TRD §18.3) with basic server-side validation and set `VITE_FORM_ENDPOINT` at build/deploy time. Never send form data to client-side-only storage.
5. **Origin URLs:** finalize `SITE_URL` + `public/sitemap.xml` + `public/robots.txt` to the production origin.
6. **Node version:** `Node.js 26` (see `.nvmrc` / `engines`).
7. **Media:** replace placeholder media and finalize `og:image` before launch (content-population phase).

The hosting platform will be selected after the creative redesign, content population, and final QA are complete. No provider-specific configuration files are committed so the project remains portable.

## Architecture

```
src/
  components/
    ui/          Reusable UI primitives (Button, Input, Card, Reveal, ...)
    sections/    Content sections composing primitives + data
    layout/      Navbar, Footer, RootLayout
  pages/         One component per route (lazy-loaded)
  data/          Flat, CSV-ready content datasets (single source of truth)
  lib/           seo.jsx (PageMeta), forms.js (submission adapter), ScrollToTop
  hooks/         useFormSubmit (form interaction state)
public/          index-level static assets (robots.txt, sitemap.xml, favicon)
```

Key conventions (see `docs/` for full detail):

- **Editorial storytelling** is the UX philosophy — every page is a narrative, never a dashboard.
- **Reuse before creating:** shared primitives live in `components/ui/`.
- **Data independence:** content lives in `src/data/`, never inlined in components.
- **Static-first:** no backend, no database, no authentication.
- **No runtime third-party services:** zero form services, zero analytics, zero CDNs beyond Google Fonts.

## Documentation

- `docs/PROJECT_DESCRIPTION.md` — product identity, design OS, architecture principles (Frozen)
- `docs/PRD.md` — product requirements, scope, decisions (Frozen)
- `docs/TRD.md` — technical architecture, components, build & deployment (Frozen)
- `docs/PROJECT_STATUS.md` — living status, known issues, priority backlog (Living)
- `docs/CHANGELOG.md` — change history (Living)

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Oxlint (0 warnings / 0 errors is the bar) |
