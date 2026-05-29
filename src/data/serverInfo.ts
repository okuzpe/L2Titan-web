// ─── Server Info Data ───────────────────────────────────────────────
// All structured numeric/configuration data for the info page.
// Text labels are handled by the i18n translation system.

// ─── RATES ──────────────────────────────────────────────────────────

export const baseRates = [
  { key: 'xp', value: 'x25' },
  { key: 'sp', value: 'x25' },
  { key: 'adena', value: 'x10' },
  { key: 'drop', value: 'x10' },
  { key: 'spoil', value: 'x15' },
  { key: 'partyXpSp', value: 'x2' },
  { key: 'quest', value: 'x1.20' },
  { key: 'petXp', value: 'x20' },
];

export const bossRates = [
  { key: 'rbDrop', value: 'x5' },
  { key: 'rbSpoil', value: 'x5' },
  { key: 'rbAdena', value: 'x10' },
  { key: 'gbDrop', value: 'x1' },
  { key: 'gbAdena', value: 'x10' },
];

export const vipBonus = [
  { key: 'xpSp', value: '+40%' },
  { key: 'adena', value: '+40%' },
  { key: 'dropChance', value: '+40%' },
  { key: 'spoilChance', value: '+40%' },
  { key: 'dropAmount', value: '+30%' },
  { key: 'spoilAmount', value: '+30%' },
];

// ─── ENCHANT ────────────────────────────────────────────────────────

export const enchantGeneral = {
  safeEnchant: '+3',
  safeEnchantFullBody: '+4',
  maxEnchant: '+25',
};

// Normal scroll probabilities (range +0 to +16, fail = item DESTROYED + crystals returned)
// Weapon & Armor: starts 80%, drops 5% per level
export const normalScrollWeaponArmor: Record<number, number> = {
  1: 100, 2: 100, 3: 100,
  4: 80, 5: 75, 6: 70, 7: 65, 8: 60, 9: 55, 10: 50,
  11: 45, 12: 40, 13: 35, 14: 30, 15: 25, 16: 20,
};
// Jewelry: starts 90%, drops 4% per level
export const normalScrollJewelry: Record<number, number> = {
  1: 100, 2: 100, 3: 100,
  4: 90, 5: 86, 6: 82, 7: 78, 8: 74, 9: 70, 10: 66,
  11: 62, 12: 58, 13: 54, 14: 50, 15: 46, 16: 42,
};

// Blessed scroll probabilities (range +0 to +16, fail = item goes back to +0)
// Weapon & Armor: starts 90%, drops ~3% per level
export const blessedScrollWeaponArmor: Record<number, number> = {
  1: 100, 2: 100, 3: 100,
  4: 90, 5: 88, 6: 85, 7: 82, 8: 78, 9: 75, 10: 72,
  11: 68, 12: 65, 13: 62, 14: 58, 15: 55, 16: 52,
};
// Jewelry: starts 85%, drops ~3% per level
export const blessedScrollJewelry: Record<number, number> = {
  1: 100, 2: 100, 3: 100,
  4: 85, 5: 83, 6: 80, 7: 77, 8: 73, 9: 70, 10: 67,
  11: 63, 12: 60, 13: 57, 14: 53, 15: 50, 16: 47,
};

// Crystal scroll probabilities (range +13 to +25, fail = nothing happens, only scroll lost)
// Weapon & Armor: starts 74%, then drops gradually
export const crystalScrollWeaponArmor: Record<number, number> = {
  13: 74, 14: 73, 15: 72, 16: 71, 17: 70, 18: 65, 19: 60, 20: 55, 21: 50,
  22: 45, 23: 40, 24: 35, 25: 30,
};
// Jewelry: ~5% lower than weapon/armor
export const crystalScrollJewelry: Record<number, number> = {
  13: 69, 14: 68, 15: 67, 16: 66, 17: 65, 18: 60, 19: 55, 20: 50, 21: 45,
  22: 40, 23: 35, 24: 30, 25: 25,
};

export const soulCrystals = {
  levelUpChance: 32,
  breakChance: 0,
  maxLevel: 13,
};

export const augmentation = [
  { key: 'noGrade', chance: 15 },
  { key: 'midGrade', chance: 30 },
  { key: 'highGrade', chance: 45 },
  { key: 'topGrade', chance: 60 },
];

// ─── EVENTS ─────────────────────────────────────────────────────────

