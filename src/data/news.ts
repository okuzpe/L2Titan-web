export interface NewsItem {
  slug: string;
  title: string;
  titleKey: string;
  date: string;
  summary: string;
  summaryKey: string;
  content: string;
  contentKey: string;
  image: string;
}

export const news: NewsItem[] = [
  {
    slug: 'patch-v1-combate-sistemas',
    title: 'Patch v1 - Combate, offline shop y estabilidad',
    titleKey: 'news.items.patchV1.title',
    date: '22 Feb 2026',
    summary: 'Se aplicaron fixes de combate, tienda offline persistente, ajustes de Olympiad, pets y mejoras anti-crash/anti-bot.',
    summaryKey: 'news.items.patchV1.summary',
    content: 'El patch v1 corrige interacciones críticas de combate (heal, lethal, CP, MP reflect, revive en asedio y cancel), habilita offline shop con persistencia en DB y suma mejoras de estabilidad de servidor, anti-DoS y geodata base.',
    contentKey: 'news.items.patchV1.content',
    image: '/images/background.jpg',
  },
  {
    slug: 'patch-v1-qol-voto-buffer',
    title: 'Patch v1 QoL - Drop, voto, Buffer y Substack UI',
    titleKey: 'news.items.patchV1Qol.title',
    date: '23 Feb 2026',
    summary: 'Mejoras en .drop, sistema de voto, RateDropQuest x1.20, Global GK y ajustes de movimiento/geodata.',
    summaryKey: 'news.items.patchV1Qol.summary',
    content: 'Se optimizó el flujo de progreso con .drop más claro, voto más justo por plataforma, mejoras de UI en Buffer/Substack, CTF/DM en pausa temporal (TvT activo), y ajustes de estabilidad para movimientos inválidos.',
    contentKey: 'news.items.patchV1Qol.content',
    image: '/images/interface.png',
  },
  {
    slug: 'patch-1-3-gameplay',
    title: 'Patch 1.3 - Neutral Zone y Titan Box',
    titleKey: 'news.items.patch13.title',
    date: '13 Mar 2026',
    summary: 'Global GK mejorado, Neutral Zone rework, rewards diarios actualizados y progresión Noblesse flexible.',
    summaryKey: 'news.items.patch13.summary',
    content: 'Gameplay update activo: Global GK con navegación simplificada, menú de utilidades y farm zones (Neutral Zone/Beast Farm), además de navegador de Raid Boss por rangos (sin épicos). Neutral Zone recibió rework de flujo PvP, mobs custom y economía drop/spoil ajustada. Daily ahora recompensa Adena, Freya Rose y Titan’s Box (integrada a extractables). Noblesse ahora soporta ruta de quest completa o progresión alternativa por Barakiel según configuración del servidor.',
    contentKey: 'news.items.patch13.content',
    image: '/images/NeutralZone.jpg',
  },
  {
    slug: 'patch-1-1-1-balance',
    title: 'Patch 1.3.1 - Balance PvP y magia',
    titleKey: 'news.items.patch111.title',
    date: '01 Mar 2026',
    summary: 'Se aplicó tuning por matchups PvP, ajustes de totems, cap de magic crit y casteo más confiable.',
    summaryKey: 'news.items.patch111.summary',
    content: 'Tanques y líneas melee recibieron ajustes específicos contra ciertos arquetipos. Totems de Grand Khavatari ya no quedan bloqueados fuera de fist, con bonus escalado. También se ajustó M.Crit (cap 350, power 2.8x) y se desactivaron fallos mágicos para mejorar consistencia.',
    contentKey: 'news.items.patch111.content',
    image: '/images/Box.png',
  },
  {
    slug: 'patch-qol-economy',
    title: 'Patch QoL - Economy, voto y sistemas',
    titleKey: 'news.items.patchQol.title',
    date: '27 Feb 2026',
    summary: 'Drop Viewer, sistema de voto, Buffer/Substack UI y economía fueron actualizados para mejorar progresión y claridad.',
    summaryKey: 'news.items.patchQol.summary',
    content: 'La web y el servidor reflejan mejoras de QoL: .drop con mejor lectura, control de voto más justo, ajustes de shop Event/Vote/Titan, Class Master con 3ra clase y mejoras de estabilidad en movimiento/geodata.',
    contentKey: 'news.items.patchQol.content',
    image: '/images/background.jpg',
  },
  {
    slug: 'castle-conquest-last-saturday',
    title: 'Conquista de castillo - sábado pasado',
    titleKey: 'news.items.castleConquest.title',
    date: '07 Mar 2026',
    summary: 'Resumen de la conquista del castillo del sábado pasado con impacto en la economía del servidor.',
    summaryKey: 'news.items.castleConquest.summary',
    content: 'La conquista del castillo del sábado pasado quedó registrada con recompensas de Titan Coins para el líder del clan ganador. Este logro impacta el ciclo de progresión VIP y el control estratégico de la temporada.',
    contentKey: 'news.items.castleConquest.content',
    image: '/images/GiranCastle.jpg',
  },
  {
    slug: 'baium-upcoming-event',
    title: 'Próximo evento: Baium',
    titleKey: 'news.items.baiumEvent.title',
    date: 'Próximamente',
    summary: 'Se viene evento especial de Baium. Publicaremos hora exacta, reglas y rewards en el próximo anuncio.',
    summaryKey: 'news.items.baiumEvent.summary',
    content: 'Evento en preparación: Baium. Apenas nos compartas la imagen oficial y horario final, actualizamos esta noticia con el arte definitivo, ventana de registro y reglas completas.',
    contentKey: 'news.items.baiumEvent.content',
    image: '/images/BaiumEvent.png',
  },
];

