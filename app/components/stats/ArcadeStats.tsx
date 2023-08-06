import TitleContent from '@/app/components/TitleContent';
import { ArcadeData } from '@/app/types/StatsProps';
import { Card, Space, Text, createStyles, rem } from '@mantine/core';
import { wl_ratio } from '../../utils/utils';

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

export default function ArcadeStats({
  coins,
  pixelParty,
  hns,
  winsHypixelSays,
  winsMiniWalls,
  winsPartyGames,
}: ArcadeData) {
  const { classes, cx } = useStyles();

  return (
    <Card shadow="sm" padding="md" radius="sm" withBorder>
      <Card.Section className={classes.section}>
        <TitleContent title="Coins" content={coins.toLocaleString('en')} />

        <Space h="xs" />

        <TitleContent
          title="Hypixel Says Wins"
          content={winsHypixelSays.toLocaleString('en')}
        />
        <TitleContent
          title="Mini Walls Wins"
          content={winsMiniWalls.toLocaleString('en')}
        />
        <TitleContent
          title="Party Games Wins"
          content={winsPartyGames.toLocaleString('en')}
        />
      </Card.Section>
      <Card.Section className={classes.section}>
        <Text fz="md" fw={700} mb={2}>
          Pixel Party
        </Text>
        <TitleContent
          title="Wins"
          content={pixelParty.wins.toLocaleString('en')}
        />
        <TitleContent
          title="Games Played"
          content={pixelParty.played.toLocaleString('en')}
        />
        <TitleContent
          title="W/L Ratio"
          content={wl_ratio(pixelParty.wins, pixelParty.played)}
        />
        <TitleContent
          title="Powerups Gotten"
          content={pixelParty.powerups.toLocaleString('en')}
        />
      </Card.Section>
      <Card.Section className={classes.section}>
        <Text fz="md" fw={700} mb={2}>
          Hide & Seek
        </Text>
        <TitleContent
          title="Seeker Wins"
          content={hns.seekerWins.toLocaleString('en')}
        />
        <TitleContent
          title="Hider Wins"
          content={hns.hiderWins.toLocaleString('en')}
        />
        <TitleContent
          title="Party Pooper Seeker Wins"
          content={hns.ppSeekerWins.toLocaleString('en')}
        />
        <TitleContent
          title="Party Pooper Hider Wins"
          content={hns.ppHiderWins.toLocaleString('en')}
        />
      </Card.Section>
    </Card>
  );
}
