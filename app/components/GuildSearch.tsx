import { Button, Card, createStyles, Input, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconSearch } from '@tabler/icons-react';

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

// TODO: Choose between guild name, guild ID and player name as an input
export default function GuildSearch() {
  const { classes, cx } = useStyles();

  const form = useForm({
    initialValues: {
      name: '',
    },
    validate: {
      name: (value) => (value.length < 16 ? null : 'Invalid Guild Name'),
    },
  });

  return (
    <Card shadow="sm" padding="md" withBorder className={classes.card}>
      <form
        onSubmit={form.onSubmit((values) => console.log(values))}
        className={classes.form}
      >
        <Text fz="lg" fw={700} mb="sm">
          Guild Search
        </Text>
        <div style={{ display: 'flex' }}>
          <Input
            placeholder="Guild Name"
            variant="default"
            mr="sm"
            className={classes.input}
            {...form.getInputProps('name')}
          />
          <Button variant="filled" type="submit" style={{ flexShrink: 0 }}>
            <IconSearch />
          </Button>
        </div>
      </form>
    </Card>
  );
}
