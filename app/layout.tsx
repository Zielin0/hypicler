import App from '@/app/App';
import type { Metadata } from 'next';

export const runtime = process.env.ENVIRONMENT === 'DEV' ? 'edge' : 'nodejs';

export const metadata: Metadata = {
  title: 'Hypicler',
  description: 'Hypixel Stats Website',
  icons: {
    icon: '/icon.svg',
  },
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
