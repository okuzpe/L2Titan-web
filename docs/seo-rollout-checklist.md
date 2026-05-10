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
- Layout admite `htmlLang`, `ogLocale`, `defaultVisitorLang` para rutas EN sin `hreflang` falso.

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
