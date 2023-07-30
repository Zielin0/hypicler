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
import { useMediaQuery } from '@mantine/hooks';

export default function App({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const mobile = useMediaQuery('(max-width: 767px)');
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
        theme={{ fontFamily: 'Inter', colorScheme, primaryColor: 'green' }}
        withGlobalStyles
        withNormalizeCSS
      >
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
