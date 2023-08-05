import { customToFixed, getUUIDByName } from '@/app/api/utils';
import { Hypicle, HypicleError, Player } from 'hypicle';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const client = new Hypicle(process.env.HYPIXEL_API_KEY);
  const username = request.nextUrl.searchParams.get('username');

  if (!username)
    return NextResponse.json({
      success: false,
      message: 'Missing [username] param',
    });

  try {
    const uuid = await getUUIDByName(username);
    const player = new Player(client, uuid);

    const name = await player.getName();
    const level = await player.getExactLevel();
    const karma = (await player.getKarma()) || 0;

    const status = await player.getStatus();
    const rank = await player.getHighestRank();
    const socialsData = await player.getSocialMedia();
    const socials =
      socialsData !== null && socialsData.hasOwnProperty('links')
        ? socialsData
        : { ...socialsData, links: null };

    const firstLogin = (await player.get()).firstLogin;
    const lastLogin = (await player.get()).lastLogin;

    const achievements = (await player.get()).achievementPoints || 0;

    const playerGuildData = await player.getGuild();
    const guildData = {
      id: playerGuildData?._id,
      name: playerGuildData?.name,
      members: playerGuildData?.members.length,
      rank: playerGuildData?.members.find((member) => member.uuid === uuid)
        ?.rank,
      joined: playerGuildData?.members.find((member) => member.uuid === uuid)
        ?.joined,
      tag: playerGuildData?.tag,
      tagColor: playerGuildData?.tagColor,
    };
    const guild =
      Object.keys(guildData).length === 0 ||
      Object.values(guildData).every((value) => value === undefined)
        ? null
        : guildData;

    const playerStats = player.getStats();
    const bw = playerStats.getBedwars();
    const sw = playerStats.getSkyWars();

    const bedwars = {
      coins: (await bw.getCoins()) || 0,
      level: (await bw.getLevel()) || 0,
      winstreak: (await bw.getWinstreak()) || 0,
      emeralds: (await bw.getEmeraldsCollected()) || 0,
      diamonds: (await bw.getDiamondsCollected()) || 0,
      gold: (await bw.getGoldCollected()) || 0,
      iron: (await bw.getIronCollected()) || 0,
      kills: (await bw.getKills()) || 0,
      finalKills: (await bw.getFinalKills()) || 0,
      deaths: (await bw.getDeaths()) || 0,
      finalDeaths: (await bw.getFinalDeaths()) || 0,
      wins: (await bw.getWins()) || 0,
      losses: (await bw.getLosses()) || 0,
      bedsBroken: (await bw.getBedsBroken()) || 0,
    };

    const skywars = {
      coins: (await sw.getCoins()) || 0,
      level: customToFixed((await sw.getLevel()) || 0),
      winstreak: (await sw.getWinstreak()) || 0,
      kills: (await sw.getKills()) || 0,
      assists: (await sw.getAssists()) || 0,
      deaths: (await sw.getDeaths()) || 0,
      wins: (await sw.getWins()) || 0,
      losses: (await sw.getLosses()) || 0,
      souls: (await sw.getSouls()) || 0,
      soulsGathered: (await sw.getSoulsGathered()) || 0,
      soulWell: {
        uses: (await sw.getSoulWellUses()) || 0,
        legendaries: (await sw.getSoulWellLegendaries()) || 0,
        rares: (await sw.getSoulWellRares()) || 0,
      },
      eggs: await sw.getEggs(),
      enderpearls: (await sw.getEnderpearls()) || 0,
      arrows: {
        shot: (await sw.getArrowsShot()) || 0,
        hit: (await sw.getArrowsHit()) || 0,
      },
    };

    const stats = { bedwars, skywars };

    return NextResponse.json({
      success: true,
      uuid,
      name,
      firstLogin,
      lastLogin,
      level,
      karma,
      achievements,
      status,
      rank,
      socials,
      guild,
      stats,
    });
  } catch (err: any) {
    console.error(err);
    const error = err as HypicleError;
    if (error.status === 400)
      return NextResponse.json({
        success: false,
        message: "This player doesn't exist.",
      });
    else
      return NextResponse.json({
        success: false,
        message: 'An error occurred while fetching data.',
      });
  }
}
