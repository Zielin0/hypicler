'use client';

import GuildProfileCard from '@/app/components/GuildProfileCard';
import PlayerName from '@/app/components/PlayerName';
import { GuildInput } from '@/app/types/GuildInput';
import { GuildTag } from '@/app/types/GuildProps';
import { guildRankMap } from '@/app/types/Maps';
import { dateFormat, fetcher } from '@/app/utils/utils';
import { Alert, Loader, ScrollArea, Table, createStyles } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconAlertCircle } from '@tabler/icons-react';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: theme.spacing.md,
    [theme.fn.smallerThan('md')]: {
      display: 'block',
      marginRight: 0,
    },
  },
  profile: {
    [theme.fn.smallerThan('md')]: {
      marginBottom: theme.spacing.lg,
    },
  },
  memberTable: {
    flex: '0 0 50%',
    display: 'flex',
    flexDirection: 'column',
    width: 400,
    [theme.fn.smallerThan('lg')]: {
      width: 350,
    },
    [theme.fn.smallerThan('sm')]: {
      width: 290,
    },
  },
  centered: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  playerLink: {
    textDecoration: 'none',
  },
  padded: {
    padding: theme.spacing.xs,
  },
}));

interface GuildMemberData {
  guildRank: string;
  joined: number;
  name: string;
  rank: string;
  plusColor: string;
}

interface GuildDataResponse {
  success: boolean;
  message?: string;
  name: string;
  description: string | null;
  level: number;
  tag: GuildTag;
  membersCount: number;
  created: number;
  coins: number;
  coinsEver: number;
  publiclyListed: boolean;
  legacyRanking: number;
  preferredGames: string[] | null;
  members: GuildMemberData[];
}

export default function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') as GuildInput;

  const mobile = useMediaQuery('(max-width: 880px)');

  const { classes, cx } = useStyles();
  const { data, error, isLoading } = useSWR<GuildDataResponse>(
    `/api/guild?id=${params.id}&type=${type}`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  if (isLoading)
    return (
      <div className={classes.centered}>
        <Loader size={100} />
      </div>
    );
  if (error || !data?.success)
    return (
      <div className={classes.centered}>
        <Alert
          icon={<IconAlertCircle size="1.5rem" />}
          title="Something went wrong!"
          color="red"
          pr="lg"
        >
          {data?.success !== undefined && !data?.success ? (
            <>{data?.message}</>
          ) : (
            <>An error occurred while fetching data</>
          )}
        </Alert>
      </div>
    );

  const members = data.members;

  /**
   * This sorting isn't working as it should
   * it should display ranks in following order:
   * GUILD MASTER
   * OFFICER
   * CUSTOM RANKS
   * MEMBER
   * But it for some reason does not.
   * At least the guild master is at the top.
   */
  const compareRanks = (a: GuildMemberData, b: GuildMemberData): number => {
    const rankOrder: Record<string, number> = {
      GUILDMASTER: 0,
      OFFICER: 1,
      MEMBER: 3,
    };

    const rankA = rankOrder[a.guildRank];
    const rankB = rankOrder[b.guildRank];

    if (rankA === undefined && rankB === undefined) return 0;
    if (rankA === undefined) return 1;
    if (rankB === undefined) return -1;

    return rankA - rankB;
  };

  members.sort(compareRanks);

  const memberList = members.map((member) => (
    <tr key={member.name}>
      <td>
        <Link
          href={`/player/${member.name}`}
          className={classes.playerLink}
          aria-label={`${member.name}'s Profile`}
        >
          <PlayerName
            username={member.name}
            rank={member.rank}
            plusColor={member.plusColor}
            guildTag={{ tag: undefined, tagColor: undefined }}
          />
        </Link>
      </td>
      <td>
        {guildRankMap[member.guildRank as keyof typeof guildRankMap] ||
          member.guildRank}
      </td>
      <td>{dayjs(member.joined).format(dateFormat)}</td>
    </tr>
  ));

  const mobileMemberList = members.map((member) => (
    <tr key={member.name}>
      <th>
        <tr>Name:</tr>
        <tr>Rank:</tr>
        <tr>Joined:</tr>
      </th>
      <div className={classes.padded}>
        <tr>
          <Link
            href={`/player/${member.name}`}
            className={classes.playerLink}
            aria-label={`${member.name}'s Profile`}
            passHref
          >
            <PlayerName
              username={member.name}
              rank={member.rank}
              plusColor={member.plusColor}
              guildTag={{ tag: undefined, tagColor: undefined }}
            />
          </Link>
        </tr>
        <tr>
          {guildRankMap[member.guildRank as keyof typeof guildRankMap] ||
            member.guildRank}
        </tr>
        <tr>{dayjs(member.joined).format(dateFormat)}</tr>
      </div>
    </tr>
  ));

  return (
    <ScrollArea h={750}>
      <div className={classes.root}>
        <div className={classes.profile}>
          <GuildProfileCard
            name={data.name}
            description={data.description}
            level={data.level}
            tag={data.tag}
            members={data.membersCount}
            created={data.created}
            coins={data.coins}
            coinsEver={data.coinsEver}
            publiclyListed={data.publiclyListed}
            legacyRank={data.legacyRanking}
            preferredGames={data.preferredGames}
          />
        </div>
        <div className={classes.memberTable}>
          <Table withBorder striped withColumnBorders={mobile}>
            {!mobile && (
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Rank</th>
                  <th>Joined</th>
                </tr>
              </thead>
            )}
            <tbody>{mobile ? mobileMemberList : memberList}</tbody>
          </Table>
        </div>
      </div>
    </ScrollArea>
  );
}
