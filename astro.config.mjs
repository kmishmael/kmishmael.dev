import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import metaTags from "astro-meta-tags";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), metaTags(), sitemap()],
  site: 'https://kmishmael.dev',
  trailingSlash: 'never',
});