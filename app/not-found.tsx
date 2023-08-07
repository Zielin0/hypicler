'use client';

import { Alert, createStyles } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  centered: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
}));

export default function NotFound() {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.centered}>
      <Alert
        icon={<IconAlertCircle size="1.5rem" />}
        title="Something went wrong!"
        color="red"
        pr="lg"
      >
        Page could not be found.
      </Alert>
    </div>
  );
}
