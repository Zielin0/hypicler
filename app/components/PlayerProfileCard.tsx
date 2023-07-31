import {
  Badge,
  Card,
  Group,
  Image,
  Space,
  Text,
  createStyles,
  rem,
} from '@mantine/core';
import dayjs from 'dayjs';
import { Session, SocialMedia } from 'hypicle';

interface PlayerCardProps {
  name: string;
  firstLogin: number;
  lastLogin: number;
  level: number;
  karma: number;
  status: Session;
  rank: string;
  socials: SocialMedia;
}

const format = 'DD MMM YYYY HH:mm:ss';

const useStyles = createStyles((theme) => ({
  card: {
    width: 350,
  },
  avatar: {
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const getAvatarByName = (username: string): string => {
  return `https://minotar.net/helm/${username}`;
};

// TODO: Socials section
export default function PlayerProfileCard({
  name,
  firstLogin,
  lastLogin,
  level,
  karma,
  status,
  rank,
  socials,
}: PlayerCardProps) {
  const { classes, cx } = useStyles();

  return (
    <Card
      shadow="sm"
      padding="md"
      radius="md"
      withBorder
      className={classes.card}
    >
      <Card.Section className={classes.avatar}>
        <Image
          src={getAvatarByName(name)}
          radius="sm"
          width={75}
          alt={`${name}'s avatar`}
        />
      </Card.Section>

      <Group position="apart" my="sm">
        <div>
          <Text fz="md">
            <Text span fw={700} mr={5}>
              {rank}
            </Text>
            {name}
          </Text>
        </div>
        <Badge variant="light" color={status.online ? 'green' : 'red'}>
          {status.online ? 'Online' : 'Offline'}
        </Badge>
      </Group>

      <Card.Section className={classes.section}>
        <Text fz="sm">
          <Text span fw={700} mr={5}>
            Level:
          </Text>
          {level.toFixed(2)}
        </Text>
        <Text fz="sm">
          <Text span fw={700} mr={5}>
            Karma:
          </Text>
          {karma.toLocaleString('en')}
        </Text>

        <Space h="sm" />

        <Text fz="sm">
          <Text span fw={700} mr={5}>
            First Login:
          </Text>
          {dayjs(firstLogin).format(format)}
        </Text>
        <Text fz="sm">
          <Text span fw={700} mr={5}>
            Last Login:
          </Text>
          {dayjs(lastLogin).format(format)}
        </Text>
      </Card.Section>
    </Card>
  );
}
