// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://abdulazizabudhair-portfolio.vercel.app",
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
  vite: {
    plugins: [tailwindcss()],
  },
});
