export interface BedwarsDataResponse {
  coins: number;
  level: number;
  winstreak: number;
  emeralds: number;
  diamonds: number;
  gold: number;
  iron: number;
  kills: number;
  finalKills: number;
  deaths: number;
  finalDeaths: number;
  wins: number;
  losses: number;
  bedsBroken: number;
}

export interface SkywarsDataResponse {
  coins: number;
  level: number;
  winstreak: number;
  kills: number;
  assists: number;
  deaths: number;
  wins: number;
  losses: number;
  souls: number;
  soulsGathered: number;
  soulWell: {
    uses: number;
    legendaries: number;
    rares: number;
  };
  eggs: number;
  enderpearls: number;
  arrows: {
    shot: number;
    hit: number;
  };
}

export interface DuelsDataResponse {
  coins: number;
  kills: number;
  deaths: number;
  wins: number;
  losses: number;
  arrows: {
    shot: number;
    hit: number;
  };
  melee: {
    swung: number;
    hit: number;
  };
}

export interface WoolDataResponse {
  wool: number;
  exp: number;
  kills: number;
  assists: number;
  deaths: number;
  wins: number;
  played: number;
  woolPlaced: number;
  blocksBroken: number;
  powerups: number;
}

export interface McgoDataResponse {
  coins: number;
  kills: number;
  headshots: number;
  deaths: number;
  gameWins: number;
  played: number;
  roundWins: number;
  shots: number;
  dmKills: number;
  bombsPlanted: number;
  bombsDefused: number;
}

export interface TNTGamesResponse {
  coins: number;
  tntRun: {
    wins: number;
    deaths: number;
    record: number;
  };
  pvpRun: {
    wins: number;
    kills: number;
    deaths: number;
    record: number;
  };
  tntag: {
    wins: number;
    kills: number;
    deaths: number;
  };
  bowspleef: {
    wins: number;
    losses: number;
  };
  wizards: {
    wins: number;
    kills: number;
    assists: number;
    deaths: number;
  };
}

export interface ArcadeData {
  coins: number;
  pixelParty: {
    wins: number;
    played: number;
    powerups: number;
  };
  hns: {
    seekerWins: number;
    hiderWins: number;
    ppSeekerWins: number;
    ppHiderWins: number;
  };
  winsHypixelSays: number;
  winsMiniWalls: number;
  winsPartyGames: number;
}
