import { capitalize } from '@/app/utils/utils';
import {
  ActionIcon,
  Badge,
  Card,
  CopyButton,
  Group,
  Image,
  Popover,
  Space,
  Text,
  Tooltip,
  createStyles,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBrandDiscord,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandTwitch,
  IconBrandTwitter,
  IconBrandYoutube,
  IconHexagonLetterH,
} from '@tabler/icons-react';
import dayjs from 'dayjs';
import { Session, SocialMedia } from 'hypicle';

const format = 'DD MMM YYYY HH:mm:ss';

const socialMap = [
  {
    name: 'DISCORD',
    title: 'Discord',
    icon: IconBrandDiscord,
    color: '#454FBF',
  },
  {
    name: 'HYPIXEL',
    title: 'Hypixel Forums',
    icon: IconHexagonLetterH,
    color: '#F4C75D',
  },
  {
    name: 'TWITCH',
    title: 'Twitch Channel',
    icon: IconBrandTwitch,
    color: '#6441A5',
  },
  {
    name: 'TIKTOK',
    title: 'TikTok',
    icon: IconBrandTiktok,
    color: '#00f2EA',
  },
  {
    name: 'INSTAGRAM',
    title: 'Instagram',
    icon: IconBrandInstagram,
    color: '#C13584',
  },
  {
    name: 'YOUTUBE',
    title: 'YouTube Channel',
    icon: IconBrandYoutube,
    color: '#FF0000',
  },
  {
    name: 'TWITTER',
    title: 'Twitter',
    icon: IconBrandTwitter,
    color: '#1DA1F2',
  },
];

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
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
  socials: {
    padding: theme.spacing.md,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    marginRight: theme.spacing.xs,
  },
}));

const getAvatarByName = (username: string): string => {
  return `https://minotar.net/helm/${username}`;
};

interface PlayerSocialsProps {
  socials: SocialMedia;
  onCopy: () => void;
}

const PlayerSocialLinks = ({ socials, onCopy }: PlayerSocialsProps) => {
  const { classes, cx } = useStyles();
  const [opened, { close, open }] = useDisclosure(false);

  if (!socials.links || Object.keys(socials.links).length === 0) return null;

  return Object.keys(socials.links).map((key) => {
    const socialInfo = socialMap.find(
      (item) => item.name === key.toUpperCase()
    );

    if (!socialInfo) return null;

    const { title, color } = socialInfo;

    return key === 'DISCORD' ? (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Popover
          width={185}
          position="top"
          withArrow
          shadow="md"
          opened={opened}
        >
          <Popover.Target>
            <CopyButton value={socials.links[key]}>
              {({ copied, copy }) => (
                <ActionIcon
                  key={key}
                  aria-label={title}
                  onClick={() => {
                    copy();
                    onCopy();
                  }}
                  onMouseEnter={open}
                  onMouseLeave={close}
                  className={classes.socialIcon}
                >
                  <socialInfo.icon style={{ color }} size="3rem" />
                </ActionIcon>
              )}
            </CopyButton>
          </Popover.Target>
          <Popover.Dropdown
            sx={{
              pointerEvents: 'none',
              position: 'absolute',
              transform: 'translateY(-100%) translateX(-3.5%)',
            }}
          >
            <Text fz="sm">
              Discord:{' '}
              <Text span fw={700}>
                {socials.links[key]}
              </Text>
            </Text>
            <Text fz="sm" fw={500}>
              Click to Copy
            </Text>
          </Popover.Dropdown>
        </Popover>
      </div>
    ) : (
      <Tooltip
        label={title}
        styles={(theme) => ({
          tooltip: {
            backgroundColor: `${
              theme.colorScheme === 'dark' ? '#1A1B1E' : '#F8F9FA'
            }`,
            color: `${theme.colorScheme === 'dark' ? '#F8F9FA' : '#101113'}`,
          },
        })}
      >
        <ActionIcon
          component="a"
          href={socials.links[key]}
          target="_blank"
          key={key}
          aria-label={title}
          className={classes.socialIcon}
        >
          <socialInfo.icon style={{ color }} size="3rem" />
        </ActionIcon>
      </Tooltip>
    );
  });
};

interface PlayerCardProps {
  name: string;
  firstLogin: number;
  lastLogin: number;
  level: number;
  karma: number;
  status: Session;
  rank: string;
  socials: SocialMedia;
  onCopy: () => void;
}

export default function PlayerProfileCard({
  name,
  firstLogin,
  lastLogin,
  level,
  karma,
  status,
  rank,
  socials,
  onCopy,
}: PlayerCardProps) {
  const { classes, cx } = useStyles();
  const [opened, { close, open }] = useDisclosure(false);

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
        {status.online ? (
          <Popover
            position="top"
            withArrow
            shadow="md"
            withinPortal
            opened={opened}
          >
            <Popover.Target>
              <Badge
                variant="light"
                color="green"
                onMouseEnter={open}
                onMouseLeave={close}
                style={{ cursor: 'pointer' }}
              >
                Online
              </Badge>
            </Popover.Target>
            <Popover.Dropdown>
              <Text fz="sm" fw={500}>
                Mode:{' '}
                <Text span fz="sm" fw={400}>
                  {capitalize(status.gameType)}
                </Text>
              </Text>
              {status.gameType !== 'HOUSING' && (
                <Text fz="sm" fw={500}>
                  Map:{' '}
                  <Text span fz="sm" fw={400}>
                    {status.map}
                  </Text>
                </Text>
              )}
            </Popover.Dropdown>
          </Popover>
        ) : (
          <Badge variant="light" color="red">
            Offline
          </Badge>
        )}
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

      {(socials.links !== null || socials.links !== undefined) && (
        <Card.Section className={classes.socials}>
          <PlayerSocialLinks socials={socials} onCopy={onCopy} />
        </Card.Section>
      )}
    </Card>
  );
}