export interface EventSlot {
  hour: string;
  type: 'TvT' | 'CTF' | 'DM';
  active: boolean;
}

export const eventSchedule: EventSlot[] = [
  { hour: '00:00', type: 'TvT', active: true }, { hour: '01:00', type: 'CTF', active: false }, { hour: '02:00', type: 'DM', active: false },
  { hour: '03:00', type: 'TvT', active: true }, { hour: '04:00', type: 'CTF', active: false }, { hour: '05:00', type: 'DM', active: false },
  { hour: '06:00', type: 'TvT', active: true }, { hour: '07:00', type: 'CTF', active: false }, { hour: '08:00', type: 'DM', active: false },
  { hour: '09:00', type: 'TvT', active: true }, { hour: '10:00', type: 'CTF', active: false }, { hour: '11:00', type: 'DM', active: false },
  { hour: '12:00', type: 'TvT', active: true }, { hour: '13:00', type: 'CTF', active: false }, { hour: '14:00', type: 'DM', active: false },
  { hour: '15:00', type: 'TvT', active: true }, { hour: '16:00', type: 'CTF', active: false }, { hour: '17:00', type: 'DM', active: false },
  { hour: '18:00', type: 'TvT', active: true }, { hour: '19:00', type: 'CTF', active: false }, { hour: '20:00', type: 'DM', active: false },
  { hour: '21:00', type: 'TvT', active: true }, { hour: '22:00', type: 'CTF', active: false }, { hour: '23:00', type: 'DM', active: false },
];

// ─── ECONOMY: SHOPS ─────────────────────────────────────────────────

export const weaponCrystalScrolls = [
  { grade: 'S', voteCoins: 200, raidTokens: 80, adena: '150M' },
  { grade: 'A', voteCoins: 160, raidTokens: 65, adena: '120M' },
  { grade: 'B', voteCoins: 120, raidTokens: 50, adena: '90M' },
  { grade: 'C', voteCoins: 85, raidTokens: 35, adena: '65M' },
  { grade: 'D', voteCoins: 55, raidTokens: 20, adena: '40M' },
];

export const armorCrystalScrolls = [
  { grade: 'S', voteCoins: 160, raidTokens: 60, adena: '75M' },
  { grade: 'A', voteCoins: 130, raidTokens: 50, adena: '60M' },
  { grade: 'B', voteCoins: 95, raidTokens: 35, adena: '45M' },
  { grade: 'C', voteCoins: 65, raidTokens: 25, adena: '30M' },
  { grade: 'D', voteCoins: 45, raidTokens: 15, adena: '20M' },
];

export const eventMedalShop = [
  { key: 'soulCrystal11', cost: 400 },
  { key: 'soulCrystal12', cost: 1000 },
  { key: 'soulCrystal13', cost: 1800 },
  { key: 'redPipetteKnife', cost: 600 },
  { key: 'proofOfBlood', cost: 250 },
  { key: 'proofOfAlliance', cost: 700 },
  { key: 'proofOfAspiration', cost: 6000 },
  { key: 'lifeStone52', cost: 15 },
  { key: 'lifeStone61', cost: 25 },
  { key: 'lifeStone67', cost: 35 },
  { key: 'lifeStone76', cost: 50 },
];

export const voteCoinShop = [
  { key: 'freyaRosePotion', cost: 3 },
];

export const titansBoxRewards = [
  { itemName: 'Scroll: Enchant Armor (Grade B)', chance: 14 },
  { itemName: 'Scroll: Enchant Weapon (Grade B)', chance: 11 },
  { itemName: 'Blessed Scroll: Enchant Armor (Grade B)', chance: 8 },
  { itemName: 'Blessed Scroll: Enchant Weapon (Grade B)', chance: 6 },
  { itemName: 'Scroll: Enchant Armor (Grade A)', chance: 11 },
  { itemName: 'Scroll: Enchant Weapon (Grade A)', chance: 8 },
  { itemName: 'Blessed Scroll: Enchant Armor (Grade A)', chance: 7 },
  { itemName: 'Blessed Scroll: Enchant Weapon (Grade A)', chance: 5 },
  { itemName: 'Scroll: Enchant Armor (Grade S)', chance: 8 },
  { itemName: 'Scroll: Enchant Weapon (Grade S)', chance: 5 },
  { itemName: 'Blessed Scroll: Enchant Armor (Grade S)', chance: 4 },
  { itemName: 'Blessed Scroll: Enchant Weapon (Grade S)', chance: 3 },
  { itemName: 'High-Grade Life Stone: level 76', chance: 6 },
  { itemName: 'Top-Grade Life Stone: level 76', chance: 4 },
];

