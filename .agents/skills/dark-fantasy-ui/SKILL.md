---
name: dark-fantasy-ui
description: Refactoriza interfaces Astro/Tailwind con identidad Dark Fantasy premium para L2Titan. Usar cuando se pidan mejoras de diseño, unificación visual, refinamiento de CTA/cards/tabs o consistencia UX en paginas y componentes.
---

# Dark Fantasy UI

## Objetivo
Aplicar una identidad Dark Fantasy hibrida (inmersiva + usable) sin romper SEO, i18n ni estructura del proyecto.

## Flujo recomendado
1. Auditar seccion objetivo y detectar duplicacion de clases.
2. Mapear estilos a tokens y clases `df-*` en `src/styles/global.css`.
3. Reutilizar primitivas (`ActionButton`, `CardSurface`, `BadgePill`, `SectionHeading`).
4. Estandarizar estados interactivos (active/inactive/focus/hover) con clases explicitas.
5. Verificar responsive y contraste antes de cerrar.

## Reglas de diseño
- Base visual: fondos oscuros + acentos dorados + brillo moderado.
- Evitar mezclar muchas variantes visuales en una misma seccion.
- Mantener maximo 1 CTA primario por bloque y secundarios claros.
- Priorizar legibilidad: espaciado consistente, texto de apoyo en `text-gray-300/400`.
- Preservar contenido editorial en espanol; ingles tecnico solo donde ya exista.

## Checklist rapido
- [ ] Se redujo duplicacion de clases largas en markup.
- [ ] Se usaron componentes/primitivas en lugar de repetir estilos.
- [ ] No se tocaron archivos generados.
- [ ] `npm run build` o lints sin errores nuevos.
