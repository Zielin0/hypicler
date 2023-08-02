'use client';

import PlayerProfileCard from '@/app/components/PlayerProfileCard';
import { PlayerCardGuildProps } from '@/app/types/PlayerCardGuildProps';
import { Alert, Loader, createStyles } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import { Session, SocialMedia } from 'hypicle';
import { useEffect, useState } from 'react';

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

async function fetchData(url: string): Promise<PlayerDataResponse> {
  const response = await fetch(url);
  return await response.json();
}

function getRank(username: string, rank: string): string {
  switch (username.toLowerCase()) {
    case 'hypixel':
    case 'rezzus':
      return 'OWNER';
    case 'technoblade':
      return 'PIG';
    default:
      return rank;
  }
}

// TODO: OWNER rank for hypixel & rezzus and PIG+++ rank for technoblade
export default function Page({ params }: { params: { username: string } }) {
  const { classes, cx } = useStyles();
  const [data, setData] = useState<PlayerDataResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDataAsync() {
      try {
        const fetched = await fetchData(
          `/api/player?username=${params.username}`
        );
        setData(fetched);
      } catch (error) {
        setError('An error occurred while fetching data.');
      }
    }

    fetchDataAsync();
  }, []);

  return (
    <>
      {data ? (
        data.success ? (
          <div className={classes.container}>
            <PlayerProfileCard
              name={data.name}
              firstLogin={data.firstLogin}
              lastLogin={data.lastLogin}
              level={data.level}
              karma={data.karma}
              achievements={data.achievements}
              status={data.status}
              rank={getRank(data.name, data.rank)}
              socials={data.socials}
              guild={data.guild}
            />
          </div>
        ) : (
          <div className={classes.centered}>
            <Alert
              icon={<IconAlertCircle size="1.5rem" />}
              title="Something went wrong!"
              color="red"
              pr="lg"
            >
              {data.message}
            </Alert>
          </div>
        )
      ) : (
        <div className={classes.centered}>
          <Loader size={100} />
        </div>
      )}
    </>
  );
}
