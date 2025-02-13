import { AppShell, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import DrawerButton from './components/DrawerButton';
import ShipList from './components/ShipList';

export default function App() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <AppShell>
      <AppShell.Main>
        <ShipList />
        <Drawer
          opened={opened}
          onClose={close}
          title="Фильтры"
          position="bottom"
        >
          <div>TODO</div>
        </Drawer>
        <DrawerButton onClick={open}>Фильтры</DrawerButton>
      </AppShell.Main>
    </AppShell>
  );
}
