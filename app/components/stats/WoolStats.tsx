import TitleContent from '@/app/components/TitleContent';
import { WoolDataResponse } from '@/app/types/StatsProps';
import { kd_ratio, wl_ratio } from '@/app/utils/utils';
import { Card, createStyles, rem } from '@mantine/core';

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

export default function WoolStats({
  wool,
  exp,
  kills,
  assists,
  deaths,
  wins,
  played,
  woolPlaced,
  blocksBroken,
  powerups,
}: WoolDataResponse) {
  const { classes, cx } = useStyles();

  return (
    <Card shadow="sm" padding="md" radius="sm" withBorder>
      <Card.Section className={classes.section}>
        <TitleContent title="Wool" content={wool.toLocaleString('en')} />
        <TitleContent
          title="Experience"
          content={parseFloat(exp.toFixed(2)).toLocaleString('en')}
        />
      </Card.Section>
      <Card.Section className={classes.section}>
        <TitleContent title="Kills" content={kills.toLocaleString('en')} />
        <TitleContent title="Assists" content={assists.toLocaleString('en')} />
        <TitleContent title="Deaths" content={deaths.toLocaleString('en')} />
        <TitleContent title="K/D Ratio" content={kd_ratio(kills, deaths)} />
      </Card.Section>
      <Card.Section className={classes.section}>
        <TitleContent title="Wins" content={wins.toLocaleString('en')} />
        <TitleContent
          title="Games Played"
          content={played.toLocaleString('en')}
        />
        <TitleContent
          title="W/L Ratio"
          content={wl_ratio(wins, played - wins)}
        />
      </Card.Section>
      <Card.Section className={classes.section}>
        <TitleContent
          title="Blocks Broken"
          content={blocksBroken.toLocaleString('en')}
        />
        <TitleContent
          title="Wool Placed"
          content={woolPlaced.toLocaleString('en')}
        />
        <TitleContent
          title="Powerups Gotten"
          content={powerups.toLocaleString('en')}
        />
      </Card.Section>
    </Card>
  );
}
