'use client';

import PlayerProfileCard from '@/app/components/PlayerProfileCard';
import { createStyles, rem } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';
import { Session } from 'hypicle';

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'left',
  },
}));

// TODO: Fetch and apply data from the API
// TODO: OWNER rank for hypixel & rezzus and PIG+++ rank for technoblade
export default function Page({ params }: { params: { username: string } }) {
  const { classes, cx } = useStyles();

  const handleCopy = () => {
    notifications.show({
      title: 'Success',
      message: 'Copied Discord to the Cipboard',
      icon: <IconCheck size="1.1rem" />,
      color: 'teal',
      autoClose: 5000,
      withBorder: true,
      style: { bottom: rem(80) },
    });
  };

  return (
    <div className={classes.container}>
      <PlayerProfileCard
        name={'Zielino'}
        firstLogin={1621518292341}
        lastLogin={1690798385269}
        level={46.71404897959184}
        karma={1003090}
        status={
          {
            online: true,
            gameType: 'BEDWARS',
            mode: 'BEDWARS_EIGHT_TWO',
            map: 'Dragonstar',
          } as Session
        }
        rank={'VIP'}
        socials={{
          links: {
            DISCORD: 'Zielino#7342',
            HYPIXEL: 'https://hypixel.net/members/zielino.5132535',
            TWITCH: 'https://twitch.tv/zielin0',
            TIKTOK: 'https://tiktok.com/@wdklfujhqlwekiufhk',
            INSTAGRAM: 'https://instagram.com/asdkujfhqlkwrg',
            YOUTUBE: 'https://youtube.com/@ZielinoCoding',
            TWITTER: 'https://twitter.com/theZielino',
          },
          prompt: true,
        }}
        guild={{
          name: 'Test Guild',
          members: 412,
          rank: 'GUILDMASTER',
          joined: 1435699661039,
          tag: 'BALLS',
          tagColor: 'GOLD',
        }}
        onCopy={handleCopy}
      />
    </div>
  );
}
