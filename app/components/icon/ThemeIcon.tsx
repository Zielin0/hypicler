import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';

export default function ThemeIcon() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      size="lg"
      variant="default"
      onClick={() => toggleColorScheme()}
      title="Toggle Color Scheme"
    >
      {dark ? <IconSun size="1.5rem" /> : <IconMoonStars size="1.5rem" />}
    </ActionIcon>
  );
}
