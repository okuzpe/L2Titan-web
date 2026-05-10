/** Slugs con pestaña en /info/[slug] (landings extra como /autofarm no entran aquí). */
export type InfoWikiSlug =
	| 'rates'
	| 'features'
	| 'instances'
	| 'economy'
	| 'vip'
	| 'events'
	| 'enchant'
	| 'sieges'
	| 'commands';

export interface InfoWikiSection {
  slug: InfoWikiSlug;
  kickerKey: string;
  summaryKey: string;
  featured?: boolean;
}

export const infoWikiSections: InfoWikiSection[] = [
  {
    slug: 'rates',
    kickerKey: 'info.wiki.sections.rates.kicker',
    summaryKey: 'info.wiki.sections.rates.summary',
    featured: true,
  },
  {
    slug: 'features',
    kickerKey: 'info.wiki.sections.features.kicker',
    summaryKey: 'info.wiki.sections.features.summary',
    featured: true,
  },
  {
    slug: 'instances',
    kickerKey: 'info.wiki.sections.instances.kicker',
    summaryKey: 'info.wiki.sections.instances.summary',
  },
  {
    slug: 'economy',
    kickerKey: 'info.wiki.sections.economy.kicker',
    summaryKey: 'info.wiki.sections.economy.summary',
  },
  {
    slug: 'vip',
    kickerKey: 'info.wiki.sections.vip.kicker',
    summaryKey: 'info.wiki.sections.vip.summary',
  },
  {
    slug: 'events',
    kickerKey: 'info.wiki.sections.events.kicker',
    summaryKey: 'info.wiki.sections.events.summary',
  },
  {
    slug: 'enchant',
    kickerKey: 'info.wiki.sections.enchant.kicker',
    summaryKey: 'info.wiki.sections.enchant.summary',
  },
  {
    slug: 'sieges',
    kickerKey: 'info.wiki.sections.sieges.kicker',
    summaryKey: 'info.wiki.sections.sieges.summary',
  },
  {
    slug: 'commands',
    kickerKey: 'info.wiki.sections.commands.kicker',
    summaryKey: 'info.wiki.sections.commands.summary',
  },
];

export function getInfoWikiSection(slug?: string) {
  return infoWikiSections.find((section) => section.slug === slug);
}
