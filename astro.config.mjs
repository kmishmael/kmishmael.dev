import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  site: 'https://kmishmael.dev',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        name: 'Ginto',
        cssVariable: '--font-ginto',
        provider: "local",
        variants: [
          {
            style: 'normal',
            src: [
              './src/assets/fonts/Ginto-Upright-Variable.woff2',
              './src/assets/fonts/Ginto-Upright-Variable.woff',
            ],
          },
          {
            style: 'italic',
            src: [
              './src/assets/fonts/Ginto-Italic-Variable.woff2',
              './src/assets/fonts/Ginto-Italic-Variable.woff',
            ],
          },
        ]
      },
      {
        name: 'GintoNord',
        cssVariable: '--font-ginto-nord',
        provider: "local",
        variants: [
          {
            style: 'normal',
            src: [
              './src/assets/fonts/Ginto-Nord-Upright-Variable.woff2',
              './src/assets/fonts/Ginto-Nord-Upright-Variable.woff',
            ],
          },
          {
            style: 'italic',
            src: [
              './src/assets/fonts/Ginto-Nord-Italic-Variable.woff2',
              './src/assets/fonts/Ginto-Nord-Italic-Variable.ttf',
            ],
          },
        ]
      }
    ]
  }
});