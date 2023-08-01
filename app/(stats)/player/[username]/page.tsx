'use client';

import PlayerProfileCard from '@/app/components/PlayerProfileCard';
import { createStyles, Notification, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Session } from 'hypicle';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'left',
  },
  notification: {
    position: 'fixed',
    bottom: rem(100),
    right: theme.spacing.md,
    [theme.fn.smallerThan('xs')]: {
      bottom: rem(85),
      right: rem(5),
    },
  },
}));

// TODO: Fetch and apply data from the API
// TODO: OWNER rank for hypixel & rezzus and PIG+++ rank for technoblade
export default function Page({ params }: { params: { username: string } }) {
  const { classes, cx } = useStyles();
  const [showNotif, setShowNotif] = useState(false);

  const handleCopy = () => {
    setShowNotif(true);
    setTimeout(() => {
      setShowNotif(false);
    }, 5000);
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
        onCopy={handleCopy}
      />
      {showNotif && (
        <Notification
          className={classes.notification}
          icon={<IconCheck size="1.1rem" />}
          onClose={() => setShowNotif(false)}
          color="teal"
          title="Success!"
          withBorder
        >
          Copied Discord to the Clipboard
        </Notification>
      )}
    </div>
  );
}
