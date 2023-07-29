import { NavLink, Navbar } from '@mantine/core';
import {
  IconAlarm,
  IconBarrierBlock,
  IconListNumbers,
  IconUser,
  IconUsersGroup,
} from '@tabler/icons-react';

export default function Sidebar() {
  return (
    <Navbar width={{ base: 250 }} p="xs">
      <NavLink active label="Player Stats" icon={<IconUser />} />
      <NavLink label="Guild Stats" icon={<IconUsersGroup />} />
      <NavLink label="Leaderboards" icon={<IconListNumbers />} />
      <NavLink label="Boosters" icon={<IconAlarm />} />
      <NavLink label="Punishments" icon={<IconBarrierBlock />} />
    </Navbar>
  );
}
