'use client';
import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { useEffect, useState } from 'react';

import Footer from '@/app/layout/Footer';
import Header from '@/app/layout/Header';
import Sidebar from '@/app/layout/Sidebar';
import { useLocalStorage, useMediaQuery } from '@mantine/hooks';
import { Notifications } from '@mantine/notifications';

export default function App({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const mobile = useMediaQuery('(max-width: 880px)');
  const [opened, setOpened] = useState(true);

  useEffect(() => {
    setOpened(!mobile);
  }, [mobile]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          fontFamily: 'Inter, sans-serif',
          colorScheme,
          primaryColor: 'green',
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Notifications />
        <AppShell
          padding="sm"
          header={<Header opened={opened} onClick={() => setOpened(!opened)} />}
          navbar={<Sidebar opened={opened} />}
          footer={<Footer />}
        >
          {children}
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
