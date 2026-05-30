export interface NewsItem {
  slug: string;
  legacySlugs?: string[];
  title: string;
  titleKey: string;
  publishedAt: string;
  dateLabel: string;
  summary: string;
  summaryKey: string;
  content: string;
  contentKey: string;
  image: string;
  /** Derivado estrecho para listados (srcset); opcional. */
  imageCard?: string;
}

export const news: NewsItem[] = [
  {
    slug: 'infinitum-tower-l2day',
    title: 'Infinitum Tower y letras L2 Day ya visibles en la web',
    titleKey: 'news.items.infinitumTower.title',
    publishedAt: '2026-05-03',
    dateLabel: '3 de mayo de 2026',
    summary: 'La web ahora muestra la daily nueva de letras, su acceso real con .daily enter 2 y los cambios de Paul Merchant.',
    summaryKey: 'news.items.infinitumTower.summary',
    content: 'Se alineo la informacion publica con la configuración real del servidor: Infinitum Tower aparece como daily activa, se explican las letras L2 Day y se aclaran los cambios de Paul Merchant para armas, sets, escudos y joyas A-grade.',
    contentKey: 'news.items.infinitumTower.content',
    image: '/images/infinitum-tower.webp',
    imageCard: '/images/infinitum-tower-card.webp',
  },
  {
    slug: 'valakas-26-abril-2026',
    legacySlugs: ['valakas-past-event'],
    title: 'Valakas del 26 de abril de 2026: resultado del evento especial',
    titleKey: '',
    publishedAt: '2026-04-26',
    dateLabel: '26 de abril de 2026',
    summary: 'Resumen del evento especial de Valakas celebrado el 26 de abril de 2026 en L2Titan.',
    summaryKey: '',
    content: 'El evento especial de Valakas del 26 de abril de 2026 queda registrado en la web como referencia reciente de la temporada. Esta entrada ayuda a mostrar actividad real del servidor, continuidad de eventos y movimiento de clanes dentro del calendario competitivo.',
    contentKey: '',
    image: '/images/valakas-past-event.webp',
    imageCard: '/images/valakas-past-event-card.webp',
  },
  {
    slug: 'baium-19-abril-2026',
    legacySlugs: ['baium-upcoming-event'],
    title: 'Baium del 19 de abril de 2026: registro del evento especial',
    titleKey: '',
    publishedAt: '2026-04-19',
    dateLabel: '19 de abril de 2026',
    summary: 'Registro del evento especial de Baium celebrado el 19 de abril de 2026 en la temporada actual.',
    summaryKey: '',
    content: 'La noticia de Baium queda actualizada como evento ya celebrado el 19 de abril de 2026. Esto deja una señal mas clara para usuarios y buscadores: el servidor publica actividad concreta, con fechas absolutas y seguimiento visible de su calendario ingame.',
    contentKey: '',
    image: '/images/BaiumEvent.webp',
    imageCard: '/images/BaiumEvent-card.webp',
  },
  {
    slug: 'patch-v1-combate-sistemas',
    title: 'Patch v1 - Combate, offline shop y estabilidad',
    titleKey: 'news.items.patchV1.title',
    publishedAt: '2026-02-22',
    dateLabel: '22 de febrero de 2026',
    summary: 'Se aplicaron fixes de combate, tienda offline persistente, ajustes de Olympiad, pets y mejoras anti-crash/anti-bot.',
    summaryKey: 'news.items.patchV1.summary',
    content: 'El patch v1 corrige interacciones criticas de combate (heal, lethal, CP, MP reflect, revive en asedio y cancel), habilita offline shop con persistencia en DB y suma mejoras de estabilidad de servidor, anti-DoS y geodata base.',
    contentKey: 'news.items.patchV1.content',
    image: '/images/background.webp',
    imageCard: '/images/background-card.webp',
  },
  {
    slug: 'patch-v1-qol-voto-buffer',
    title: 'Patch v1 QoL - Drop, voto, Buffer y Substack UI',
    titleKey: 'news.items.patchV1Qol.title',
    publishedAt: '2026-02-23',
    dateLabel: '23 de febrero de 2026',
    summary: 'Mejoras en .drop, sistema de voto, RateDropQuest x1.20, Global GK y ajustes de movimiento/geodata.',
    summaryKey: 'news.items.patchV1Qol.summary',
    content: 'Se optimizo el flujo de progreso con .drop mas claro, voto mas justo por plataforma, mejoras de UI en Buffer/Substack, CTF/DM en pausa temporal (TvT activo), y ajustes de estabilidad para movimientos invalidos.',
    contentKey: 'news.items.patchV1Qol.content',
    image: '/images/interface.webp',
    imageCard: '/images/interface-card.webp',
  },
  {
    slug: 'patch-1-3-gameplay',
    title: 'Patch 1.3 - Neutral Zone y Titan Box',
    titleKey: 'news.items.patch13.title',
    publishedAt: '2026-03-13',
    dateLabel: '13 de marzo de 2026',
    summary: 'Global GK mejorado, Neutral Zone rework, rewards diarios actualizados y progresión Noblesse flexible.',
    summaryKey: 'news.items.patch13.summary',
    content: 'Gameplay update activo: Global GK con navegación simplificada, menú de utilidades y farm zones (Neutral Zone/Beast Farm), además de navegador de Raid Boss por rangos (sin épicos). Neutral Zone recibió rework de flujo PvP, mobs custom y economía drop/spoil ajustada. Daily ahora recompensa Adena, Freya Rose y Titan’s Box (integrada a extractables). Noblesse ahora soporta ruta de quest completa o progresión alternativa por Barakiel según configuración del servidor.',
    contentKey: 'news.items.patch13.content',
    image: '/images/NeutralZone.webp',
    imageCard: '/images/NeutralZone-card.webp',
  },
  {
    slug: 'patch-1-1-1-balance',
    title: 'Patch 1.3.1 - Balance PvP y magia',
    titleKey: 'news.items.patch111.title',
    publishedAt: '2026-03-01',
    dateLabel: '1 de marzo de 2026',
    summary: 'Se aplico tuning por matchups PvP, ajustes de totems, cap de magic crit y casteo mas confiable.',
    summaryKey: 'news.items.patch111.summary',
    content: 'Tanques y lineas melee recibieron ajustes especificos contra ciertos arquetipos. Totems de Grand Khavatari ya no quedan bloqueados fuera de fist, con bonus escalado. Tambien se ajusto M.Crit (cap 350, power 2.8x) y se desactivaron fallos magicos para mejorar consistencia.',
    contentKey: 'news.items.patch111.content',
    image: '/images/balance-pvp.webp',
    imageCard: '/images/balance-pvp-card.webp',
  },
  {
    slug: 'patch-qol-economy',
    title: 'Patch QoL - Economy, voto y sistemas',
    titleKey: 'news.items.patchQol.title',
    publishedAt: '2026-02-27',
    dateLabel: '27 de febrero de 2026',
    summary: 'Drop Viewer, sistema de voto, Buffer/Substack UI y economía fueron actualizados para mejorar progresión y claridad.',
    summaryKey: 'news.items.patchQol.summary',
    content: 'La web y el servidor reflejan mejoras de QoL: .drop con mejor lectura, control de voto mas justo, ajustes de shop Event/Vote/Titan, Class Master con 3ra clase y mejoras de estabilidad en movimiento/geodata.',
    contentKey: 'news.items.patchQol.content',
    image: '/images/background.webp',
    imageCard: '/images/background-card.webp',
  },
  {
    slug: 'conquista-castillo-7-marzo-2026',
    legacySlugs: ['castle-conquest-last-saturday'],
    title: 'Conquista de castillo del 7 de marzo de 2026: impacto en Titan Coins',
    titleKey: '',
    publishedAt: '2026-03-07',
    dateLabel: '7 de marzo de 2026',
    summary: 'Resumen de la conquista de castillo del 7 de marzo de 2026 y su efecto en la economía del servidor.',
    summaryKey: '',
    content: 'La conquista de castillo del 7 de marzo de 2026 queda registrada con recompensas reales de Titan Coins para el líder del clan ganador. Este tipo de entrada ayuda a reforzar la visibilidad del ciclo competitivo, la economía y la actividad de clanes en la temporada.',
    contentKey: '',
    image: '/images/GiranCastle.webp',
    imageCard: '/images/GiranCastle-card.webp',
  },
];

