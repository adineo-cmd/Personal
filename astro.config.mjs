import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ✅ Check for explicit deployment target
const deployTarget = process.env.DEPLOY_TARGET;
const isGitHubPages = deployTarget === 'github';

const base = isGitHubPages ? '/personal/' : '/';
const site = isGitHubPages 
  ? 'https://adineo-cmd.github.io' 
  : 'https://adineo.neocities.org';

export default defineConfig({
  site: site,
  base: base,
  trailingSlash: 'always',
  integrations: [sitemap()],
  output: 'static',
});