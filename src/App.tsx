import ShipFilters from '@/components/Filters/ShipFilters';
import ShipList from '@/components/ShipList/ShipList';
import { graphql } from '@/graphql';
import {
  AppShell,
  Burger,
  Group,
  LoadingOverlay,
  ScrollArea,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { useState } from 'react';

const Glossary_Query = graphql(`
  query Glossary_Query(
    $isCatalogue: Boolean = true
    $languageCode: String = "ru"
  ) {
    ...Vehicles_QueryFragment
    ...Filters_QueryFragment
  }
`);

export default function App() {
  const [opened, { toggle }] = useDisclosure();
  const [languageCode] = useState('ru');
  const [isCatalogue] = useState(true);

  const { data, error, isLoading } = useQuery({
    queryKey: ['glossary_query', languageCode, isCatalogue],
    queryFn: async () =>
      await request(import.meta.env.VITE_API_URL, Glossary_Query, {
        languageCode,
        isCatalogue,
      }),
  });

  return (
    <AppShell
      header={{ height: 40 }}
      navbar={{ width: 300, breakpoint: 'md', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Title order={3}>Леста Корабли</Title>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <AppShell.Section grow component={ScrollArea} p="md">
          {data && <ShipFilters filters={data} />}
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>
        <LoadingOverlay visible={isLoading} />
        {error && <p>Error: {error.message}</p>}
        {data && <ShipList vehicles={data} />}
      </AppShell.Main>
    </AppShell>
  );
}
