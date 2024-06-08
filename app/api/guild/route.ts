import { getUUIDByName } from '@/app/api/utils';
import { GuildInput } from '@/app/types/GuildInput';
import { Guild, Hypicle, HypicleError, Player } from 'hypicle';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id');
  const type = request.nextUrl.searchParams.get('type') as GuildInput;

  if (!id || !type)
    return NextResponse.json({
      success: false,
      message: 'Missing [id] or [type] param',
    });

  if (
    type !== GuildInput.id &&
    type !== GuildInput.name &&
    type !== GuildInput.player
  )
    return NextResponse.json({
      success: false,
      message: 'Invalid [type] param',
    });

  const client = new Hypicle(process.env.HYPIXEL_API_KEY);

  try {
    const guildID = type === 'player' ? await getUUIDByName(id) : id;
    const g = new Guild(client, guildID, type);

    if ((await g.get()) === null)
      return NextResponse.json({
        success: false,
        message: "This guild doesn't exist.",
      });

    const members = (await g.getMembers()).map(async (member) => {
      const player = new Player(client, member.uuid);

      return {
        guildRank: member.rank,
        joined: member.joined,
        name: await player.getName(),
        rank: await player.getHighestRank(),
        plusColor: (await player.getPlusColor()) || 'NONE',
      };
    });

    const guild = {
      id: await g.getID(),
      name: await g.getName(),
      description: await g.getDescription(),
      level: await g.getLevel(),
      tag: {
        tag: await g.getTag(),
        tagColor: await g.getTagColor(),
      },
      membersCount: await g.getMembersCount(),
      created: await g.getCreatedAt(),
      coins: await g.getCoins(),
      coinsEver: await g.getCoinsEver(),
      publiclyListed: (await g.isPubliclyListed()) || false,
      legacyRanking: (await g.getLegacyRanking()) || null,
      preferredGames: await g.getPreferredGames(),
      members: await Promise.all(members),
    };

    return NextResponse.json({
      success: true,
      ...guild,
    });
  } catch (err: any) {
    const error = err as HypicleError;
    if (error.status === 429)
      return NextResponse.json({
        success: false,
        message: 'Key throttle. Please try again later.',
      });
    else
      return NextResponse.json({
        success: false,
        message: 'An error occurred while fetching data.',
      });
  }
}
