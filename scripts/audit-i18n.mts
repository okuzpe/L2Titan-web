/**
 * Audita claves i18n estáticas en src/ contra translations (es + en).
 * Ejecutar: npx --yes tsx scripts/audit-i18n.mts
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { translations, type Language } from '../src/data/translations.ts';
import { infoLandingConfigs, type InfoLandingTopicSlug } from '../src/data/infoLandingConfigs.ts';
import { infoWikiSections } from '../src/data/infoWiki.ts';

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..');

function walkSrc(dir: string, out: string[] = []): string[] {
	for (const ent of readdirSync(dir, { withFileTypes: true })) {
		if (ent.name.startsWith('.')) continue;
		const p = join(dir, ent.name);
		if (ent.isDirectory()) walkSrc(p, out);
		else if (/\.(astro|ts|tsx)$/.test(ent.name)) out.push(p);
	}
	return out;
}

function valueAtPath(obj: unknown, path: string): unknown {
	let v: unknown = obj;
	for (const part of path.split('.')) {
		if (v == null || typeof v !== 'object' || !Object.prototype.hasOwnProperty.call(v, part)) {
			return undefined;
		}
		v = (v as Record<string, unknown>)[part];
	}
	return v;
}

function isResolvableString(lang: Language, key: string): boolean {
	const v = valueAtPath(translations[lang], key);
	return typeof v === 'string';
}

const KEY_PATTERNS: RegExp[] = [
	/translate\s*\(\s*[`'"]([^`'"]+)[`'"]/g,
	/data-i18n=["']([^"']+)["']/g,
	/data-i18n-aria-label=["']([^"']+)["']/g,
	/data-i18n-title=["']([^"']+)["']/g,
	/data-i18n-alt=["']([^"']+)["']/g,
	/i18nKey=\{?["']([^"']+)["']\}?/g,
];

/** Claves con interpolación — revisar a mano */
const TEMPLATE_LITERAL_KEYS = /translate\s*\(\s*`|\$\{/;

function collectKeysFromFile(path: string): { static: Set<string>; dynamicNote: boolean } {
	const content = readFileSync(path, 'utf8');
	const staticKeys = new Set<string>();
	let dynamicNote = TEMPLATE_LITERAL_KEYS.test(content);

	for (const re of KEY_PATTERNS) {
		re.lastIndex = 0;
		let m: RegExpExecArray | null;
		while ((m = re.exec(content)) !== null) {
			const k = m[1].trim();
			if (!k || k.includes('${')) continue;
			staticKeys.add(k);
		}
	}

	return { static: staticKeys, dynamicNote };
}

const langs: Language[] = ['es', 'en'];
const allStatic = new Set<string>();
const filesWithDynamic = new Set<string>();

for (const file of walkSrc(join(ROOT, 'src'))) {
	const { static: keys, dynamicNote } = collectKeysFromFile(file);
	keys.forEach((k) => allStatic.add(k));
	if (dynamicNote && keys.size > 0) filesWithDynamic.add(file.replace(ROOT + '\\', '').replace(ROOT + '/', ''));
}

const missing: Record<Language, string[]> = { es: [], en: [] };
for (const key of [...allStatic].sort()) {
	for (const lang of langs) {
		if (!isResolvableString(lang, key)) {
			missing[lang].push(key);
		}
	}
}

console.log('=== Auditoría i18n (claves estáticas en src/) ===\n');
console.log(`Claves únicas detectadas: ${allStatic.size}`);
if (filesWithDynamic.size) {
	console.log(`\nArchivos con posible translate(\`...\${...}\`) (revisar claves dinámicas):`);
	for (const f of [...filesWithDynamic].sort()) console.log(`  - ${f}`);
}

let exit = 0;
for (const lang of langs) {
	const m = missing[lang];
	console.log(`\n--- Faltan en ${lang} (${m.length}) ---`);
	if (m.length === 0) {
		console.log('  (ninguna)');
	} else {
		exit = 1;
		for (const k of m) console.log(`  - ${k}`);
	}
}

/** Landings: cada topicSlug debe tener heading + intro en ES y EN */
const landingSlugs = Object.keys(infoLandingConfigs) as InfoLandingTopicSlug[];
const landingMissing: Record<Language, string[]> = { es: [], en: [] };
for (const slug of landingSlugs) {
	for (const lang of langs) {
		const base = `info.landings.topics.${slug}`;
		if (!isResolvableString(lang, `${base}.heading`)) landingMissing[lang].push(`${base}.heading`);
		if (!isResolvableString(lang, `${base}.intro`)) landingMissing[lang].push(`${base}.intro`);
		if (!isResolvableString(lang, `${base}.metaTitle`)) landingMissing[lang].push(`${base}.metaTitle`);
		if (!isResolvableString(lang, `${base}.metaDescription`)) landingMissing[lang].push(`${base}.metaDescription`);
	}
}

/** Wiki /info/[slug]: tabs + secciones del índice */
const wikiMissing: Record<Language, string[]> = { es: [], en: [] };
for (const sec of infoWikiSections) {
	for (const lang of langs) {
		const tabKey = `info.tabs.${sec.slug}`;
		if (!isResolvableString(lang, tabKey)) wikiMissing[lang].push(tabKey);
		for (const fullKey of [sec.kickerKey, sec.summaryKey]) {
			if (!isResolvableString(lang, fullKey)) wikiMissing[lang].push(fullKey);
		}
	}
}

console.log('\n=== Landings (info.landings.topics.*) ===');
for (const lang of langs) {
	const m = landingMissing[lang];
	if (m.length) {
		exit = 1;
		console.log(`Faltan en ${lang}:`, m.join(', '));
	} else console.log(`${lang}: OK (${landingSlugs.length} topics)`);
}

console.log('\n=== Wiki tabs + secciones (info.wiki.sections) ===');
for (const lang of langs) {
	const m = wikiMissing[lang];
	if (m.length) {
		exit = 1;
		console.log(`Faltan en ${lang}:`, m.join(', '));
	} else console.log(`${lang}: OK (${infoWikiSections.length} secciones)`);
}

/** Páginas sin uso de translate() (copy posiblemente solo ES) */
const pageDir = join(ROOT, 'src', 'pages');
const pagesNoTranslate: string[] = [];
	for (const file of walkSrc(pageDir)) {
		const c = readFileSync(file, 'utf8');
		const usesI18n =
			c.includes('translate(') ||
			c.includes('data-i18n') ||
			c.includes('visitorLangFromPath') ||
			c.includes('buildLocalizedInfoTopicBreadcrumb');
		if (!usesI18n) {
			pagesNoTranslate.push(file.replace(ROOT + '\\', '').replace(ROOT + '/', ''));
		}
	}
console.log('\n=== Páginas sin translate( ni data-i18n en el archivo ===');
console.log(
	pagesNoTranslate.length
		? pagesNoTranslate.sort().join('\n  ')
		: '  (ninguna — todas referencian i18n en el .astro)',
);

process.exit(exit);
