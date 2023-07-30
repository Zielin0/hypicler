'use client';
import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { useState } from 'react';

import Footer from '@/app/layout/Footer';
import Header from '@/app/layout/Header';
import Sidebar from '@/app/layout/Sidebar';

export default function App({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const [opened, setOpened] = useState(true);

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
