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
      // Señales de frescura/prioridad para crawlers y motores generativos (antes solo <loc>).
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/\/+$/, '') || '/';
        if (path === '/') {
          item.priority = 1.0;
        } else if (['/downloads', '/rates', '/substack', '/registro'].includes(path)) {
          item.priority = 0.9;
        } else if (path.startsWith('/news') || path === '/info') {
          item.changefreq = 'daily';
          item.priority = 0.8;
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          /** Evita nombres tipo `autofarm.*.css` en toda la web (un solo CSS compartido). */
          assetFileNames: (assetInfo) => {
            const name = assetInfo.names?.[0] ?? '';
            if (name.endsWith('.css')) {
              return '_astro/site.[hash][extname]';
            }
            return '_astro/[name].[hash][extname]';
          },
        },
      },
    },
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
