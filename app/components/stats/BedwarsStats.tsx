import TitleContent from '@/app/components/TitleContent';
import { BedwarsDataResponse } from '@/app/types/StatsProps';
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

export default function BedwarsStats({
  coins,
  level,
  winstreak,
  emeralds,
  diamonds,
  gold,
  iron,
  kills,
  finalKills,
  deaths,
  finalDeaths,
  wins,
  losses,
  bedsBroken,
}: BedwarsDataResponse) {
  const { classes, cx } = useStyles();

  return (
    <Card shadow="sm" padding="md" radius="sm" withBorder>
      <Card.Section className={classes.section}>
        <TitleContent title="Level" content={level} />
        <TitleContent title="Coins" content={coins.toLocaleString('en')} />
        <TitleContent
          title="Winstreak"
          content={winstreak.toLocaleString('en')}
        />
      </Card.Section>
      <Card.Section className={classes.section}>
        <TitleContent title="Kills" content={kills.toLocaleString('en')} />
        <TitleContent title="Deaths" content={deaths.toLocaleString('en')} />
        <TitleContent title="K/D Ratio" content={kd_ratio(kills, deaths)} />

        <Space h="xs" />

        <TitleContent
          title="Final Kills"
          content={finalKills.toLocaleString('en')}
        />
        <TitleContent
          title="Final Deaths"
          content={finalDeaths.toLocaleString('en')}
        />
        <TitleContent
          title="Final K/D Ratio"
          content={kd_ratio(finalKills, finalDeaths)}
        />
      </Card.Section>
      <Card.Section className={classes.section}>
        <TitleContent title="Wins" content={wins.toLocaleString('en')} />
        <TitleContent title="Losses" content={losses.toLocaleString('en')} />
        <TitleContent title="W/L Ratio" content={wl_ratio(wins, losses)} />
      </Card.Section>
      <Card.Section className={classes.section}>
        <TitleContent
          title="Emeralds Collected"
          content={emeralds.toLocaleString('en')}
        />
        <TitleContent
          title="Diamonds Collected"
          content={diamonds.toLocaleString('en')}
        />
        <TitleContent
          title="Gold Collected"
          content={gold.toLocaleString('en')}
        />
        <TitleContent
          title="Iron Collected"
          content={iron.toLocaleString('en')}
        />

        <Space h="xs" />

        <TitleContent
          title="Beds Broken"
          content={bedsBroken.toLocaleString('en')}
        />
      </Card.Section>
    </Card>
  );
}
