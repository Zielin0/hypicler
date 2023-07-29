import Footer from '@/app/layout/Footer';
import Header from '@/app/layout/Header';
import Sidebar from '@/app/layout/Sidebar';

import { AppShell } from '@mantine/core';

export default function App() {
  return (
    <AppShell
      padding="sm"
      navbar={<Sidebar />}
      header={<Header />}
      footer={<Footer />}
    >
      app shell content
    </AppShell>
  );
}
