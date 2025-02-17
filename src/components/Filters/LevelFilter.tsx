import { Checkbox, SimpleGrid, Title } from '@mantine/core';
import { useFilterLevels, useFilterStore } from '@/stores/filterStore';
import { Vehicle } from '@/graphql/graphql';
import { numberToRoman } from '@/utils/numberToRoman';

export default function LevelFilter({
  levels,
}: {
  levels: NonNullable<Vehicle['level']>[];
}) {
  const selectedLevels = useFilterLevels();
  const setFilter = useFilterStore(state => state.setFilter);

  return (
    <>
      <Title order={4}>Уровень</Title>
      <Checkbox.Group
        value={selectedLevels.map(String)}
        onChange={value => setFilter('levels', value.map(Number))}
      >
        <SimpleGrid cols={3}>
          {levels
            ?.filter(level => level !== null)
            .map(level => (
              <Checkbox
                key={level}
                label={numberToRoman(level)}
                value={String(level)}
                name={String(level)}
              />
            ))}
        </SimpleGrid>
      </Checkbox.Group>
    </>
  );
}
