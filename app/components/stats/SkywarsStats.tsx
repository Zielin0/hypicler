import TitleContent from '@/app/components/TitleContent';
import { SkywarsDataResponse } from '@/app/types/StatsProps';
import { hm_ratio, kd_ratio, wl_ratio } from '@/app/utils/utils';
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

export default function SkywarsStats({
  coins,
  level,
  winstreak,
  kills,
  assists,
  deaths,
  wins,
  losses,
  souls,
  soulsGathered,
  soulWell,
  eggs,
  enderpearls,
  arrows,
}: SkywarsDataResponse) {
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
        <TitleContent title="Assists" content={assists.toLocaleString('en')} />
        <TitleContent title="Deaths" content={deaths.toLocaleString('en')} />
        <TitleContent title="K/D Ratio" content={kd_ratio(kills, deaths)} />
      </Card.Section>
      <Card.Section className={classes.section}>
        <TitleContent title="Wins" content={wins.toLocaleString('en')} />
        <TitleContent title="Losses" content={losses.toLocaleString('en')} />
        <TitleContent title="W/L Ratio" content={wl_ratio(wins, losses)} />
      </Card.Section>
      <Card.Section className={classes.section}>
        <TitleContent title="Eggs Thrown" content={eggs.toLocaleString('en')} />
        <TitleContent
          title="Enderpearls Thrown"
          content={enderpearls.toLocaleString('en')}
        />

        <Space h="xs" />

        <TitleContent
          title="Arrows Shot"
          content={arrows.shot.toLocaleString('en')}
        />
        <TitleContent
          title="Arrows Hit"
          content={arrows.hit.toLocaleString('en')}
        />
        <TitleContent
          title="Arrow Hit/Miss Ratio"
          content={hm_ratio(arrows.hit, arrows.shot)}
        />
      </Card.Section>
      <Card.Section className={classes.section}>
        <TitleContent title="Souls" content={souls.toLocaleString('en')} />
        <TitleContent
          title="Souls Gathered"
          content={soulsGathered.toLocaleString('en')}
        />

        <Space h="xs" />

        <TitleContent
          title="Soul Well Uses"
          content={soulWell.uses.toLocaleString('en')}
        />
        <TitleContent
          title="Soul Well Legendaries"
          content={soulWell.legendaries.toLocaleString('en')}
        />
        <TitleContent
          title="Soul Well Rares"
          content={soulWell.rares.toLocaleString('en')}
        />
      </Card.Section>
    </Card>
  );
}
