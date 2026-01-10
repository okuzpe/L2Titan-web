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

// Función para formatear fecha actual en formato corto (ej: "15 ene 2026")
function getCurrentDateFormatted(): string {
  const now = new Date();
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  return `${day} ${month} ${year}`;
}

export const news: NewsItem[] = [
  {
    slug: 'gran-opening-2026',
    title: 'Gran Apertura: L2Titan',
    titleKey: 'news.items.opening.title',
    date: '24 Ene 2026',
    summary: 'Prepárate para la experiencia definitiva. Servidor Interlude x30 con características únicas.',
    summaryKey: 'news.items.opening.summary',
    content: 'L2Titan está listo para lanzarse. El 24 de enero de 2026 abriremos nuestras puertas a todos los jugadores. Servidor Interlude x30 con un sistema único de subclases acumulativas que te permitirá combinar habilidades de diferentes clases en un mismo personaje. Contaremos con protección DDoS robusta, eventos diarios, sistema de Olympiad y mucho más. ¡No te lo pierdas!',
    contentKey: 'news.items.opening.content',
    image: '/images/news-1.png',
  },
  {
    slug: 'balance-update',
    title: 'Actualización de Balance',
    titleKey: 'news.items.balance.title',
    date: getCurrentDateFormatted(),
    summary: 'Ajustes en clases de dagueros y arqueros para mejorar el PvP competitivo.',
    summaryKey: 'news.items.balance.summary',
    content: 'Hemos realizado ajustes importantes en las clases de dagueros y arqueros para mejorar el balance del PvP competitivo. Estos cambios incluyen modificaciones en los tiempos de reutilización de habilidades, daño base y efectos especiales. El objetivo es crear un entorno más equilibrado donde todas las clases tengan oportunidades justas en combate.',
    contentKey: 'news.items.balance.content',
    image: '/images/news-3.png',
  },
];

// Función helper para obtener una noticia por slug
export function getNewsBySlug(slug: string): NewsItem | undefined {
  return news.find(item => item.slug === slug);
}

