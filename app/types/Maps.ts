export type Rank = {
  key: string;
  name: string;
  color: string;
  borderColor: string;
  nameColor: string;
};

export const rankMap: Rank[] = [
  {
    key: 'NONE',
    name: 'NORMAL',
    color: '#909296',
    borderColor: '#909296',
    nameColor: '#909296',
  },
  {
    key: 'NORMAL',
    name: 'NORMAL',
    color: '#909296',
    borderColor: '#909296',
    nameColor: '#909296',
  },
  {
    key: 'VIP',
    name: 'VIP',
    color: '#82C91E',
    borderColor: '#82C91E',
    nameColor: '#94D82D',
  },
  {
    key: 'VIP_PLUS',
    name: 'VIP+',
    color: '#82C91E',
    borderColor: '#82C91E',
    nameColor: '#94D82D',
  },
  {
    key: 'MVP',
    name: 'MVP',
    color: '#3BC9DB',
    borderColor: '#3BC9DB',
    nameColor: '#66D9E8',
  },
  {
    key: 'MVP_PLUS',
    name: 'MVP+',
    color: '#3BC9DB',
    borderColor: '#3BC9DB',
    nameColor: '#66D9E8',
  },
  {
    key: 'SUPERSTAR',
    name: 'MVP++',
    color: '#FAB005',
    borderColor: '#FAB005',
    nameColor: '#FCC419',
  },
  {
    key: 'ADMIN',
    name: 'ADMIN',
    color: '#F03E3E',
    borderColor: '#F03E3E',
    nameColor: '#FA5252',
  },
  {
    key: 'OWNER',
    name: 'OWNER',
    color: '#E03131',
    borderColor: '#E03131',
    nameColor: '#F03E3E',
  },
  {
    key: 'YOUTUBER',
    name: 'YOUTUBE',
    color: '#F03E3E',
    borderColor: '#909296',
    nameColor: '#FA5252',
  },
  {
    key: 'PIG',
    name: 'PIG+++',
    color: '#F06595',
    borderColor: '#F06595',
    nameColor: '#F783AC',
  },
];

export const guildRankMap = {
  GUILDMASTER: 'Guild Master',
  OFFICER: 'Officer',
  MEMBER: 'Member',
};

export const guildTagMap = {
  GRAY: '#868E96',
  GOLD: '#F59F00',
  DARK_AQUA: '#1098AD',
  DARK_GREEN: '#099268',
  YELLOW: '#FFD43B',
};

export const plusColorMap = {
  RED: '#FA5252',
  GOLD: '#FAB005',
  GREEN: '#82C91E',
  YELLOW: '#FFD43B',
  LIGHT_PURPLE: '#DA77F2',
  WHITE: '#E9ECEF',
  BLUE: '#4C6EF5',
  DARK_GREEN: '#099268',
  DARK_RED: '#A70808',
  DARK_AQUA: '#0B7285',
  DARK_PURPLE: '#862E9C',
  DARK_GRAY: '#495057',
  BLACK: '#141517',
};

export const gameTypeMap = {
  QUAKECRAFT: 'Quake',
  WALLS: 'Walls',
  PAINTBALL: 'Paintball',
  SURVIVAL_GAMES: 'Blitz Survival Games',
  TNTGAMES: 'TNT Games',
  VAMPIREZ: 'VampireZ',
  WALLS3: 'Mega Walls',
  ARCADE: 'Arcade',
  ARENA: 'Arena',
  UHC: 'UHC Champions',
  MCGO: 'Cops and Crims',
  BATTLEGROUND: 'Warlords',
  SUPER_SMASH: 'Smash Heroes',
  GINGERBREAD: 'Turbo Kart Racers',
  HOUSING: 'Housing',
  SKYWARS: 'SkyWars',
  TRUE_COMBAT: 'Crazy Walls',
  SPEED_UHC: 'Speed UHC',
  SKYCLASH: 'SkyClash',
  LEGACY: 'Classic Games',
  PROTOTYPE: 'Prototype',
  BEDWARS: 'Bed Wars',
  MURDER_MYSTERY: 'Murder Mystery',
  BUILD_BATTLE: 'Build Battle',
  DUELS: 'Duels',
  SKYBLOCK: 'SkyBlock',
  PIT: 'Pit',
  REPLAY: 'Replay',
  SMP: 'SMP',
  WOOL_GAMES: 'Wool Wars',
  MAIN: 'Main Hub',
};

export const gameNumTypeMap = {
  2: 'QUAKECRAFT',
  3: 'WALLS',
  4: 'PAINTBALL',
  5: 'SURVIVAL_GAMES',
  6: 'TNTGAMES',
  7: 'VAMPIREZ',
  13: 'WALLS3',
  14: 'ARCADE',
  17: 'ARENA',
  20: 'UHC',
  21: 'MCGO',
  23: 'BATTLEGROUND',
  24: 'SUPER_SMASH',
  25: 'GINGERBREAD',
  26: 'HOUSING',
  51: 'SKYWARS',
  52: 'TRUE_COMBAT',
  54: 'SPEED_UHC',
  55: 'SKYCLASH',
  56: 'LEGACY',
  57: 'PROTOTYPE',
  58: 'BEDWARS',
  59: 'MURDER_MYSTERY',
  60: 'BUILD_BATTLE',
  61: 'DUELS',
  63: 'SKYBLOCK',
  64: 'PIT',
  65: 'REPLAY',
  67: 'SMP',
  68: 'WOOL_GAMES',
};
