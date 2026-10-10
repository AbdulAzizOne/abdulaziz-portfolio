# Abdulaziz Abu Dhair — Portfolio

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com) v4. Static output, no client framework.

```
src/
  layouts/Layout.astro        <head> (SEO, Open Graph, JSON-LD), header, footer
  components/                 Header, Footer (with contact links), Testimonials, LogoMarquee, ProjectCard, NextProject
  data/projects.ts            Home-page case-study cards (order = display order, numbered 01…)
  data/clients.ts             Client logos, one array per marquee row
  pages/index.astro           Home
  pages/work/*.astro          Case studies (/work/<slug>)
  pages/404.astro
  styles/global.css           Tailwind (theme + utilities) and the site's design tokens
  styles/site.css             Site styles (design tokens at the top)
public/
  assets/img/                 WebP/SVG images, client logos, share (OG) images
  assets/fonts/               Self-hosted Inter, Noto Serif, IBM Plex Mono (WOFF2, latin)
  assets/files/               Résumé PDF
  assets/js/main.js           Mobile menu, header state, footer year, logo marquee, scroll reveal
  favicon.svg  robots.txt  sitemap.xml
vercel.json                   Build settings, clean URLs, security headers, caching, redirects
```

## Develop

Requires Node 22.12+.

```
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs dist/
npm run preview   # serve the build
```

## Styling

- `site.css` holds the existing component styles; it is loaded in Tailwind's `components` layer,
  so Tailwind utilities can override it.
- Tailwind's Preflight reset is **not** loaded — `site.css` has its own reset.
- Design tokens are available as utilities: `bg-bg-alt`, `text-ink-brown`, `text-gold`, `border-line`, …
- `.container` comes from `site.css`; Tailwind's own `container` utility is disabled in `global.css`.

## Common edits

- **Reorder / edit case-study cards:** `src/data/projects.ts`.
- **Add a case study:** add `src/pages/work/<name>.astro` (copy an existing one), an entry in
  `src/data/projects.ts`, a `<url>` in `public/sitemap.xml`, and an OG image in `public/assets/img/`.
- **Client logos:** add the file to `public/assets/img/clients/` and an entry in `src/data/clients.ts`.
- **Resume:** replace `public/assets/files/abdulaziz-abudhair-resume.pdf` with a file of the same name.
- **Removed pages** should get a redirect in `vercel.json` (see the Qetaf example) so old links don't 404.

## Deploy (Vercel)

`vercel.json` sets the framework (Astro), build command and output directory, so pushing to `main`
deploys without dashboard changes. It also enables clean URLs (`/work/alard`), security headers and caching.

The site assumes the domain `https://abdulazizabudhair-portfolio.vercel.app` (`site` in `astro.config.mjs`,
plus `public/robots.txt` and `public/sitemap.xml`). Update those if the domain changes.

## Maintenance notes

- **Content-Security-Policy** (in `vercel.json`) allows the two inline scripts in `src/layouts/Layout.astro`
  by their SHA-256 hash. If you edit either one, regenerate its hash or the script will be blocked.
  `public/assets/js/main.js` is an external file and can be edited freely.
- `compressHTML` is set to `true` in `astro.config.mjs`: Astro 7's default (`"jsx"`) strips whitespace
  between inline elements and would change how text renders.
