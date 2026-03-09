// ─── Server Info Data ───────────────────────────────────────────────
// All structured numeric/configuration data for the info page.
// Text labels are handled by the i18n translation system.

// ─── RATES ──────────────────────────────────────────────────────────

export const baseRates = [
  { key: 'xp', value: 'x30' },
  { key: 'sp', value: 'x25' },
  { key: 'adena', value: 'x10' },
  { key: 'drop', value: 'x10' },
  { key: 'spoil', value: 'x15' },
  { key: 'partyXpSp', value: 'x2' },
  { key: 'quest', value: 'x1' },
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

// Crystal scroll probabilities (range +16 to +25, fail = nothing happens, only scroll lost)
// Weapon & Armor: starts 70%, drops 5% per level
export const crystalScrollWeaponArmor: Record<number, number> = {
  17: 70, 18: 65, 19: 60, 20: 55, 21: 50,
  22: 45, 23: 40, 24: 35, 25: 30,
};
// Jewelry: starts 65%, drops 5% per level
export const crystalScrollJewelry: Record<number, number> = {
  17: 65, 18: 60, 19: 55, 20: 50, 21: 45,
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

export const eventSchedule = [
  { hour: '00:00', type: 'TvT' }, { hour: '01:00', type: 'CTF' }, { hour: '02:00', type: 'DM' },
  { hour: '03:00', type: 'TvT' }, { hour: '04:00', type: 'CTF' }, { hour: '05:00', type: 'DM' },
  { hour: '06:00', type: 'TvT' }, { hour: '07:00', type: 'CTF' }, { hour: '08:00', type: 'DM' },
  { hour: '09:00', type: 'TvT' }, { hour: '10:00', type: 'CTF' }, { hour: '11:00', type: 'DM' },
  { hour: '12:00', type: 'TvT' }, { hour: '13:00', type: 'CTF' }, { hour: '14:00', type: 'DM' },
  { hour: '15:00', type: 'TvT' }, { hour: '16:00', type: 'CTF' }, { hour: '17:00', type: 'DM' },
  { hour: '18:00', type: 'TvT' }, { hour: '19:00', type: 'CTF' }, { hour: '20:00', type: 'DM' },
  { hour: '21:00', type: 'TvT' }, { hour: '22:00', type: 'CTF' }, { hour: '23:00', type: 'DM' },
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
  { key: 'soulCrystal11', cost: 500 },
  { key: 'soulCrystal12', cost: 1000 },
  { key: 'soulCrystal13', cost: 1500 },
  { key: 'redPipetteKnife', cost: 1500 },
  { key: 'lifeStone52', cost: 15 },
  { key: 'lifeStone61', cost: 25 },
  { key: 'lifeStone67', cost: 35 },
  { key: 'lifeStone76', cost: 50 },
];

export const shirts = [
  { level: 1, pAtk: 3, mAtk: 2, pvp: 3, pvpCoins: 50, adena: '25M', requiresPrev: false },
  { level: 2, pAtk: 6, mAtk: 4, pvp: 6, pvpCoins: 80, adena: '50M', requiresPrev: true },
  { level: 3, pAtk: 9, mAtk: 6, pvp: 9, pvpCoins: 110, adena: '75M', requiresPrev: true },
  { level: 4, pAtk: 12, mAtk: 8, pvp: 12, pvpCoins: 140, adena: '100M', requiresPrev: true },
  { level: 5, pAtk: 15, mAtk: 10, pvp: 15, pvpCoins: 170, adena: '125M', requiresPrev: true },
];

export const raidTokenDrops = [
  { key: 'normalRB', tokens: 1 },
  { key: 'queenAnt', tokens: 10 },
  { key: 'orfen', tokens: 15 },
  { key: 'zaken', tokens: 20 },
  { key: 'baium', tokens: 50 },
  { key: 'antharas', tokens: 200 },
  { key: 'valakas', tokens: 200 },
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
};
