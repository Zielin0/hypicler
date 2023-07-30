import { NavLink, Navbar } from '@mantine/core';
import {
  IconAlarm,
  IconBarrierBlock,
  IconListNumbers,
  IconUser,
  IconUsersGroup,
} from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const routes = [
  {
    label: 'Player Stats',
    icon: IconUser,
    route: '/player',
  },
  {
    label: 'Guild Stats',
    icon: IconUsersGroup,
    route: '/guild',
  },
  {
    label: 'Leaderboards',
    icon: IconListNumbers,
    route: '/leaderboards',
  },
  {
    label: 'Boosters',
    icon: IconAlarm,
    route: '/boosters',
  },
  {
    label: 'Punishments',
    icon: IconBarrierBlock,
    route: '/punishments',
  },
];

interface SidebarProps {
  opened: boolean;
}

export default function Sidebar({ opened }: SidebarProps) {
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  const items = routes.map((item, index) => (
    <Link
      key={item.label}
      href={item.route}
      passHref
      style={{ textDecoration: 'none' }}
    >
      <NavLink
        active={path.startsWith(item.route) || (index === 0 && path === '/')}
        label={opened && item.label}
        icon={<item.icon />}
      />
    </Link>
  ));

  return (
    <Navbar width={{ base: opened ? 250 : 70 }} p="xs">
      {items}
    </Navbar>
  );
}
