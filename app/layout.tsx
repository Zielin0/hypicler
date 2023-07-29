import type { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  );
}
