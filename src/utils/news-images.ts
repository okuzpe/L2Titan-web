import type { NewsItem } from '../data/news';

/** Variante intermedia (~768w) generada por `npm run optimize:images` */
export function newsImageMidUrl(imageWebp: string): string {
	return imageWebp.replace(/\.webp$/i, '-mid.webp');
}

/** `srcset` para grid home y hero de artículo cuando existen card + webp principal */
export function newsWebpSrcset(item: Pick<NewsItem, 'image' | 'imageCard'>): string | null {
	if (!item.imageCard || !item.image.toLowerCase().endsWith('.webp')) return null;
	const mid = newsImageMidUrl(item.image);
	return `${item.imageCard} 600w, ${mid} 768w, ${item.image} 900w`;
}
