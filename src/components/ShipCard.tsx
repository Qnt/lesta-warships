import { Vehicle } from '../graphql/graphql';
import styles from './ShipCard.module.css';

export const ShipCard = ({ vehicle }: { vehicle: Vehicle }) => (
  <div className={styles.shipCard}>
    <img
      src={vehicle?.icons?.medium}
      alt={vehicle.title}
      className={styles.shipImage}
    />
    <div className={styles.shipInfo}>
      <h3>{vehicle.title}</h3>
      <p className={styles.shipLevel}>Уровень: {vehicle.level}</p>
      <div className={styles.shipMeta}>
        <span className={styles.shipType}>
          <img
            src={vehicle?.type?.icons?.default}
            alt={vehicle?.type?.title}
            className={styles.typeIcon}
          />
          {vehicle?.type?.title}
        </span>
        <span className={styles.shipNation}>
          <img
            src={vehicle?.nation?.icons?.small}
            alt={vehicle?.nation?.title}
            className={styles.nationIcon}
          />
          {vehicle?.nation?.title}
        </span>
      </div>
      <p className={styles.shipDescription}>{vehicle.description}</p>
    </div>
  </div>
);
