import { getUUIDByName } from '@/app/api/utils';
import { Hypicle, Player } from 'hypicle';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const client = new Hypicle(process.env.HYPIXEL_API_KEY);
  const username = request.nextUrl.searchParams.get('username');

  if (!username)
    return NextResponse.json({
      success: false,
      message: 'Missing username param',
    });

  const uuid = await getUUIDByName(username);
  const player = new Player(client, uuid);

  const name = await player.getName();
  const level = await player.getExactLevel();
  const karma = await player.getKarma();
  const status = await player.getStatus();
  const rank = await player.getHighestRank();
  const socials = await player.getSocialMedia();
  const firstLogin = (await player.get())!.firstLogin;
  const lastLogin = (await player.get())!.lastLogin;

  return NextResponse.json({
    uuid,
    name,
    firstLogin,
    lastLogin,
    level,
    karma,
    status,
    rank,
    socials,
  });
}
