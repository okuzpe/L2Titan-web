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

/**
 * Helper de etiquetas para componentes Tab/Feature.
 * `createTabLabel('economy', lang)('intro')` → `translate('info.economyTab.intro', lang, 'intro')`.
 * Elimina la definición repetida `const xLabel = (key) => translate(...)` en cada tab.
 */
export function createTabLabel(tab: string, lang: Language = DEFAULT_INDEXABLE_LANGUAGE) {
	return (key: string) => translate(`info.${tab}Tab.${key}`, lang, key);
}