function parsePublishedAt(value: string): number {
  return Date.parse(`${value}T00:00:00Z`);
}

function parsePatchVersion(title: string): number[] {
  const match = title.match(/patch\s+v?(\d+(?:\.\d+)*)/i);
  if (!match) return [];

  return match[1]
    .split('.')
    .map((part) => Number(part))
    .filter((versionPart) => Number.isFinite(versionPart));
}

function comparePatchVersion(a: number[], b: number[]): number {
  const maxLength = Math.max(a.length, b.length);
  for (let index = 0; index < maxLength; index += 1) {
    const left = a[index] ?? 0;
    const right = b[index] ?? 0;
    if (left !== right) return right - left;
  }
  return 0;
}

export function sortNewsItems(items: NewsItem[]): NewsItem[] {
  return [...items].sort((left, right) => {
    const dateCompare = parsePublishedAt(right.publishedAt) - parsePublishedAt(left.publishedAt);
    if (dateCompare !== 0) return dateCompare;

    const patchCompare = comparePatchVersion(
      parsePatchVersion(left.title),
      parsePatchVersion(right.title),
    );
    if (patchCompare !== 0) return patchCompare;

    return left.title.localeCompare(right.title, 'es');
  });
}

export const orderedNews = sortNewsItems(news);

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return news.find((item) => item.slug === slug || item.legacySlugs?.includes(slug));
}
