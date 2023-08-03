import { rem } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';
import React from 'react';

export function capitalize(s: string): string {
  return s.toLowerCase().charAt(0).toUpperCase() + s.toLowerCase().slice(1);
}

export const format = 'DD MMM YYYY HH:mm:ss';

export const fetcher: (...args: Parameters<typeof fetch>) => Promise<any> = (
  ...args
) => fetch(...args).then((res) => res.json());

export const copyMessage = (copied: string) => {
  notifications.show({
    title: 'Success',
    message: `Copied ${copied} to the Cipboard`,
    icon: React.createElement(IconCheck, { size: '1.1rem' }),
    color: 'teal',
    autoClose: 5000,
    withBorder: true,
    style: { bottom: rem(80) },
  });
};

export function getRank(username: string, rank: string): string {
  switch (username.toLowerCase()) {
    case 'hypixel':
    case 'rezzus':
      return 'OWNER';
    case 'technoblade':
      return 'PIG';
    default:
      return rank;
  }
}
