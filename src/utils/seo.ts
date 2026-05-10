import type { InfoLandingTopicSlug } from '../data/infoLandingConfigs';
import type { Language } from '../data/translations';
import { translate } from './translations';

export const SITE_URL = 'https://l2-titan.com';
export const DEFAULT_OG_IMAGE = '/images/background.jpg';

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
		sameAs: [
			'https://discord.gg/GunamUdGaQ',
			'https://www.facebook.com/l2titan.server/',
			'https://www.instagram.com/l2titan_com/',
		],
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
		description:
			'Servidor privado de Lineage 2 Interlude para PC con SubStack, AutoFarm configurable, eventos y progreso PvP.',
		gamePlatform: 'PC',
		applicationCategory: 'Game',
		operatingSystem: 'Windows',
		genre: ['MMORPG', 'PvP', 'Fantasy'],
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
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'USD',
		},
		downloadUrl: absoluteUrl('/downloads'),
	};
}
