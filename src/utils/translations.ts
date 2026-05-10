import { translations, type Language } from '../data/translations';

export const DEFAULT_INDEXABLE_LANGUAGE: Language = 'es';

export function translate(
	key: string,
	lang: Language = DEFAULT_INDEXABLE_LANGUAGE,
	fallback?: string,
): string {
	const keys = key.split('.');
	let value: unknown = translations[lang];

	for (const currentKey of keys) {
		if (!value || typeof value !== 'object' || !(currentKey in value)) {
			return fallback ?? key;
		}

		value = (value as Record<string, unknown>)[currentKey];
	}

	return typeof value === 'string' ? value : fallback ?? key;
}
