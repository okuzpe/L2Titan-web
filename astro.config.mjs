// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const legacyRedirectPaths = new Set([
  'https://l2-titan.com/news/valakas-past-event',
  'https://l2-titan.com/news/baium-upcoming-event',
  'https://l2-titan.com/news/castle-conquest-last-saturday',
]);

/** @param {string} page */
function isInfoWikiDetail(page) {
  const pathname = new URL(page).pathname.replace(/\/+$/, '');
  return pathname.startsWith('/info/') && pathname !== '/info';
}

// https://astro.build/config
export default defineConfig({
  site: 'https://l2-titan.com',
  trailingSlash: 'never',
  /** Slugs antiguos de noticias: evita paginas duplicadas y refuerza destino canonico (nginx en prod debe repetir estos 301). */
  redirects: {
    '/news/valakas-past-event': '/news/valakas-26-abril-2026',
    '/news/baium-upcoming-event': '/news/baium-19-abril-2026',
    '/news/castle-conquest-last-saturday': '/news/conquista-castillo-7-marzo-2026',
    // Slugs en inglés → URLs canónicas (evita contenido duplicado; una sola URL por tema)
    '/download': '/downloads',
    '/register': '/registro',
    '/community': '/comunidad',
    '/wiki': '/info',
    '/guides': '/info',
  },
  integrations: [
    sitemap({
      filter: (page) => !legacyRedirectPaths.has(page) && !isInfoWikiDetail(page),
    }),
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