const monthMap: Record<string, number> = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

function parseNewsDate(dateText: string): number | null {
  const match = dateText.trim().match(/^(\d{1,2})\s+([A-Za-z]{3})\s+(\d{4})$/);
  if (!match) return null;

  const day = Number(match[1]);
  const month = monthMap[match[2].toLowerCase()];
  const year = Number(match[3]);
  if (Number.isNaN(day) || month === undefined || Number.isNaN(year)) return null;

  return Date.UTC(year, month, day);
}

function parsePatchVersion(title: string): number[] {
  const match = title.match(/patch\s+v?(\d+(?:\.\d+)*)/i);
  if (!match) return [];

  return match[1]
    .split('.')
    .map((part) => Number(part))
    .filter((value) => Number.isFinite(value));
}

function comparePatchVersion(a: number[], b: number[]): number {
  const maxLength = Math.max(a.length, b.length);
  for (let i = 0; i < maxLength; i += 1) {
    const left = a[i] ?? 0;
    const right = b[i] ?? 0;
    if (left !== right) return right - left;
  }
  return 0;
}

export function sortNewsItems(items: NewsItem[]): NewsItem[] {
  return [...items].sort((left, right) => {
    const leftDate = parseNewsDate(left.date);
    const rightDate = parseNewsDate(right.date);

    // Items with valid date go first (oldest to newest).
    if (leftDate !== null && rightDate !== null && leftDate !== rightDate) {
      return leftDate - rightDate;
    }
    if (leftDate !== null && rightDate === null) return -1;
    if (leftDate === null && rightDate !== null) return 1;

    // If date ties or dates are missing, compare patch version.
    const patchCompare = comparePatchVersion(
      parsePatchVersion(left.title),
      parsePatchVersion(right.title),
    );
    if (patchCompare !== 0) return -patchCompare;

    return left.title.localeCompare(right.title, 'es');
  });
}

export const orderedNews = sortNewsItems(news);

// Función helper para obtener una noticia por slug
export function getNewsBySlug(slug: string): NewsItem | undefined {
  return news.find(item => item.slug === slug);
}

