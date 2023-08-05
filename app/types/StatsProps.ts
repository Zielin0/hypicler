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
