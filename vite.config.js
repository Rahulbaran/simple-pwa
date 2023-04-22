import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import lightningcss from "vite-plugin-lightningcss";
import { VitePWA } from "vite-plugin-pwa";

import manifest from "./manifest.json";

export default defineConfig({
  build: {
    emptyOutDir: true
  },
  plugins: [
    react(),
    legacy({ targets: ["defaults", "not IE 11"] }),
    lightningcss({
      pseudoClasses: {
        focusVisible: "focus-visible"
      },
      browserslist: [">0.25%", "not dead", "not op_mini all", "not IE 11"],
      drafts: {
        nesting: true
      }
    }),
    VitePWA({
      manifest,
      manifestFilename: "site.webmanifest",
      includeAssets: [
        "favicon.ico",
        "favicon-16x16.png",
        "favicon-32x32.png",
        "apple-touch-icon.png",
        "robots.txt"
      ],
      devOptions: {
        enabled: false
      },
      workbox: {
        globPatterns: [
          "**/*.{js,css,html}",
          "/*.{svg,png,jpg,gif,webp,avif,ico}"
        ],
        sourcemap: true
      },
      registerType: "autoUpdate"
    })
  ],

  server: {
    open: true
  },
  preview: {
    open: true
  }
});
