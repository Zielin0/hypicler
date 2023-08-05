import { rem } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
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

export function kd_ratio(kills: number, deaths: number): string {
  return deaths !== 0 ? (kills / deaths).toFixed(2) : '0.00';
}

export function wl_ratio(wins: number, losses: number): string {
  return losses !== 0 ? (wins / losses).toFixed(2) : '0.00';
}

export function hm_ratio(hit: number, attempt: number): string {
  return attempt !== 0 ? (hit / attempt).toFixed(2) : '0.00';
}

export function secondsToMMSS(seconds: number): string {
  dayjs.extend(duration);
  return dayjs.duration(seconds, 'seconds').format('mm:ss');
}
