import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Auto-detect if we are building in GitHub Actions
const isGitHubPages = process.env.GITHUB_ACTIONS;

// ⚠️ IMPORTANT: Replace '/personal/' with your actual GitHub repository name
// If your repo is github.com/adineo-cmd/personal, keep it as '/personal/'
const basePath = isGitHubPages ? '/personal/' : '/';
const siteUrl = isGitHubPages ? 'https://adineo-cmd.github.io' : 'https://adineo.neocities.org';

export default defineConfig({
  site: siteUrl,
  base: basePath, // ✅ This fixes the GitHub Pages 404
  trailingSlash: 'always',
  integrations: [sitemap()],
  output: 'static',
});