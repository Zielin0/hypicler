'use client';

import PlayerProfileCard from '@/app/components/PlayerProfileCard';
import { PlayerCardGuildProps } from '@/app/types/PlayerCardGuildProps';
import { fetcher } from '@/app/utils/utils';
import { Alert, Loader, createStyles } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import { Session, SocialMedia } from 'hypicle';
import useSWR from 'swr';

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'left',
  },
  centered: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
}));

interface PlayerDataResponse {
  success: boolean;
  message?: string;
  name: string;
  firstLogin: number;
  lastLogin: number;
  level: number;
  karma: number;
  achievements: number;
  status: Session;
  rank: string;
  socials: SocialMedia;
  guild: PlayerCardGuildProps | null;
}

export default function Page({ params }: { params: { username: string } }) {
  const { classes, cx } = useStyles();
  const { data, error, isLoading } = useSWR<PlayerDataResponse>(
    `/api/player?username=${params.username}`,
    fetcher
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
          An error occurred while fetching data
        </Alert>
      </div>
    );

  return (
    <>
      <div className={classes.container}>
        <PlayerProfileCard
          name={data.name}
          firstLogin={data.firstLogin}
          lastLogin={data.lastLogin}
          level={data.level}
          karma={data.karma}
          achievements={data.achievements}
          status={data.status}
          rank={data.rank}
          socials={data.socials}
          guild={data.guild}
        />
      </div>
    </>
  );
}
