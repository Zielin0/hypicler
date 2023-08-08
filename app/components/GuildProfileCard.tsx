import TitleContent from '@/app/components/TitleContent';
import { GuildTag } from '@/app/types/GuildProps';
import { gameTypeMap, guildTagMap } from '@/app/types/Maps';
import { dateFormat } from '@/app/utils/utils';
import { Card, Space, Text, createStyles, rem } from '@mantine/core';
import dayjs from 'dayjs';

const useStyles = createStyles((theme) => ({
  card: {
    width: 375,
    [theme.fn.smallerThan('lg')]: {
      width: 350,
    },
    [theme.fn.smallerThan('sm')]: {
      width: 290,
    },
  },
  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const GuildTagDisplay = ({ tag, tagColor }: GuildTag) => {
  return (
    <Text
      span
      color={
        guildTagMap[tagColor as keyof typeof guildTagMap] || guildTagMap['GRAY']
      }
    >
      [{tag}]
    </Text>
  );
};

interface GuildCardProps {
  name: string;
  description: string | null;
  level: number;
  tag: GuildTag;
  members: number;
  created: number;
  coins: number;
  coinsEver: number;
  publiclyListed: boolean;
  legacyRank: number;
  preferredGames: string[] | null;
}

export default function GuildProfileCard({
  name,
  description,
  level,
  tag,
  members,
  created,
  coins,
  coinsEver,
  publiclyListed,
  legacyRank,
  preferredGames,
}: GuildCardProps) {
  const { classes, cx } = useStyles();

  return (
    <Card
      shadow="sm"
      padding="md"
      radius="md"
      withBorder
      className={classes.card}
    >
      <Card.Section className={classes.section}>
        <Text fz="lg" fw={600}>
          Guild Info
        </Text>

        <Space h="sm" />

        <TitleContent title="Name" content={name} />
        <TitleContent title="Level" content={level} />
        {tag.tag !== null && (
          <TitleContent
            title="Tag"
            content={<GuildTagDisplay tag={tag.tag} tagColor={tag.tagColor} />}
          />
        )}
        <TitleContent title="Members" content={members} />
        {description !== null && (
          <TitleContent title="Description" content={description} />
        )}

        <Space h="xs" />

        <TitleContent
          title="Created"
          content={dayjs(created).format(dateFormat)}
        />
      </Card.Section>
      <Card.Section className={classes.section}>
        <TitleContent title="Coins" content={coins.toLocaleString('en')} />
        <TitleContent
          title="Coins Ever"
          content={coinsEver.toLocaleString('en')}
        />

        <Space h="xs" />

        <TitleContent
          title="Publicly Listed"
          content={publiclyListed ? 'Yes' : 'No'}
        />
        {legacyRank !== null && (
          <TitleContent title="Legacy Rank" content={legacyRank} />
        )}
      </Card.Section>
      {preferredGames !== null && (
        <Card.Section className={classes.section}>
          <Text fz="md" fw={600}>
            Preferred Games
          </Text>

          <Space h={3} />

          <Text fz="sm">
            {preferredGames
              .map((game) => gameTypeMap[game as keyof typeof gameTypeMap])
              .join(', ')}
          </Text>
        </Card.Section>
      )}
    </Card>
  );
}
