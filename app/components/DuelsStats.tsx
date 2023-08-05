import TitleContent from '@/app/components/TitleContent';
import { DuelsDataResponse } from '@/app/types/StatsProps';
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

export default function DuelsStats({
  coins,
  kills,
  deaths,
  wins,
  losses,
  arrows,
  melee,
}: DuelsDataResponse) {
  const { classes, cx } = useStyles();

  return (
    <Card shadow="sm" padding="md" radius="sm" withBorder>
      <Card.Section className={classes.section}>
        <TitleContent title="Coins" content={coins.toLocaleString('en')} />

        <Space h="xs" />

        <TitleContent title="Kills" content={kills.toLocaleString('en')} />
        <TitleContent title="Deaths" content={deaths.toLocaleString('en')} />
        <TitleContent title="K/D Ratio" content={kd_ratio(kills, deaths)} />
      </Card.Section>
      <Card.Section className={classes.section}>
        <TitleContent title="Wins" content={wins.toLocaleString('en')} />
        <TitleContent title="Losses" content={losses.toLocaleString('en')} />
        <TitleContent title="W/L Ratio" content={wl_ratio(wins, losses)} />
      </Card.Section>
      <Card.Section className={classes.section}>
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

        <Space h="xs" />

        <TitleContent
          title="Melee Swings"
          content={melee.swung.toLocaleString('en')}
        />
        <TitleContent
          title="Melee Hit"
          content={melee.hit.toLocaleString('en')}
        />
        <TitleContent
          title="Melee Hit/Miss Ratio"
          content={hm_ratio(melee.hit, melee.swung)}
        />
      </Card.Section>
    </Card>
  );
}
