# Guía para agentes y contribuidores — L2Titan

Convenciones generales del repo: ver `.cursor/rules/l2titan-core.mdc` (stack Astro 5 + Tailwind 4, `src/` / `public/`, contenido editorial en español, SEO/i18n al tocar copy visible).

## Memoria local (no va al remoto)

La carpeta **`.local/`** está en `.gitignore`. Ahí puedes guardar notas y contexto largo de sesiones (deploy VPS, decisiones SEO, checklist).

- **Sesión / decisiones sueltas:** `.local/agent-memory-l2titan.md`
- **SEO, mapa de URLs, wiki vs landings, navegación y reglas anti-duplicado:** `.local/seo-map-l2titan.md` — **cargar este archivo** cuando el trabajo sea SEO, indexación, sitemap, `/info`, landings, enlaces internos o “¿esta página sobra?”.
- **Auditoría SEO completa (tabla de rutas, hallazgos, checklist):** `.local/seo-audit-completo-2026-05-10.md`.

Quien clone el repo no tendrá esos archivos; son **solo en tu máquina**. Si algo debe vivir para todo el equipo, documentarlo en el repo fuera de `.local/` (sin secretos ni credenciales).
