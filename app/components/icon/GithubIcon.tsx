import { ActionIcon } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';

export default function ThemeIcon() {
  return (
    <ActionIcon
      component="a"
      href="https://github.com/Zielin0/hypicler"
      target="_blank"
      size="lg"
      variant="default"
      title="Github Link"
    >
      <IconBrandGithub size="1.5rem" />
    </ActionIcon>
  );
}
