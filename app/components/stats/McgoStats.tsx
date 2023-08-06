import TitleContent from '@/app/components/TitleContent';
import { McgoDataResponse } from '@/app/types/StatsProps';
import { kd_ratio, wl_ratio } from '@/app/utils/utils';
import { Card, Space, createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  section: {
    padding: theme.spacing.sm,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export default function McgoStats({
  coins,
  kills,
  headshots,
  deaths,
  gameWins,
  played,
  roundWins,
  shots,
  dmKills,
  bombsPlanted,
  bombsDefused,
}: McgoDataResponse) {
  const { classes, cx } = useStyles();

  return (
    <Card shadow="sm" padding="md" radius="sm" withBorder>
      <Card.Section className={classes.section}>
        <TitleContent title="Coins" content={coins.toLocaleString('en')} />

        <Space h="xs" />

        <TitleContent title="Kills" content={kills.toLocaleString('en')} />
        <TitleContent
          title="Headshots"
          content={headshots.toLocaleString('en')}
        />
        <TitleContent title="Deaths" content={deaths.toLocaleString('en')} />
        <TitleContent title="K/D Ratio" content={kd_ratio(kills, deaths)} />
      </Card.Section>
      <Card.Section className={classes.section}>
        <TitleContent
          title="Game Wins"
          content={gameWins.toLocaleString('en')}
        />
        <TitleContent
          title="Games Played"
          content={played.toLocaleString('en')}
        />
        <TitleContent title="W/L Ratio" content={wl_ratio(gameWins, played)} />
        <TitleContent
          title="Round Wins"
          content={roundWins.toLocaleString('en')}
        />
      </Card.Section>
      <Card.Section className={classes.section}>
        <TitleContent
          title="Shots Fired"
          content={shots.toLocaleString('en')}
        />
        <TitleContent
          title="Deathmatch Kills"
          content={dmKills.toLocaleString('en')}
        />

        <Space h="xs" />

        <TitleContent
          title="Bombs Planted"
          content={bombsPlanted.toLocaleString('en')}
        />
        <TitleContent
          title="Bombs Defused"
          content={bombsDefused.toLocaleString('en')}
        />
      </Card.Section>
    </Card>
  );
}
