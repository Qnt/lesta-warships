import { FragmentType, graphql, useFragment } from '@/graphql';
import { Vehicle } from '@/graphql/graphql';
import {
  useFilterLevels,
  useFilterNations,
  useFilterVehicleTypes,
} from '@/stores/filterStore';
import { Grid, Modal, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useMemo, useState } from 'react';
import ShipCard from '../ShipCard/ShipCard';
import ShipFullInfo from '../ShipFullInfo/ShipFullInfo';

const Vehicles_QueryFragment = graphql(`
  fragment Vehicles_QueryFragment on GlossaryQuery {
    vehicles(isCatalogue: $isCatalogue, lang: $languageCode) {
      id
      level
      nation {
        name
      }
      type {
        name
      }
      ...Vehicle_QueryFragment
    }
  }
`);

type ShipListProps = {
  vehicles: FragmentType<typeof Vehicles_QueryFragment>;
};

export default function ShipList({ vehicles }: ShipListProps) {
  const vehiclesData = useFragment(Vehicles_QueryFragment, vehicles);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [opened, { open, close }] = useDisclosure(false);

  const levels = useFilterLevels();
  const nations = useFilterNations();
  const vehicleTypes = useFilterVehicleTypes();

  const filteredVehiclesData = useMemo(() => {
    const validVehicles =
      vehiclesData.vehicles?.filter(vehicle => vehicle !== null) ?? [];

    return validVehicles.filter(vehicle => {
      const levelMatch = levels.length === 0 || levels.includes(vehicle.level!);
      const nationMatch =
        nations.length === 0 ||
        nations.includes(vehicle.nation?.name as string);
      const typeMatch =
        vehicleTypes.length === 0 ||
        vehicleTypes.includes(vehicle.type?.name as string);

      return levelMatch && nationMatch && typeMatch;
    });
  }, [vehiclesData.vehicles, levels, nations, vehicleTypes]);

  return (
    <>
      {filteredVehiclesData.length === 0 && <p>Список пуст</p>}
      <Grid>
        {filteredVehiclesData.map(vehicle => (
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={vehicle.id}>
            <ShipCard
              vehicle={vehicle}
              handleCardClick={() => {
                open();
                setSelectedVehicle(vehicle);
              }}
            />
          </Grid.Col>
        ))}
      </Grid>
      <Modal
        opened={opened}
        onClose={close}
        centered
        title="Информация о судне"
        scrollAreaComponent={ScrollArea.Autosize}
        size="lg"
      >
        {selectedVehicle && <ShipFullInfo vehicle={selectedVehicle} />}
      </Modal>
    </>
  );
}
