// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://abdulazizabudhair.com",
  // Vercel serves clean URLs (/work/alard) from work/alard.html (see vercel.json).
  trailingSlash: "never",
  build: {
    format: "file",
    // Keep CSS in cacheable files; the CSP only allows hashed inline scripts.
    inlineStylesheets: "never",
  },
  // Lossless whitespace removal. Astro 7's default ("jsx") drops whitespace
  // between inline elements, which changes how running text renders.
  compressHTML: true,
  devToolbar: { enabled: false },
  integrations: [
    // Generates sitemap-index.xml + sitemap-0.xml on every build, so lastmod
    // always matches the deploy. The 404 page is left out.
    sitemap({
      filter: (page) => !page.includes("/404"),
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
