// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://l2-titan.com',
  trailingSlash: 'never',
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      proxy: {
        '/status': {
          target: 'https://l2-titan.com',
          changeOrigin: true,
        }
      }
    }
  }
});