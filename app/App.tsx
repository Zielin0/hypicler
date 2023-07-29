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

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ fontFamily: 'sans-serif', colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <AppShell
          padding="sm"
          navbar={<Sidebar />}
          header={<Header />}
          footer={<Footer />}
        >
          {children}
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
