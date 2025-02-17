import { FragmentType, graphql, useFragment } from '@/graphql';
import { useFilterStore, useFilterVehicleTypes } from '@/stores/filterStore';
import { Checkbox, Group, Spoiler, Stack, Title } from '@mantine/core';

const VehicleTypes_QueryFragment = graphql(`
  fragment VehicleTypes_QueryFragment on GlossaryQuery {
    vehicleTypes(lang: $languageCode) {
      title
      name
    }
  }
`);

type VehicleTypeFilterProps = {
  vehicleTypes: FragmentType<typeof VehicleTypes_QueryFragment>;
};

export default function VehicleTypeFilter({
  vehicleTypes,
}: VehicleTypeFilterProps) {
  const vehicleTypesData = useFragment(
    VehicleTypes_QueryFragment,
    vehicleTypes
  );
  const selectedTypes = useFilterVehicleTypes();
  const setFilter = useFilterStore(state => state.setFilter);

  return (
    <>
      <Group justify="space-between">
        <Title order={4}>Класс</Title>
      </Group>
      <Checkbox.Group
        value={selectedTypes}
        onChange={value => setFilter('vehicleTypes', value)}
      >
        <Spoiler
          maxHeight={180}
          showLabel="Больше"
          hideLabel="Меньше"
          transitionDuration={0}
        >
          <Stack gap="xs">
            {vehicleTypesData.vehicleTypes
              ?.filter(vtype => vtype !== null)
              .map(vtype => (
                <Checkbox
                  key={vtype.name}
                  label={vtype.title}
                  value={vtype.name!}
                  name={vtype.name!}
                />
              ))}
          </Stack>
        </Spoiler>
      </Checkbox.Group>
    </>
  );
}
