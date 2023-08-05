'use client';

import BedwarsStats from '@/app/components/BedwarsStats';
import DuelsStats from '@/app/components/DuelsStats';
import McgoStats from '@/app/components/McgoStats';
import PlayerProfileCard from '@/app/components/PlayerProfileCard';
import SkywarsStats from '@/app/components/SkywarsStats';
import TntStats from '@/app/components/TntStats';
import WoolStats from '@/app/components/WoolStats';
import { PlayerCardGuildProps } from '@/app/types/PlayerCardGuildProps';
import {
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
  };
}

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
          <Accordion.Item value="bedwars">
            <Accordion.Control icon={<IconBed size={rem(30)} />}>
              Bed Wars
            </Accordion.Control>
            <Accordion.Panel>
              <BedwarsStats {...data.stats.bedwars} />
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="skywars">
            <Accordion.Control icon={<IconSword size={rem(30)} />}>
              Sky Wars
            </Accordion.Control>
            <Accordion.Panel>
              <SkywarsStats {...data.stats.skywars} />
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="duels">
            <Accordion.Control icon={<IconSwords size={rem(30)} />}>
              Duels
            </Accordion.Control>
            <Accordion.Panel>
              <DuelsStats {...data.stats.duels} />
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="wool">
            <Accordion.Control icon={<IconNeedleThread size={rem(30)} />}>
              Wool Wars
            </Accordion.Control>
            <Accordion.Panel>
              <WoolStats {...data.stats.wool} />
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="mcgo">
            <Accordion.Control icon={<IconTank size={rem(30)} />}>
              Cops and Crims
            </Accordion.Control>
            <Accordion.Panel>
              <McgoStats {...data.stats.mcgo} />
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="tnt">
            <Accordion.Control icon={<IconBomb size={rem(30)} />}>
              TNT Games
            </Accordion.Control>
            <Accordion.Panel>
              <TntStats {...data.stats.tnt} />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    </ScrollArea>
  );
}
