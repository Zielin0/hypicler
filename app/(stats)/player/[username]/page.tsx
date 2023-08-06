'use client';

import PlayerProfileCard from '@/app/components/PlayerProfileCard';
import ArcadeStats from '@/app/components/stats/ArcadeStats';
import BedwarsStats from '@/app/components/stats/BedwarsStats';
import DuelsStats from '@/app/components/stats/DuelsStats';
import McgoStats from '@/app/components/stats/McgoStats';
import SkywarsStats from '@/app/components/stats/SkywarsStats';
import TntStats from '@/app/components/stats/TntStats';
import WoolStats from '@/app/components/stats/WoolStats';
import { PlayerCardGuildProps } from '@/app/types/PlayerCardGuildProps';
import {
  ArcadeData,
  BedwarsDataResponse,
  DuelsDataResponse,
  McgoDataResponse,
  SkywarsDataResponse,
  TNTGamesResponse,
  WoolDataResponse,
} from '@/app/types/StatsProps';
import { fetcher } from '@/app/utils/utils';
import {
  Accordion,
  Alert,
  Loader,
  ScrollArea,
  createStyles,
  rem,
} from '@mantine/core';
import {
  IconAlertCircle,
  IconBed,
  IconBomb,
  IconBrandAppleArcade,
  IconNeedleThread,
  IconSword,
  IconSwords,
  IconTank,
} from '@tabler/icons-react';
import { Session, SocialMedia } from 'hypicle';
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
  stats: {
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
  stats: {
    bedwars: BedwarsDataResponse;
    skywars: SkywarsDataResponse;
    duels: DuelsDataResponse;
    wool: WoolDataResponse;
    mcgo: McgoDataResponse;
    tnt: TNTGamesResponse;
    arcade: ArcadeData;
  };
}

const stats = [
  {
    key: 'bedwars',
    title: 'Bed Wars',
    icon: IconBed,
  },
  {
    key: 'skywars',
    title: 'Sky Wars',
    icon: IconSword,
  },
  {
    key: 'duels',
    title: 'Duels',
    icon: IconSwords,
  },
  {
    key: 'wool',
    title: 'Wool Wars',
    icon: IconNeedleThread,
  },
  {
    key: 'mcgo',
    title: 'Cops and Crims',
    icon: IconTank,
  },
  {
    key: 'tnt',
    title: 'TNT Games',
    icon: IconBomb,
    component: TntStats,
  },
  {
    key: 'arcade',
    title: 'Arcade',
    icon: IconBrandAppleArcade,
  },
];

export default function Page({ params }: { params: { username: string } }) {
  const { classes, cx } = useStyles();
  const { data, error, isLoading } = useSWR<PlayerDataResponse>(
    `/api/player?username=${params.username}`,
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

  const sorted = [...stats].sort((a, b) => a.title.localeCompare(b.title));
  const items = sorted.map((item) => (
    <Accordion.Item key={item.key} value={item.key}>
      <Accordion.Control icon={<item.icon size={rem(30)} />}>
        {item.title}
      </Accordion.Control>
      <Accordion.Panel>
        {item.key === 'bedwars' && <BedwarsStats {...data.stats.bedwars} />}
        {item.key === 'skywars' && <SkywarsStats {...data.stats.skywars} />}
        {item.key === 'duels' && <DuelsStats {...data.stats.duels} />}
        {item.key === 'wool' && <WoolStats {...data.stats.wool} />}
        {item.key === 'mcgo' && <McgoStats {...data.stats.mcgo} />}
        {item.key === 'tnt' && <TntStats {...data.stats.tnt} />}
        {item.key === 'arcade' && <ArcadeStats {...data.stats.arcade} />}
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <ScrollArea h={750}>
      <div className={classes.root}>
        <div className={classes.profile}>
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
        <Accordion variant="separated" className={classes.stats}>
          {items}
        </Accordion>
      </div>
    </ScrollArea>
  );
}
