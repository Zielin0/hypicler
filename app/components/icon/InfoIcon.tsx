import { copyMessage } from '@/app/utils/utils';
import {
  ActionIcon,
  Anchor,
  CopyButton,
  Modal,
  Space,
  Text,
  createStyles,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconInfoCircle } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  link: {
    color: theme.colors.green[4],
    cursor: 'pointer',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export default function InfoIcon() {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  return (
    <>
      <Modal.Root
        opened={opened}
        onClose={close}
        transitionProps={{
          transition: 'slide-up',
        }}
      >
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>
              <Text fz="lg" fw={700} style={{ verticalAlign: 'middle' }}>
                <IconInfoCircle
                  size="1.75rem"
                  style={{
                    marginRight: 5,
                    verticalAlign: 'middle',
                  }}
                />
                Info
              </Text>
            </Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            If you encounter any issues please contact{' '}
            <Text span fw={500} title="Zielino's Github">
              <Anchor
                href="https://github.com/Zielin0"
                target="_blank"
                color="pink"
              >
                Zielino
              </Anchor>
            </Text>
            .
            <Space h="lg" />
            <Text fz="md" title="Github Issues Link">
              <Text span fw={700} mr={5}>
                Github Issues:
              </Text>
              <Anchor
                href="https://github.com/Zielin0/hypicler/issues"
                target="_blank"
              >
                Zielin0/hypicler
              </Anchor>
            </Text>
            <Text fz="md" title="Discord (Click to Copy)">
              <Text span fw={700} mr={5}>
                Discord:
              </Text>
              <CopyButton value="Zielino#7342">
                {({ copied, copy }) => (
                  <Text
                    span
                    className={classes.link}
                    onClick={() => {
                      copy();
                      copyMessage('Discord');
                    }}
                  >
                    Zielino#7342
                  </Text>
                )}
              </CopyButton>
            </Text>
            <Text fz="md" title="Mail Link">
              <Text span fw={700} mr={5}>
                Mail:
              </Text>
              <Anchor href="mailto:me@zielinus.xyz">me@zielinus.xyz</Anchor>
            </Text>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <ActionIcon
        size="lg"
        variant="default"
        onClick={() => open()}
        title="Info"
      >
        <IconInfoCircle size="1.5rem" />
      </ActionIcon>
    </>
  );
}
