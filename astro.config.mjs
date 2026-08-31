import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Detect deployment target
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const base = isGitHubPages ? '/personal/' : '/';
const site = isGitHubPages 
  ? 'https://adineo-cmd.github.io' 
  : 'https://adineo.neocities.org';

export default defineConfig({
  site: site,
  base: base,  // ✅ This is the key fix
  trailingSlash: 'always',
  integrations: [sitemap()],
  output: 'static',
});