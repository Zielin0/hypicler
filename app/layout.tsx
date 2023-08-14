import App from '@/app/App';
import type { Metadata } from 'next';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'Hypicler',
  description: 'Hypixel Stats Website',
  icons: {
    icon: '/icon.svg',
    apple: '/icon192.png',
  },
  themeColor: '#37B24D',
  openGraph: {
    title: 'Hypicler',
    description: 'Hypixel Stats Website',
    url: 'https://hypicler.pages.dev',
    images: ['https://hypicler.pages.dev/icon512.png'],
    siteName: 'Hypicler',
    type: 'website',
  },
  authors: [{ name: 'Zielino', url: 'https://zielinus.xyz' }],
  keywords: 'hypixel minecraft stats',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
}
