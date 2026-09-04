# Rishabh Gupta — Portfolio

A production-ready personal portfolio website built with Next.js (App Router), TypeScript, and Tailwind CSS.

Live sections: Hero, About, Experience (internships), Case Files (projects), Education, Certifications, Capabilities, and Contact — plus a dedicated case-study page per project at `/projects/[slug]`.

## Tech stack

- **Framework:** Next.js 16 (App Router, TypeScript, React 19)
- **Styling:** Tailwind CSS v4, self-hosted fonts (`@fontsource/fraunces`, `@fontsource/inter` — no external font requests at runtime)
- **Content:** structured data files under `src/data/`, not hardcoded in components
- **Deployment target:** Vercel (static-friendly — every route is prerendered at build time)

## Project structure

```
src/
  app/                    Routes (App Router)
    page.tsx              Home page — assembles all sections
    layout.tsx             Root layout, global <head> metadata
    projects/[slug]/       Dynamic case-study route
    sitemap.ts, robots.ts  SEO file conventions
    not-found.tsx           404 page
    globals.css             Design tokens (colors, fonts) + Tailwind
  components/              Presentational + section components
  data/                    Content: profile, experience, projects, education,
                            certifications, nav — edit these to update the site
public/
  images/                  Optimized portrait + OG image (JPG + WebP)
  documents/               Downloadable résumé + certificate PDFs
  favicon.svg
```

### Editing content

All copy lives in `src/data/*.ts`. To update a project, an internship, a certification, or the résumé link, edit the relevant data file — no component code needs to change. Every project detail page is generated automatically from `src/data/projects.ts` via `generateStaticParams`.

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

`npm run build` prerenders every route (home + all project case files) as static HTML — verified locally with zero TypeScript errors, zero ESLint errors, and zero external network requests (fonts and images are self-hosted).

## Deploying to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. In Vercel, "Add New Project" → import the repository. Vercel auto-detects Next.js — no configuration needed.
3. Build command: `next build` (default). Output: managed automatically by the Next.js framework preset.
4. No environment variables are required — the site has no backend, database, or third-party API keys.
5. Deploy. Every push to the default branch redeploys automatically.

### Custom domain / metadata

Before going live, update `siteUrl` in `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts` to your real production domain (currently a placeholder: `https://rishabhgupta.example.com`).

## Notes

- No secrets, API keys, or personal Vercel account details are stored in this repository.
- The résumé and certificate PDFs under `public/documents/` are the candidate's own documents, included so visitors can view/download them directly.
- Reduced-motion and keyboard-focus styles are respected throughout (see `globals.css`).
