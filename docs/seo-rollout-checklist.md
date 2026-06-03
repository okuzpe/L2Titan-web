# SEO Rollout Checklist

## Hecho en codigo

- Canonicals sin slash final en metadatos y sitemap.
- `hreflang` automatico eliminado hasta tener rutas reales por idioma.
- Landings indexables creadas para `rates`, `enchant`, `vip`, `events`, `instances`, `sieges`, `economy`, `features` y `commands`.
- Hub dedicado **SubStack** en [`/substack`](https://l2-titan.com/substack) (**principal, español / público hispanohablante**) y [`/en/substack`](https://l2-titan.com/en/substack) (**resumen EN opcional** para busqueda internacional): FAQ + JSON-LD, CTAs Descargas/Discord, enlaces internos desde navbar, footer, home e info Features.
- Home, `downloads` y `rates` con `FAQPage`.
- Noticias con slugs mas claros, fechas absolutas y pagina indice en `/news`.
- Configuracion nginx versionada en `ops/nginx/l2-titan.conf` (301 a slugs de noticias antiguas, `/favicon.ico` sirve el SVG, `/sitemap.xml` redirige al indice).
- `astro.config.mjs` define `redirects` para los mismos slugs legacy (util si el hosting no usa nginx).
- Layout admite `htmlLang`, `ogLocale`, `defaultVisitorLang` para rutas EN.
- **hreflang activo**: las parejas ES↔EN (home, faq, downloads, substack, about) emiten `hreflang es/en/x-default` desde `Layout.astro` cuando la página pasa `alternateLocalePath`. `x-default` siempre apunta a la versión ES. (Nota histórica: antes no había rutas EN reales; ahora sí, por eso el hreflang es legítimo y no falso.)

## GEO (motores generativos: ChatGPT/GPTBot, Claude/ClaudeBot, Perplexity, AI Overviews)

- **Contenido server-rendered**: todo el texto (rates, FAQ, tablas, openers) se hornea en el HTML estático en build vía `translate()`; `data-i18n` solo conmuta idioma en runtime. Los crawlers AI que ignoran JS ven los datos completos.
- **`public/llms.txt`**: guía curada para LLMs (resumen, datos clave del servidor, páginas principales, `Sitemap:`). `robots.txt` añade stanzas `Allow` explícitas para GPTBot/ClaudeBot/PerplexityBot/Google-Extended/etc. `ops/nginx/l2-titan.conf` sirve `/llms.txt` como `text/plain`.
- **JSON-LD ampliado** (`src/utils/seo.ts`): `VideoGame` (image, inLanguage, publisher), `Organization` (contactPoint Discord, `sameAs` con listados externos), `SoftwareApplication` (fileSize 2.8 GB, screenshot), `Article` de noticias (dateModified vía `updatedAt`, inLanguage, articleSection), `ItemList` en `/news`, `AboutPage` en `/about`.
- **Frases citables (`factOpener`)**: cada landing de `/info` muestra una frase declarativa con los números concretos antes de las tablas (clave i18n `info.landings.topics.<slug>.factOpener`).
- **FAQPage en todas las landings**: helper `buildLandingTopicFaq(lang, topicSlug)` lee `faq1q..faq3a` por tema (ES+EN). Home FAQ ampliado a 5 pares autocontenidos.
- **Paridad EN completa de landings**: cada tema de `/info` tiene gemela inglesa indexable en `/en/<topic>` (rates, enchant, vip, events, instances, sieges, economy, features, commands, autofarm, olympiad, raidbosses), con `hreflang` ES↔EN automático desde `InfoLandingLayout` (detecta `/en` en `canonicalPath`). 48 URLs en sitemap.
- **Página de entidad `/about`** (ES+EN) con identidad del operador. **Pendiente operador**: rellenar los `TODO(operador)` (fecha de lanzamiento, quién administra) en `translations.ts` y descomentar `foundingDate`/`datePublished`/`softwareVersion` en `seo.ts`.
- **Sitemap**: `lastmod`/`changefreq`/`priority` por URL (antes solo `<loc>`).

### Decisión intencional — NO revertir
- **`/info/[slug]` es `noindex` y está excluido del sitemap** (`isInfoWikiDetail` en `astro.config.mjs`). Es deduplicación canónica deliberada: las landings `/rates`, `/economy`, … (mismo componente `Tab*`, `InfoLandingLayout`) son las versiones canónicas, indexables y ricas. `/info/<slug>` es la vista wiki con `canonicalPath` apuntando a la landing. No quitar el `noindex` ni el filtro: duplicaría contenido.

## Verificacion post-deploy (indexacion y prod)

1. **`site:l2-titan.com`** en Google y busqueda de marca (`l2 titan`, `l2titan`). Si no hay resultados, revisar cobertura en Search Console.
2. **Respuestas HTTP** (ultima comprobacion automatizada 2026-05-10): `https://l2-titan.com/robots.txt` y `sitemap-index.xml` respondieron **200** con cuerpo valido. Comprobar de nuevo tras cada deploy.
3. **www**: si `https://www.l2-titan.com/` no redirige 301 al apex, alinear con `ops/nginx/l2-titan.conf` o revisar CDN.
4. **Bing Webmaster Tools**: enviar el mismo sitemap que en Google.

## Pendiente manual despues del deploy

1. Publicar la nueva configuracion nginx y verificar redirects `301`:
   - `/rates/` -> `/rates`
   - `/downloads/` -> `/downloads`
   - `/news/` -> `/news`
2. Validar cabeceras reales en produccion:
   - `Cache-Control` largo para `/_astro/*`
   - compresion `gzip` activa para HTML, CSS y JS
3. Subir sitemap a **Google Search Console** y **Bing Webmaster Tools**.
4. Solicitar reindexacion manual de:
   - `/`
   - `/substack`
   - `/en/substack`
   - `/downloads`
   - `/rates`
   - `/features`
   - `/instances`
   - `/news`
5. **Listados externos** (HopZone, TopZone, L2Network, Top100Arena, L2JBrasil, L2HopZone, etc.):
   - Texto que mencione **SubStack**, **Interlude**, **x25**, temporada activa y **comunidad en español** cuando aplique.
   - URL por defecto para jugadores y promos hispanas: **`https://l2-titan.com/substack`**. Reservar **`https://l2-titan.com/en/substack`** solo para listados o anuncios explicitamente en ingles.
   - En el resto de casos puede seguir el dominio principal.
6. **Canales de descubrimiento**: hilos en foros/comunidades L2 segun normas; Discord con enlace visible al hub SubStack (mensaje fijado o bienvenida); redes con publicaciones recurrentes.
7. **Bucle Search Console (CTR / intencion)** cada 2-4 semanas:
   - Informe Rendimiento: filtrar queries que contengan `lineage`, `l2`, `substack`, `private server`, `interlude`.
   - Priorizar URLs con muchas **impresiones** y **CTR bajo** frente a la posicion media.
   - Ajustar `title` y meta `description` del hub para alinear snippet con intencion. Referencia: [metricas GSC](https://support.google.com/webmasters/answer/7042828).
8. Revisar snippets indexados viejos que todavia muestren `30x` y forzar nueva inspeccion.

## Documentacion Google (seguimiento)

- RSS de novedades Search Central: `https://developers.google.com/search/updates/search_docs_updates.rss`

## Riesgos abiertos

1. Optimizar imagenes pesadas de noticias y hero antes del siguiente deploy grande.
2. Revisar Search Console durante 2-4 semanas para medir impresiones en keywords como:
   - `lineage 2 interlude private server`
   - `servidor lineage 2 substack`
   - `l2 interlude servidor español`
   - `l2 substack server`
   - `lineage 2 substack`
   - `l2 interlude rates`
   - `l2 interlude autofarm`
   - `lineage 2 interlude daily instances`
3. **Core Web Vitals**: revisar en GSC / PageSpeed las URLs `/`, `/substack`, `/downloads`; el hub SubStack evita hero pesado para favorecer LCP.
