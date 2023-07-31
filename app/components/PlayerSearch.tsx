import { Button, Card, Input, Text, createStyles } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconSearch } from '@tabler/icons-react';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

const useStyles = createStyles((theme) => ({
  card: {
    width: 600,
    [theme.fn.smallerThan('md')]: {
      width: 500,
    },
    [theme.fn.smallerThan('xs')]: {
      width: 300,
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.md,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'center',
  },
  input: {
    width: 500,
    [theme.fn.smallerThan('md')]: {
      width: 350,
    },
    [theme.fn.smallerThan('xs')]: {
      width: 200,
    },
    flex: 1,
  },
}));

export default function PlayerSearch() {
  const { classes, cx } = useStyles();
  const [submit, setSubmit] = useState(false);

  const form = useForm({
    initialValues: {
      username: '',
    },
    validate: {
      username: (value) =>
        /^[a-zA-Z0-9_]{2,16}$/.test(value) ? null : 'Invalid Username',
    },
  });

  useEffect(() => {
    if (submit) redirect(`/player/${form.values.username}`);
  });

  return (
    <Card shadow="sm" padding="md" withBorder className={classes.card}>
      <form
        onSubmit={form.onSubmit((_values) => setSubmit(true))}
        className={classes.form}
      >
        <Text fz="lg" fw={700} mb="sm">
          Player Search
        </Text>
        <div style={{ display: 'flex' }}>
          <Input
            placeholder="Username"
            variant="default"
            mr="sm"
            className={classes.input}
            {...form.getInputProps('username')}
          />
          <Button variant="filled" type="submit" style={{ flexShrink: 0 }}>
            <IconSearch />
          </Button>
        </div>
      </form>
    </Card>
  );
}
