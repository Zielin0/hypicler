import { GuildInput } from '@/app/types/GuildInput';
import { Button, Card, createStyles, Input, Select, Text } from '@mantine/core';
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
  dropdown: {
    width: 200,
    [theme.fn.smallerThan('xs')]: {
      width: 150,
    },
  },
}));

const selectData = [
  {
    value: GuildInput.name,
    label: 'Guild Name',
  },
  {
    value: GuildInput.id,
    label: 'Guild ID',
  },
  {
    value: GuildInput.player,
    label: 'Player Name',
  },
];

export default function GuildSearch() {
  const { classes, cx } = useStyles();
  const [submit, setSubmit] = useState(false);

  const form = useForm({
    initialValues: {
      name: '',
      type: GuildInput.name,
    },
    validate: {
      name: (value) =>
        value.trim().length > 0 && value.trim().length <= 16
          ? null
          : 'Invalid Guild Name',
      type: (value) =>
        Object.values(GuildInput).includes(value)
          ? null
          : 'Invalid Guild Input Type',
    },
  });

  useEffect(() => {
    if (submit) redirect(`/guild/${form.values.name}?type=${form.values.type}`);
  });

  return (
    <Card shadow="sm" padding="md" withBorder className={classes.card}>
      <form
        onSubmit={form.onSubmit((_values) => setSubmit(true))}
        className={classes.form}
      >
        <Text fz="lg" fw={700} mb="sm">
          Guild Search
        </Text>
        <Select
          id="guildSearchInputType"
          placeholder="Search By"
          label="Search By"
          variant="default"
          mb="sm"
          withinPortal
          className={classes.dropdown}
          data={selectData}
          {...form.getInputProps('type')}
        />
        <div style={{ display: 'flex' }}>
          <Input
            placeholder={
              selectData.find((option) => option.value === form.values.type)
                ?.label
            }
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
