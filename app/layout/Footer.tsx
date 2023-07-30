import {
  Anchor,
  Container,
  Footer as MantineFooter,
  Text,
  createStyles,
} from '@mantine/core';
import { IconHeartFilled } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    flexDirection: 'column',
  },
  icon: {
    color: '#e03131',
    verticalAlign: 'middle',
  },
}));

export default function Footer() {
  const { classes, cx } = useStyles();

  return (
    <MantineFooter height={80} p="xs">
      <Container className={classes.footer}>
        <Text fz="md">
          Made with <IconHeartFilled size="1.2rem" className={classes.icon} />{' '}
          by{' '}
          <Anchor
            href="https://github.com/Zielin0"
            target="_blank"
            color="pink"
          >
            Zielino
          </Anchor>
        </Text>
        <Text fz="md">
          Powered by{' '}
          <Anchor
            href="https://github.com/Zielin0/hypicle"
            target="_blank"
          >
            hypicle
          </Anchor>
        </Text>
      </Container>
    </MantineFooter>
  );
}
