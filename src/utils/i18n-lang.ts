import type { Language } from '../data/translations';

/** Idioma visible según URL: rutas bajo `/en/` usan inglés; el resto español (coincide con toggle + localStorage). */
export function visitorLangFromPath(pathname: string): Language {
	const p = pathname.replace(/\/+$/, '') || '/';
	return p === '/en' || p.startsWith('/en/') ? 'en' : 'es';
}