export const shirts = [
  { level: 1, pAtk: 3, mAtk: 2, pvp: 3, pvpCoins: 50, adena: '25M', requiresPrev: false },
  { level: 2, pAtk: 6, mAtk: 4, pvp: 6, pvpCoins: 80, adena: '50M', requiresPrev: true },
  { level: 3, pAtk: 9, mAtk: 6, pvp: 9, pvpCoins: 110, adena: '75M', requiresPrev: true },
  { level: 4, pAtk: 12, mAtk: 8, pvp: 12, pvpCoins: 140, adena: '100M', requiresPrev: true },
  { level: 5, pAtk: 15, mAtk: 10, pvp: 15, pvpCoins: 170, adena: '125M', requiresPrev: true },
];

export const raidTokenDrops = [
  { key: 'normalRB', total: 10, distribution: '2 drops de 5' },
  { key: 'queenAnt', total: 50, distribution: '10 drops de 5' },
  { key: 'orfen', total: 180, distribution: '36 drops de 5' },
  { key: 'zaken', total: 100, distribution: '20 drops de 5' },
  { key: 'baium', total: 200, distribution: '10 drops de 20' },
  { key: 'antharas', total: 500, distribution: '20 drops de 25' },
  { key: 'valakas', total: 600, distribution: '20 drops de 30' },
];

export interface DailyInstanceInfo {
  id: number;
  name: string;
  access: string;
  maxTime: string;
  maxEntries: string;
  levelRange: string;
  focus: string;
  drops: string[];
  notes: string[];
}

export const dailyInstances: DailyInstanceInfo[] = [
  {
    id: 1,
    name: 'Pagan Temple',
    access: '.daily enter 1',
    maxTime: '60 min',
    maxEntries: '1 por dia',
    levelRange: '1 - 80',
    focus: 'Farm rapido diario con Adena, Freya Rose y Titan’s Box.',
    drops: [
      'Adena: 130k - 170k (70% chance)',
      'Freya Rose: 1 unidad base, 32.5% normal / 45.5% VIP',
      'Titan’s Box: 10% normal / 14% VIP',
    ],
    notes: [
      'Reset diario a las 06:30 del servidor.',
      'El tiempo se pausa al salir o desconectarte.',
    ],
  },
  {
    id: 2,
    name: 'Infinitum Tower',
    access: '.daily enter 2',
    maxTime: '60 min',
    maxEntries: '3 por dia',
    levelRange: '1 - 85',
    focus: 'Instancia nueva orientada a farmear letras L2 Day y Adena.',
    drops: [
      'Adena: 20k - 26k (70% chance)',
      'Letras L2 Day para canjes especiales en Paul Merchant',
      'Item especial II para recetas top',
    ],
    notes: [
      'Usa las letras en Paul Merchant para armas, sets y joyas A-grade.',
      'La letra J no existe en cliente; el item especial es II, no dos I.',
    ],
  },
];

export const l2DayRecipes = [
  { product: 'Armas A-grade', word: 'WEAPON', reward: 'Armas A-grade normales' },
  { product: 'Armas A-grade top', word: 'WEAPON + II', reward: 'Armas A-grade top' },
  { product: 'Escudos A-grade', word: 'SHIELD', reward: 'Escudos A-grade sellados' },
  { product: 'Joyas Phoenix', word: 'YEWELLS', reward: 'Set sellado Phoenix completo' },
  { product: 'Joyas Majestic', word: 'YEWELLS + II', reward: 'Set sellado Majestic completo' },
  { product: 'Sets A-grade sellados', word: 'ARMORS + II', reward: 'Dark Crystal, Tallum, Nightmare y Majestic' },
];

export const fortressRewardSummary = {
  leaderReward: '4 Titan Coins',
  defenderReputation: '+250 clan reputation',
  conquerorReputation: '+500 clan reputation',
};

