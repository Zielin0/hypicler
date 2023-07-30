'use client';

import GuildSearch from '@/app/components/GuildSearch';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80%',
  },
}));

export default function Page() {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.main}>
      <GuildSearch />
    </div>
  );
}
