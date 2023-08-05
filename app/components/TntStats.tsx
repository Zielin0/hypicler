import TitleContent from '@/app/components/TitleContent';
import { TNTGamesResponse } from '@/app/types/StatsProps';
import { kd_ratio, secondsToMMSS } from '@/app/utils/utils';
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

export default function TntStats({
  coins,
  tntRun,
  pvpRun,
  tntag,
  bowspleef,
  wizards,
}: TNTGamesResponse) {
  const { classes, cx } = useStyles();

  return (
    <Card shadow="sm" padding="md" radius="sm" withBorder>
      <Card.Section className={classes.section}>
        <TitleContent title="Coins" content={coins.toLocaleString('en')} />

        <Space h="xs" />

        <TitleContent
          title="TNT Run Wins"
          content={tntRun.wins.toLocaleString('en')}
        />
        <TitleContent
          title="TNT Run Deaths"
          content={tntRun.deaths.toLocaleString('en')}
        />
        <TitleContent
          title="TNT Run Record"
          content={secondsToMMSS(tntRun.record)}
        />
      </Card.Section>
      <Card.Section className={classes.section}>
        <TitleContent
          title="PVP Run Wins"
          content={pvpRun.wins.toLocaleString('en')}
        />
        <TitleContent
          title="PVP Run Kills"
          content={pvpRun.kills.toLocaleString('en')}
        />
        <TitleContent
          title="PVP Run Deaths"
          content={pvpRun.deaths.toLocaleString('en')}
        />
        <TitleContent
          title="PVP Run Record"
          content={secondsToMMSS(pvpRun.record)}
        />
      </Card.Section>
      <Card.Section className={classes.section}>
        <TitleContent
          title="TNTag Wins"
          content={tntag.wins.toLocaleString('en')}
        />
        <TitleContent
          title="TNTag Kills"
          content={tntag.kills.toLocaleString('en')}
        />
        <TitleContent
          title="TNTag Wins"
          content={tntag.deaths.toLocaleString('en')}
        />
      </Card.Section>
      <Card.Section className={classes.section}>
        <TitleContent
          title="Bowspleef Wins"
          content={bowspleef.wins.toLocaleString('en')}
        />
        <TitleContent
          title="Bowspleef Losses"
          content={bowspleef.losses.toLocaleString('en')}
        />
      </Card.Section>
      <Card.Section className={classes.section}>
        <TitleContent
          title="Wizards Wins"
          content={wizards.wins.toLocaleString('en')}
        />
        <TitleContent
          title="Wizards Kills"
          content={wizards.kills.toLocaleString('en')}
        />
        <TitleContent
          title="Wizards Assists"
          content={wizards.assists.toLocaleString('en')}
        />
        <TitleContent
          title="Wizards Deaths"
          content={wizards.deaths.toLocaleString('en')}
        />
        <TitleContent
          title="Wizards K/D Ratio"
          content={kd_ratio(wizards.kills, wizards.deaths)}
        />
      </Card.Section>
    </Card>
  );
}
