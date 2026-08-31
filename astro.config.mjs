// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://adineo.neocities.org',
  trailingSlash: 'never',
  integrations: [sitemap()],
  output: 'static',
});
