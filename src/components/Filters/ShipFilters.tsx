import {
  useFilterLevels,
  useFilterNations,
  useFilterStore,
  useFilterVehicleTypes,
} from '@/stores/filterStore';
import { Button, Stack } from '@mantine/core';
import { FragmentType, graphql, useFragment } from '../../graphql';
import LevelFilter from './LevelFilter';
import NationFilter from './NationFilter';
import VehicleTypeFilter from './VehicleTypeFIlter';

const Filters_QueryFragment = graphql(`
  fragment Filters_QueryFragment on GlossaryQuery {
    ...Nations_QueryFragment
    ...VehicleTypes_QueryFragment
  }
`);

type ShipFiltersProps = {
  filters: FragmentType<typeof Filters_QueryFragment>;
};

export default function ShipFilters({ filters }: ShipFiltersProps) {
  const filterData = useFragment(Filters_QueryFragment, filters);
  const resetAllFilters = useFilterStore(state => state.resetAllFilters);
  const levels = useFilterLevels();
  const nations = useFilterNations();
  const vehicleTypes = useFilterVehicleTypes();

  const isResetButtonVisible =
    levels.length + nations.length + vehicleTypes.length > 0;

  return (
    <Stack>
      <LevelFilter levels={[2, 3, 4, 5, 6, 7, 8, 9, 10, 11]} />
      <NationFilter nations={filterData} />
      <VehicleTypeFilter vehicleTypes={filterData} />
      <Button
        onClick={resetAllFilters}
        variant="default"
        display={isResetButtonVisible ? 'block' : 'none'}
      >
        Сбросить всё
      </Button>
    </Stack>
  );
}
