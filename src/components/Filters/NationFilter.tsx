import { FragmentType, graphql, useFragment } from '@/graphql';
import { useFilterNations, useFilterStore } from '@/stores/filterStore';
import { Checkbox, Group, Spoiler, Stack, Title } from '@mantine/core';

const Nations_QueryFragment = graphql(`
  fragment Nations_QueryFragment on GlossaryQuery {
    nations(lang: $languageCode) {
      name
      title
    }
  }
`);

type NationFilterProps = {
  nations: FragmentType<typeof Nations_QueryFragment>;
};

export default function NationFilter({ nations }: NationFilterProps) {
  const nationData = useFragment(Nations_QueryFragment, nations);
  const selectedNations = useFilterNations();
  const setFilter = useFilterStore(state => state.setFilter);

  return (
    <Stack>
      <Group justify="space-between">
        <Title order={4}>Нация</Title>
      </Group>
      <Spoiler
        maxHeight={180}
        showLabel="Больше"
        hideLabel="Меньше"
        transitionDuration={0}
      >
        <Checkbox.Group
          value={selectedNations}
          onChange={value => setFilter('nations', value)}
        >
          <Stack gap="xs">
            {nationData?.nations
              ?.filter(n => n !== null)
              .map(n => (
                <Checkbox
                  key={n.name}
                  label={n.title}
                  value={n.name!}
                  name={n.name!}
                />
              ))}
          </Stack>
        </Checkbox.Group>
      </Spoiler>
    </Stack>
  );
}
