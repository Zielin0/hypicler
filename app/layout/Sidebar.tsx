import { NavLink, Navbar } from '@mantine/core';
import {
  IconAlarm,
  IconBarrierBlock,
  IconListNumbers,
  IconUser,
  IconUsersGroup,
} from '@tabler/icons-react';
import Link from 'next/link';
import { useState } from 'react';

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

export default function Sidebar() {
  const [active, setActive] = useState(0);

  const items = routes.map((item, index) => (
    <Link
      key={item.label}
      href={item.route}
      passHref
      style={{ textDecoration: 'none' }}
    >
      <NavLink
        active={index === active}
        label={item.label}
        icon={<item.icon />}
        color="green"
        onClick={() => setActive(index)}
      />
    </Link>
  ));

  return (
    <Navbar width={{ base: 250 }} p="xs">
      {items}
    </Navbar>
  );
}