export const castleRewardHighlights = [
  { castle: 'Gludio', reward: '35 Titan Coins' },
  { castle: 'Dion', reward: '50 Titan Coins' },
  { castle: 'Giran', reward: '65 Titan Coins' },
  { castle: 'Oren', reward: '65 Titan Coins' },
  { castle: 'Aden', reward: '135 Titan Coins' },
  { castle: 'Innadril', reward: '55 Titan Coins' },
  { castle: 'Goddard', reward: '80 Titan Coins' },
  { castle: 'Rune', reward: '100 Titan Coins' },
  { castle: 'Schuttgart', reward: '80 Titan Coins' },
];

// ─── SIEGES ──────────────────────────────────────────────────────────

export const fortressList = [
  'Shanty', 'Southern', 'Hive', 'Valley', 'Ivory', 'Narsell', 'Basin',
  'White Sands', 'Borderland', 'Swampland', 'Archaic', 'Floran',
  'Cloud Mountain', 'Tanor', 'Dragonspine', 'Antharas', 'Western',
  'Hunters', 'Aaru', 'Demon', 'Monastic',
];

export const castleList = [
  'Gludio', 'Dion', 'Giran', 'Oren', 'Aden',
  'Innadril', 'Goddard', 'Rune', 'Schuttgart',
];

// ─── COMMANDS ───────────────────────────────────────────────────────

export interface Command {
  cmd: string;
  key: string; // translation key for description
}

export const commands: Record<string, Command[]> = {
  vip: [
    { cmd: '.vip', key: 'cmdVipActivate' },
    { cmd: '.vipinfo', key: 'cmdVipInfo' },
  ],
  instances: [
    { cmd: '.daily', key: 'cmdDaily' },
    { cmd: '.daily watch <id>', key: 'cmdDailyWatch' },
    { cmd: '.daily enter <id>', key: 'cmdDailyEnter' },
    { cmd: '.daily exit', key: 'cmdDailyExit' },
  ],
  events: [
    { cmd: '.join', key: 'cmdJoin' },
    { cmd: '.leave', key: 'cmdLeave' },
  ],
  rankings: [
    { cmd: '.top', key: 'cmdTop' },
  ],
  vote: [
    { cmd: '.vote', key: 'cmdVote' },
    { cmd: '.voteTime', key: 'cmdVoteTime' },
  ],
  teleport: [
    { cmd: '.globalgk', key: 'cmdGlobalGk' },
  ],
  bank: [
    { cmd: '.bank', key: 'cmdBank' },
    { cmd: '.deposit', key: 'cmdDeposit' },
    { cmd: '.withdraw', key: 'cmdWithdraw' },
  ],
  marriage: [
    { cmd: '.engage', key: 'cmdEngage' },
    { cmd: '.divorce', key: 'cmdDivorce' },
    { cmd: '.gotolove', key: 'cmdGotolove' },
  ],
  utilities: [
    { cmd: '.exp', key: 'cmdExp' },
    { cmd: '.farm', key: 'cmdAutoFarm' },
    { cmd: '.autofarm', key: 'cmdAutoFarm' },
    { cmd: '.drop', key: 'cmdDrop' },
  ],
};

export const patchStatus = [
  { key: 'xpRate', value: 'x25', state: 'updated' },
  { key: 'questDropRate', value: 'x1.20', state: 'updated' },
  { key: 'eventsTvt', value: 'ON', state: 'active' },
  { key: 'eventsCtf', value: 'OFF', state: 'inactive' },
  { key: 'eventsDm', value: 'OFF', state: 'inactive' },
  { key: 'globalGk', value: 'ON', state: 'active' },
  { key: 'substackNoMorph', value: 'ON', state: 'active' },
];

export const classBalance = [
  { key: 'tankVsFighter', value: '+30% PvP dmg' },
  { key: 'tankVsMage', value: '+25% PvP dmg' },
  { key: 'heavyVsMage', value: '+20% PvP dmg' },
  { key: 'daggerArcherVsMage', value: '+15% PvP dmg' },
  { key: 'magicCritCap', value: '350' },
  { key: 'magicCritPower', value: '2.8x' },
  { key: 'magicFailures', value: 'disabled' },
];

export const neutralZoneHighlights = [
  'neutralIdentity',
  'neutralMonsters',
  'neutralFlow',
  'neutralFlag',
  'neutralDrops',
];

export const dailyRewards = [
  { key: 'rewardAdena', value: 'Adena' },
  { key: 'rewardFreyaRose', value: 'Freya Rose Red Potion' },
  { key: 'rewardTitansBox', value: "Titan’s Box" },
];
