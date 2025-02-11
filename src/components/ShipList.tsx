import { useQuery } from '@tanstack/react-query';
import { VehiclesDocument } from '../api/documents';
import { execute } from '../api/execute';
import styles from './ShipList.module.css';

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
    <div className={styles.shipsGrid}>
      {vehicles &&
        vehicles.length > 0 &&
        vehicles.map(
          vehicle => <div key={vehicle?.title}>{vehicle?.title}</div>
          // <ShipCard key={vehicle?.title} vehicle={vehicle} />
        )}
    </div>
  );
}
