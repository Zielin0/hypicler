import { Button, Card, Input, Text, createStyles } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconSearch } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  card: {
    minWidth: 600,
    maxWidth: 600,
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
    marginRight: theme.spacing.md,
    flex: 1,
  },
}));

export default function PlayerSearch() {
  const { classes, cx } = useStyles();

  const form = useForm({
    initialValues: {
      username: '',
    },
    validate: {
      username: (value) =>
        /^[a-zA-Z0-9_]{2,16}$/.test(value) ? null : 'Invalid Username',
    },
  });

  return (
    <Card shadow="sm" padding="md" withBorder className={classes.card}>
      <form
        onSubmit={form.onSubmit((values) => console.log(values))}
        className={classes.form}
      >
        <Text fz="lg" fw={700} mb="sm">
          Player Search
        </Text>
        <div style={{ display: 'flex' }}>
          <Input
            placeholder="Username"
            variant="default"
            miw={500}
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
