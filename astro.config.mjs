import { defineConfig } from "astro/config";
import icon from "astro-icon";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  site: "https://enrique-calero.netlify.app",
  devToolbar: {
    enabled: false
  },
  integrations: [icon(), react(), sitemap(), mdx(), purgecss()],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      langs: [],
      wrap: true,
      transformers: [],
    },
  }
});