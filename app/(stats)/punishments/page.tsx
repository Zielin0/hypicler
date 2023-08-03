'use client';

import TitleContent from '@/app/components/TitleContent';
import { fetcher } from '@/app/utils/utils';
import { Alert, Card, Loader, Text, createStyles, rem } from '@mantine/core';
import { IconAlertCircle, IconDog, IconUserCheck } from '@tabler/icons-react';
import useSWR from 'swr';

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
    '& > *:not(:last-child)': {
      marginRight: theme.spacing.md,
      [theme.fn.smallerThan('sm')]: {
        marginBottom: theme.spacing.md,
      },
    },
  },
  card: {
    width: 300,
  },
  section: {
    padding: theme.spacing.md,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
  centered: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  text: {
    verticalAlign: 'middle',
  },
  icon: {
    verticalAlign: 'middle',
    marginRight: 5,
  },
}));

interface PunishmentsDataResponse {
  success: boolean;
  staff: {
    total: number;
    daily: number;
  };
  watchdog: {
    total: number;
    daily: number;
    lastMinute: number;
  };
}

export default function Page() {
  const { classes, cx } = useStyles();
  const { data, error, isLoading } = useSWR<PunishmentsDataResponse>(
    '/api/punishments',
    fetcher
  );

  if (isLoading)
    return (
      <div className={classes.centered}>
        <Loader size={100} />
      </div>
    );
  if (error || !data?.success)
    return (
      <div className={classes.centered}>
        <Alert
          icon={<IconAlertCircle size="1.5rem" />}
          title="Something went wrong!"
          color="red"
          pr="lg"
        >
          An error occurred while fetching data
        </Alert>
      </div>
    );

  return (
    <>
      <div className={classes.container}>
        <Card
          shadow="sm"
          padding="md"
          radius="md"
          withBorder
          className={classes.card}
        >
          <Card.Section className={classes.section}>
            <Text fz="lg" fw={700} className={classes.text}>
              <IconDog size="2rem" className={classes.icon} />
              Watchdog
            </Text>
          </Card.Section>
          <Card.Section className={classes.section}>
            <TitleContent
              title="Last Minute"
              content={data!.watchdog.lastMinute.toLocaleString('en')}
            />
            <TitleContent
              title="Daily"
              content={data!.watchdog.daily.toLocaleString('en')}
            />
            <TitleContent
              title="Total"
              content={data!.watchdog.total.toLocaleString('en')}
            />
          </Card.Section>
        </Card>
        <Card
          shadow="sm"
          padding="md"
          radius="md"
          withBorder
          className={classes.card}
        >
          <Card.Section className={classes.section}>
            <Text fz="lg" fw={700} className={classes.text}>
              <IconUserCheck size="2rem" className={classes.icon} />
              Staff
            </Text>
          </Card.Section>
          <Card.Section className={classes.section}>
            <TitleContent
              title="Daily"
              content={data!.staff.daily.toLocaleString('en')}
            />
            <TitleContent
              title="Total"
              content={data!.staff.total.toLocaleString('en')}
            />
          </Card.Section>
        </Card>
      </div>
    </>
  );
}
