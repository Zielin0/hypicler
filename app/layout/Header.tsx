import GithubIcon from '@/app/components/icon/GithubIcon';
import ThemeIcon from '@/app/components/icon/ThemeIcon';

import {
  ActionIcon,
  Anchor,
  Container,
  Group,
  Image,
  Header as MantineHeader,
  Text,
  createStyles,
} from '@mantine/core';
import { IconMenu2 } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    minWidth: '100%',
  },
  mainLink: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',

    '&:hover': {
      textDecoration: 'none',
    },
  },
  links: {
    display: 'flex',
    alignItems: 'center',
  },
}));

interface HeaderProps {
  opened: boolean;
  onClick: () => void;
}

export default function Header({ opened, onClick }: HeaderProps) {
  const { classes, cx } = useStyles();

  return (
    <MantineHeader height={60}>
      <Container className={classes.header}>
        <Group>
          <ActionIcon onClick={onClick} size="md">
            <IconMenu2 />
          </ActionIcon>
          <Anchor href="/" className={classes.mainLink}>
            <Image width={35} mr="xs" src="/icon.svg" alt="Logo" />
            <Text fz="xl" fw={700}>
              Hypicler
            </Text>
          </Anchor>
        </Group>

        <Group spacing="sm" className={classes.links}>
          <ThemeIcon />
          <GithubIcon />
        </Group>
      </Container>
    </MantineHeader>
  );
}
