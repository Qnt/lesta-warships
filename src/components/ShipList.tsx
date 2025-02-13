import { useQuery } from '@tanstack/react-query';
import { execute } from '../graphql';
import { ShipCard } from './ShipCard';
import classes from './ShipList.module.css';
import { graphql } from '../graphql';
import { Grid, resolveClassNames, SimpleGrid } from '@mantine/core';

const VehiclesDocument = graphql(`
  query Vehicles($languageCode: String = "ru") {
    vehicles(lang: $languageCode) {
      id
      title
      description
      icons {
        large
        medium
      }
      level
      type {
        name
        title
        icons {
          default
        }
      }
      nation {
        name
        title
        color
        icons {
          small
          medium
          large
        }
      }
    }
  }
`);

export default function ShipList() {
  const languageCode = 'ru';
  const { data, error, isLoading } = useQuery({
    queryKey: ['vehicles', languageCode],
    queryFn: async () => await execute(VehiclesDocument, { languageCode }),
  });

  const vehicles = data?.vehicles;

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
      className={classes.grid}
    >
      {vehicles &&
        vehicles.length > 0 &&
        vehicles
          .slice(0, 30)
          .map(
            vehicle =>
              vehicle && <ShipCard key={vehicle.id} vehicle={vehicle} />
          )}
    </SimpleGrid>
  );
}
