import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://spotiguess.com', // Remplacez par l'URL de votre site
  integrations: [sitemap()],
});
