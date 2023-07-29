import GithubIcon from '@/app/components/icon/GithubIcon';
import ThemeIcon from '@/app/components/icon/ThemeIcon';

import {
  Anchor,
  Container,
  Group,
  Image,
  Header as MantineHeader,
  Text,
  createStyles,
} from '@mantine/core';

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

export default function Header() {
  const { classes, cx } = useStyles();

  return (
    <MantineHeader height={60}>
      <Container className={classes.header}>
        <Anchor href="#" className={classes.mainLink}>
          <Image width={45} src="/icon.svg" alt="Logo" />
          <Text fz="xl" fw={700}>
            Hypicler
          </Text>
        </Anchor>

        <Group spacing="sm" className={classes.links}>
          <ThemeIcon />
          <GithubIcon />
        </Group>
      </Container>
    </MantineHeader>
  );
}
