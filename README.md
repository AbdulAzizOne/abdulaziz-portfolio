# Abdulaziz Abu Dhair — Portfolio

Static HTML/CSS/JS site. No build step, no dependencies.

```
index.html                  Home (hero, clients, 5 case-study cards, beyond design, testimonials, contact)
work/crpton.html            Case study 01 (full write-up; the home page only links here)
work/vbooking-community.html  Case study 02
work/zenraise.html          Case study 03
work/vbooking-turbo-suite.html  Case study 04
work/alard.html             Case study 05
404.html
assets/css/styles.css       All styles (design tokens at the top)
assets/js/main.js           Mobile menu, footer year, scroll reveal
assets/img/                 WebP images at 1x/2x, client logos (WebP), share (OG) images
assets/fonts/               Self-hosted Inter, Noto Serif, IBM Plex Mono (WOFF2, latin)
assets/files/               Résumé PDF
favicon.svg  robots.txt  sitemap.xml  vercel.json
```

## Deploy to Vercel

**Option A — GitHub:** push this folder to a repo, then on vercel.com choose *Add New → Project*, import the repo,
set Framework Preset to **Other**, leave Build Command and Output Directory empty, and deploy.

**Option B — CLI:** from this folder run `npx vercel` (preview) and then `npx vercel --prod`.

`vercel.json` enables clean URLs (`/work/alard` instead of `/work/alard.html`), security headers and asset caching.

## Before going live

The site assumes the domain `https://abdulazizabudhair-portfolio.vercel.app`. If your Vercel URL or custom domain is different,
find-and-replace that string in `index.html`, `work/*.html`, `robots.txt` and `sitemap.xml`
(it is used for canonical links, Open Graph images and the sitemap).

## Local preview

Any static server works, e.g. `ruby -run -e httpd . -p 4321` and open http://localhost:4321.
Clean URLs only work on Vercel; locally open `work/alard.html` etc. directly.

## Maintenance notes

- **Content-Security-Policy** (in `vercel.json`) allows the two inline `<script>` tags by their SHA-256 hash.
  If you edit either inline script, the hash must be regenerated or the script will be blocked.
  External scripts in `assets/js/` are fine to edit freely.
- **Résumé:** replace `assets/files/abdulaziz-abudhair-resume.pdf` with a file of the same name — the link stays the same.
- **New case study:** add `work/<name>.html` (copy an existing one), a card on the home page, a `<url>` in `sitemap.xml`,
  and an OG image in `assets/img/`.
- **Removed pages** should get a redirect in `vercel.json` (see the Qetaf example) so old links don't 404.
