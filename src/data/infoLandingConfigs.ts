/** Bloques H2 + texto para reforzar SEO on-page sin relleno genérico */
export interface InfoContentBlock {
  heading: string;
  body: string;
}

/** CTAs del hero: un solo primario (descarga) y secundario contextual cuando aplique */
export type LandingCtaPreset = 'default' | 'economy' | 'rates' | 'events' | 'instances';

export type InfoLandingTopicSlug =
  | 'rates'
  | 'enchant'
  | 'vip'
  | 'events'
  | 'instances'
  | 'sieges'
  | 'economy'
  | 'features'
  | 'commands'
  | 'autofarm'
  | 'olympiad'
  | 'raidbosses';

export interface InfoLandingConfig {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
  heading: string;
  intro: string;
  ogImage: string;
  /** Clave bajo `info.landings.topics.<topicSlug>` para i18n (ES/EN) */
  topicSlug: InfoLandingTopicSlug;
  contentBlocks?: InfoContentBlock[];
  /** Variación de botones respecto al patrón fijo descarga + wiki */
  landingCtaPreset?: LandingCtaPreset;
}

export const infoLandingConfigs: Record<InfoLandingTopicSlug, InfoLandingConfig> = {
  rates: {
    topicSlug: 'rates',
    landingCtaPreset: 'rates',
    title: 'Rates x25 de L2Titan para Lineage 2 Interlude',
    description:
      'Consulta los rates x25 de L2Titan para Lineage 2 Interlude: XP, SP, Adena, drop, spoil, Raid Boss, Grand Boss y bonus VIP.',
    keywords:
      'l2 interlude rates x25, lineage 2 interlude rates, l2 titan rates, l2 interlude adena drop spoil, lineage 2 private server rates',
    canonicalPath: '/rates',
    heading: 'Rates x25 de L2Titan para Lineage 2 Interlude',
    intro:
      'Referencia en una sola URL: XP, SP, Adena, drop, spoil, party, quest, tablas RB/GB y bonus VIP. Los valores concretos están en las tablas de abajo.',
    ogImage: '/images/background.jpg',
  },
  enchant: {
    topicSlug: 'enchant',
    title: 'Enchant de L2Titan Interlude: safe, max y chances',
    description:
      'Revisa el sistema de enchant de L2Titan Interlude: safe enchant, max enchant, scrolls normales, blessed, crystal y augmentation.',
    keywords:
      'l2 interlude enchant rates, l2 enchant chance interlude, lineage 2 blessed scroll, crystal scroll l2, l2 titan enchant',
    canonicalPath: '/enchant',
    heading: 'Enchant de L2Titan Interlude: safe, max y chances',
    intro:
      'Safe, máximo, chances y scrolls (normal, blessed, crystal) en tablas debajo; soul crystals y augmentation incluidos.',
    ogImage: '/images/Shirt.jpg',
  },
  vip: {
    topicSlug: 'vip',
    title: 'VIP de L2Titan Interlude: como funciona y que bonus da',
    description:
      'Descubre como funciona el VIP de L2Titan Interlude, que bonus ofrece, como activarlo con .vip y como conseguir Titan Coins.',
    keywords:
      'l2 interlude vip system, l2 titan vip, lineage 2 vip token, l2 interlude premium bonus, titan coins vip',
    canonicalPath: '/vip',
    heading: 'VIP de L2Titan Interlude: como funciona y que bonus da',
    intro:
      'Comandos .vip, duración, VIP Token y bonus (XP, Adena, drop, spoil, items) en el panel inferior; Titan Coins y asedios en tablas.',
    ogImage: '/images/GiranCastle.jpg',
  },
  events: {
    topicSlug: 'events',
    landingCtaPreset: 'events',
    title: 'Eventos PvP de L2Titan Interlude: TvT, CTF y DM',
    description:
      'Consulta los eventos PvP de L2Titan Interlude: horarios, estado de TvT, CTF y DM, reglas generales y comandos para entrar.',
    keywords:
      'l2 interlude events, l2 tvt interlude, lineage 2 ctf dm, l2 titan events, l2 interlude pvp events',
    canonicalPath: '/events',
    heading: 'Eventos PvP de L2Titan Interlude: TvT, CTF y DM',
    intro:
      'Estado, horarios, reglas y comandos en el bloque principal; TvT, CTF, DM y Event Medals sin duplicar párrafos extra.',
    ogImage: '/images/background.jpg',
  },
  instances: {
    topicSlug: 'instances',
    landingCtaPreset: 'instances',
    title: 'Daily Instances de L2Titan Interlude y Neutral Zone',
    description:
      'Explora las daily instances de L2Titan Interlude: Pagan Temple, Infinitum Tower, drops, comandos .daily y detalles de Neutral Zone.',
    keywords:
      'l2 interlude daily instances, l2 daily enter, infinitum tower l2, neutral zone interlude, l2 titan instances',
    canonicalPath: '/instances',
    heading: 'Daily Instances de L2Titan Interlude y Neutral Zone',
    intro:
      'Dailies activas, .daily, tiempos, entradas y drops en el contenido principal; Neutral Zone y torres donde aplique.',
    ogImage: '/images/infinitum-tower.webp',
  },
  sieges: {
    topicSlug: 'sieges',
    title: 'Asedios de castillo y fortalezas en L2Titan Interlude',
    description:
      'Mira como funcionan los asedios de fortalezas y castillos en L2Titan Interlude, con recompensas reales, Titan Coins y beneficios por conquista.',
    keywords:
      'l2 interlude castle siege, l2 fortresses interlude, l2 titan coins siege, lineage 2 castle rewards, l2 titan sieges',
    canonicalPath: '/sieges',
    heading: 'Asedios de castillo y fortalezas en L2Titan Interlude',
    intro:
      'Tiempos, requisitos, recompensas y Titan Coins en el cuerpo de la página; fin de clan sin repetir intro larga.',
    ogImage: '/images/GiranCastle.jpg',
  },
  economy: {
    topicSlug: 'economy',
    landingCtaPreset: 'economy',
    title: 'Economia de L2Titan Interlude: monedas, shops y Titan Box',
    description:
      'Consulta la economia de L2Titan Interlude: PVP Coin, Event Medal, Raid Token, Vote Coin, Titan Coin, Titan Box y shops del servidor.',
    keywords:
      'l2 interlude economy, titan box lineage 2, vote coin l2, raid token l2 interlude, l2 titan economy',
    canonicalPath: '/economy',
    heading: 'Economia de L2Titan Interlude: monedas, shops y Titan Box',
    intro:
      'Monedas, shops, Vote/Raid/Titan, Titan Box y tablas en la sección principal; un solo vistazo antes de profundizar.',
    ogImage: '/images/Box.png',
  },
  features: {
    topicSlug: 'features',
    title: 'Features de L2Titan Interlude: SubStack, AutoFarm y PvP',
    description:
      'Descubre las features de L2Titan Interlude: SubStack, AutoFarm configurable, Buffer, ranking .top, .drop, Olympiad y balance PvP.',
    keywords:
      'l2 interlude features, substack lineage 2, l2 autofarm interlude, l2 titan features, lineage 2 pvp server features',
    canonicalPath: '/features',
    heading: 'Features de L2Titan Interlude: SubStack, AutoFarm y PvP',
    intro:
      'SubStack, AutoFarm, Buffer, .top, drop, QoL y balance: todo el detalle está en las secciones siguientes (misma wiki, vista landing).',
    ogImage: '/images/interface.jpg',
  },
  commands: {
    topicSlug: 'commands',
    title: 'Comandos de L2Titan Interlude: .vip, .daily, .top y mas',
    description:
      'Lista completa de comandos de L2Titan Interlude: .vip, .daily, .join, .leave, .top, .vote, .globalgk, .bank y utilidades.',
    keywords:
      'l2 interlude commands, l2 daily command, l2 vip command, lineage 2 .top .vote .bank, l2 titan commands',
    canonicalPath: '/commands',
    heading: 'Comandos de L2Titan Interlude: .vip, .daily, .top y mas',
    intro:
      'Lista por categorías debajo (.vip, .daily, .top, voto, teleport, banco, etc.); entra directo al bloque útil.',
    ogImage: '/images/interface.jpg',
  },
  autofarm: {
    topicSlug: 'autofarm',
    title: 'AutoFarm Lineage 2 Interlude en L2Titan',
    description:
      'AutoFarm avanzado en L2Titan Interlude x25: qué hace, cómo se configura y cómo enlaza con comandos y calidad de vida del servidor.',
    keywords:
      'lineage 2 autofarm server, l2 autofarm interlude, l2 interlude server, lineage 2 private server, l2 pvp server',
    canonicalPath: '/autofarm',
    heading: 'AutoFarm en L2Titan Interlude x25',
    intro:
      'Modos, radio y filtros en el panel de abajo; landing dedicada a la intención “autofarm Interlude” sin repetir el texto de /features.',
    ogImage: '/images/interface.jpg',
  },
  olympiad: {
    topicSlug: 'olympiad',
    title: 'Olympiad en L2Titan Interlude — horario y reglas',
    description:
      'Datos del Olympiad en L2Titan: horario de inicio, duración, periodo, categorías, encantamiento máximo, augment, restricciones y recompensas.',
    keywords:
      'l2 interlude olympiad, lineage 2 interlude server olympiad, l2 private server olympiad, lineage ii interlude',
    canonicalPath: '/olympiad',
    heading: 'Olympiad L2Titan Interlude',
    intro:
      'Horario, periodo, categorías y reglas en la tabla principal; misma fuente que la wiki de features.',
    ogImage: '/images/background.jpg',
  },
  raidbosses: {
    topicSlug: 'raidbosses',
    title: 'Raid Bosses y Raid Tokens en L2Titan Interlude',
    description:
      'Anuncios de Raid Boss en el cliente, rates de RB/GB en L2Titan y uso de Raid Tokens en la economía del servidor.',
    keywords:
      'l2 interlude raid boss, lineage 2 private server raid, l2 raid tokens, l2 interlude server',
    canonicalPath: '/raidbosses',
    heading: 'Raid Bosses, anuncios y economía',
    intro:
      'Anuncios en cliente y tokens: números en /rates y /economy; aquí el panel específico sin repetir esos párrafos.',
    ogImage: '/images/interface.jpg',
  },
};
