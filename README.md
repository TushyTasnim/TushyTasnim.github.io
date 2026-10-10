# Tushy Tasnim — Academic Portfolio

A light, single-page academic portfolio built with Next.js 14 (App Router) and
Tailwind CSS, for graduate school applications, professor outreach, and
research visibility. Layout is inspired by prakharrathi25.netlify.app, restyled
with an academic-press theme (warm ivory paper, deep navy ink, muted
burgundy + slate-blue accents, Fraunces/IBM Plex type) suited to an industrial
engineering / supply chain profile. Every section carries a persistent grid
texture and blueprint-style corner marks, alternating between the two accent
colors. All color tokens live in `tailwind.config.ts` — swap the hex values
there to re-theme the whole site. Every ink and accent token clears WCAG AA
(4.5:1) against both the page and card backgrounds.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Instant preview (no install)

`preview.html` is a self-contained static mirror of the same design — open it
directly in a browser, or run:

```bash
node preview-server.mjs
```

then open `http://localhost:4173`.

## Build

```bash
npm run build
npm run start
```

## Deploy

### Vercel
1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Keep the default Next.js settings.
4. Deploy.

### Netlify
1. Push this folder to a GitHub repository.
2. Import the repository in Netlify.
3. Set build command to `npm run build`.
4. Set publish directory to `.next`.
5. Deploy with the Netlify Next.js runtime.

## Edit content

Everything on the page — bio, education, publications, projects, experience,
skills, news, awards, and contact info — lives in `data/portfolio.ts`. Edit
that one file and every section updates automatically. If you edit it, mirror
the same change in `preview.html` to keep the static preview in sync.

**Before sending this to anyone, update the placeholders in
`data/portfolio.ts`:**
- `profile.cvUrl` — link to your CV/resume PDF.
- `profile.links.scholar` / `linkedin` / `github` — currently `"#"`.

## Structure

```
app/
  layout.tsx      fonts (Fraunces, IBM Plex Sans/Mono) + metadata
  page.tsx         assembles all sections
  globals.css      base light theme styles
components/        one component per section (Hero, About, Education, ...)
data/
  portfolio.ts     all content — single source of truth, incl. mlProjects
preview.html       static, dependency-free mirror for quick viewing
```

## Animations

`components/Reveal.tsx` fades + rises each section's content in as it
scrolls into view (IntersectionObserver, plays once). `components/CountUp.tsx`
animates the award count in Leadership & Service. The hero and the "TT"
monogram play a one-time staggered entrance on load. `components/ScrollProgress.tsx`
draws a thin copper-to-teal progress bar at the top of the page as you scroll,
and `components/Nav.tsx` highlights the nav link for the section currently in
view. The hero has two very low-opacity, slowly drifting glow blobs behind
the grid pattern for a bit of ambient depth. All motion respects
`prefers-reduced-motion`.

## Pictures

- `public/images/headshot.jpeg` — real headshot, used in the hero
  (`components/Hero.tsx`, via `next/image`) in place of the old generated
  "TT" monogram.
- `public/images/projects/dust-detection.jpg` and
  `public/images/projects/portable-dishwasher.jpg` — real prototype photos
  for the two hands-on engineering projects. `components/ProjectIllustration.tsx`
  still holds the original blueprint-style SVG diagrams as a fallback (used
  automatically by `components/Projects.tsx` for any project without an
  `image` in `data/portfolio.ts`). The Cafeteria Efficiency project was
  removed from the list entirely (no photo, project retired).
- `public/images/projects/dengue-dashboard.jpg` and
  `public/images/projects/hotel-dashboard.png` — real screenshots for 2 of
  the Data & ML Projects cards; the rest use GitHub's auto-generated Open
  Graph preview image for the repo.
- `public/images/certificates/aspire-leaders.png` and
  `public/images/certificates/iscea-csca.jpg` — certificate scans, linked as
  "View certificate" from the matching News and Leadership & Service entries
  (via each item's optional `certUrl` in `data/portfolio.ts`).

To swap any of these for a different image, replace the file in
`public/images/` (keeping the same filename) or update the path in
`data/portfolio.ts` — then mirror the change in `preview.html`.

## Data & ML Projects

`data/portfolio.ts` → `mlProjects` lists Tushy's own data science, ML, and
BI-dashboard projects, pulled from
[github.com/TushyTasnim](https://github.com/TushyTasnim). Two of the
dashboard cards (Dengue, Hotel) use real screenshots checked into
`public/images/projects/`; the rest fall back to GitHub's auto-generated
Open Graph preview image for the repo. (The Hospital repo's own screenshot
was an unfinished wireframe mockup, so that card uses the GitHub preview
too — swap in a real one if a better screenshot becomes available.) To
refresh this list from GitHub later, fetch
`https://api.github.com/users/TushyTasnim/repos` and update the array —
remember to mirror the change in `preview.html`.
