import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://xpetl047.github.io',
  base: '/styleguide_projekt',
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 500,
      },
    },
  },
});
