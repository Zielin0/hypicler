'use client';

import PlayerProfileCard from '@/app/components/PlayerProfileCard';
import { createStyles } from '@mantine/core';
import { Session } from 'hypicle';

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'left',
  },
}));

// TODO: Fetch and apply data from the API
export default function Page({ params }: { params: { username: string } }) {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.container}>
      <PlayerProfileCard
        name={'Zielino'}
        firstLogin={1621518292341}
        lastLogin={1690798385269}
        level={46.71404897959184}
        karma={1003090}
        status={{ online: false } as Session}
        rank={'VIP'}
        socials={{ links: { DISCORD: 'Zielino#7342' }, prompt: true }}
      />
    </div>
  );
}
