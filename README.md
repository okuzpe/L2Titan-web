# L2Titan - Lineage 2 Interlude Server Website

Este es el sitio web oficial para el servidor L2Titan, construido con Astro y Tailwind CSS.

## Requisitos Previos

- Node.js (v18 o superior)
- npm (incluido con Node.js)

## Instalación

1.  Abre una terminal en la carpeta del proyecto.
2.  Instala las dependencias:

```bash
npm install
```

## Desarrollo

Para iniciar el servidor de desarrollo y ver los cambios en tiempo real:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`.

## Producción

Para construir la versión final del sitio (optimizada):

```bash
npm run build
```

Los archivos generados estarán en la carpeta `dist/`.

## Estructura del Proyecto

- `src/pages`: Páginas del sitio (Home, Descargas, About).
- `src/components`: Componentes reutilizables (Navbar, Footer, Stats, News).
- `src/layouts`: Plantilla principal.
- `public/images`: Imágenes estáticas (Fondo, Noticias).
