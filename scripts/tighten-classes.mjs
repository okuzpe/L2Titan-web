/**
 * Tighten (A): class-only replacements — preserves file formatting.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.join(import.meta.dirname, '..', 'src');
const SKIP = new Set(['node_modules', 'dist', '.astro']);

const REPLACEMENTS = [
	[
		'text-[11px] uppercase tracking-[0.28em] text-yellow-400/80 mb-3',
		'df-kicker mb-3',
	],
	[
		'text-[11px] uppercase tracking-[0.28em] text-yellow-400/80',
		'df-kicker',
	],
	[
		'text-[11px] uppercase tracking-[0.22em] text-gray-500',
		'df-kicker-muted',
	],
	[
		'text-3xl md:text-5xl font-extrabold text-yellow-400 font-display tracking-wide mb-4',
		'df-hero-title mb-4',
	],
	[
		'text-3xl md:text-5xl font-extrabold text-yellow-400 font-display tracking-wide',
		'df-hero-title',
	],
	['bg-slate-900/50 border border-white/10', 'df-surface'],
	['bg-slate-900/50', 'df-surface'],
	['hover:scale-105', ''],
	['text-amber-400', 'text-yellow-400'],
	['text-amber-500', 'text-yellow-500'],
	['text-amber-200', 'text-yellow-200'],
	['text-amber-300', 'text-yellow-300'],
	['border-amber-500/', 'border-yellow-500/'],
	['from-amber-500/', 'from-yellow-500/'],
	['to-amber-500/', 'to-yellow-500/'],
	['ring-amber-400/', 'ring-yellow-400/'],
	['bg-amber-500/', 'bg-yellow-500/'],
	['text-cyan-400', 'text-yellow-400'],
	['text-cyan-500', 'text-yellow-500'],
	['text-purple-400', 'text-yellow-400'],
	['text-purple-500', 'text-yellow-500'],
	['border-cyan-500/', 'border-yellow-500/'],
	['border-purple-500/', 'border-yellow-500/'],
	['bg-cyan-500/', 'bg-yellow-500/'],
	['bg-purple-500/', 'bg-yellow-500/'],
];

function walk(dir, out = []) {
	for (const name of fs.readdirSync(dir)) {
		if (SKIP.has(name)) continue;
		const full = path.join(dir, name);
		const st = fs.statSync(full);
		if (st.isDirectory()) walk(full, out);
		else if (/\.(astro|css)$/.test(name)) out.push(full);
	}
	return out;
}

function tighten(content) {
	let s = content;
	for (const [from, to] of REPLACEMENTS) {
		s = s.split(from).join(to);
	}
	// collapse accidental double spaces in class attributes only
	s = s.replace(/class="([^"]*)"/g, (_, cls) => {
		const cleaned = cls.replace(/\s{2,}/g, ' ').trim();
		return cleaned ? `class="${cleaned}"` : '';
	});
	return s;
}

let changed = 0;
for (const file of walk(ROOT)) {
	if (file.endsWith('global.css')) continue;
	const before = fs.readFileSync(file, 'utf8');
	const after = tighten(before);
	if (after !== before) {
		fs.writeFileSync(file, after);
		changed++;
	}
}
console.log(`Tighten: ${changed} files updated`);
