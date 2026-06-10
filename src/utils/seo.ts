import type { InfoLandingTopicSlug } from '../data/infoLandingConfigs';
import type { Language } from '../data/translations';
import { translate } from './translations';

export const SITE_URL = 'https://l2-titan.com';
export const DEFAULT_OG_IMAGE = '/images/background.jpg';

// Canales oficiales — única fuente de verdad; importar desde aquí, no hardcodear.
export const DISCORD_URL = 'https://discord.gg/xH76F9vsGf';
export const FACEBOOK_URL = 'https://www.facebook.com/l2titan.server/';
export const INSTAGRAM_URL = 'https://www.instagram.com/l2titan_com/';
export const TIKTOK_URL = 'https://www.tiktok.com/@omar781002';

export interface BreadcrumbItem {
	name: string;
	path: string;
}

export interface FaqItem {
	question: string;
	answer: string;
}

export interface ItemListEntry {
	name: string;
	path: string;
	description?: string;
}

function normalizePath(path: string): string {
	if (!path || path === '/') return '/';
	return path.replace(/\/+$/, '') || '/';
}

export function absoluteUrl(path: string): string {
	return new URL(normalizePath(path), SITE_URL).toString();
}

export function buildBreadcrumb(items: BreadcrumbItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: absoluteUrl(item.path),
		})),
	};
}

/** Landings de tema (rates, features, …): Inicio → centro wiki → página actual (alineado con `InfoLandingLayout`). */
export function buildInfoTopicBreadcrumb(topicName: string, topicPath: string) {
	return buildBreadcrumb([
		{ name: 'Inicio', path: '/' },
		{ name: 'Información', path: '/info' },
		{ name: topicName, path: topicPath },
	]);
}

/** Breadcrumb JSON-LD alineado con idioma (localStorage/URL vía `lang` en runtime del contenido). */
export function buildLocalizedInfoTopicBreadcrumb(
	lang: Language,
	topicSlug: InfoLandingTopicSlug,
	topicHeadingFallback: string,
	topicPath: string,
) {
	return buildBreadcrumb([
		{ name: translate('navbar.home', lang, 'Inicio'), path: '/' },
		{ name: translate('info.landings.breadcrumbWiki', lang, 'Información'), path: '/info' },
		{
			name: translate(`info.landings.topics.${topicSlug}.heading`, lang, topicHeadingFallback),
			path: topicPath,
		},
	]);
}

export function buildFaq(items: FaqItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: items.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.answer,
			},
		})),
	};
}

/** FAQPage JSON-LD de una landing de tema, leyendo `faq1q..faq3a` de las traducciones (ES/EN).
 *  Devuelve `null` si el tema no tiene FAQ definido, para filtrar con `.filter(Boolean)`. */
export function buildLandingTopicFaq(lang: Language, topicSlug: InfoLandingTopicSlug) {
	const base = `info.landings.topics.${topicSlug}`;
	const items: FaqItem[] = [];
	for (let i = 1; i <= 3; i++) {
		const question = translate(`${base}.faq${i}q`, lang, '');
		const answer = translate(`${base}.faq${i}a`, lang, '');
		if (question && answer) items.push({ question, answer });
	}
	return items.length ? buildFaq(items) : null;
}

export function buildItemList(items: ItemListEntry[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			url: absoluteUrl(item.path),
			...(item.description ? { description: item.description } : {}),
		})),
	};
}

export function buildWebsiteSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'L2Titan',
		alternateName: ['L2 Titan', 'L2Titan x25', 'Lineage 2 Titan'],
		url: SITE_URL,
		description:
			'Servidor privado Lineage 2 Interlude x25 con SubStack, AutoFarm, instancias diarias, TvT y economía documentada. Comunidad y soporte principalmente en español.',
		inLanguage: 'es',
	};
}

export function buildOrganizationSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'L2Titan',
		alternateName: ['L2 Titan', 'L2Titan x25'],
		url: SITE_URL,
		logo: absoluteUrl('/favicon.svg'),
		// TODO(operator): fecha de lanzamiento real del servidor para reforzar autoridad (E-E-A-T).
		// foundingDate: '2026-01-01',
		sameAs: [
			DISCORD_URL,
			FACEBOOK_URL,
			INSTAGRAM_URL,
			TIKTOK_URL,
			// Listados externos que describen la misma entidad (asociación de entidad para motores generativos).
			'https://l2.hopzone.net/site/vote/107098/1',
			'https://l2network.eu/index.php?a=in&u=l2-titan',
			'https://www.top100arena.com/listing/102116',
			'https://top.l2jbrasil.com/index.php?a=in&u=Titan',
			'https://l2topzone.com/vote/id/13387',
		],
		contactPoint: {
			'@type': 'ContactPoint',
			contactType: 'customer support',
			url: DISCORD_URL,
			availableLanguage: ['es', 'en'],
		},
		description:
			'L2Titan: servidor Lineage 2 Interlude x25 con rates publicados, PvP, daily instances y soporte en Discord para jugadores hispanohablantes.',
	};
}

export function buildVideoGameSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'VideoGame',
		name: 'L2Titan Interlude x25',
		alternateName: ['L2Titan', 'L2 Titan x25'],
		url: SITE_URL,
		image: absoluteUrl(DEFAULT_OG_IMAGE),
		description:
			'Servidor privado de Lineage 2 Interlude para PC con SubStack, AutoFarm configurable, eventos y progreso PvP.',
		gamePlatform: 'PC',
		applicationCategory: 'Game',
		operatingSystem: 'Windows',
		genre: ['MMORPG', 'PvP', 'Fantasy'],
		inLanguage: ['es', 'en'],
		// TODO(operator): fecha de lanzamiento real del servidor (ISO 8601) para señal de frescura/autoridad.
		// datePublished: '2026-01-01',
		publisher: {
			'@type': 'Organization',
			name: 'L2Titan',
			url: SITE_URL,
		},
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'USD',
			availability: 'https://schema.org/InStock',
		},
	};
}

export function buildSoftwareApplicationSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'L2Titan Interlude Client',
		operatingSystem: 'Windows 7, Windows 8, Windows 10, Windows 11',
		applicationCategory: 'GameApplication',
		description:
			'Cliente completo de L2Titan para jugar Lineage 2 Interlude x25 con launcher oficial y descarga gratuita.',
		fileSize: '2.8 GB',
		screenshot: absoluteUrl('/images/interface.jpg'),
		// TODO(operator): versión/patch actual del cliente para señal de frescura.
		// softwareVersion: '1.0',
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'USD',
		},
		downloadUrl: absoluteUrl('/downloads'),
	};
}
