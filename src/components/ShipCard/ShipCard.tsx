import { FragmentType, graphql, useFragment } from '@/graphql';
import { numberToRoman } from '@/utils/numberToRoman';
import { Box, Group, Image, Stack, Title } from '@mantine/core';
import classes from './ShipCard.module.css';

const Vehicle_QueryFragment = graphql(`
  fragment Vehicle_QueryFragment on Vehicle {
    title
    icons {
      large
    }
    level
    description
    type {
      title
      icons {
        default
      }
    }
    nation {
      title
      color
      icons {
        large
      }
    }
  }
`);

type VehicleCardProps = {
  vehicle: FragmentType<typeof Vehicle_QueryFragment>;
  handleCardClick: () => void;
};

const ShipCard = function ShipCard({
  vehicle,
  handleCardClick,
}: VehicleCardProps) {
  const vehicleData = useFragment(Vehicle_QueryFragment, vehicle);

  const nationColor = vehicleData?.nation?.color ?? '#000';
  const level = vehicleData?.level ? numberToRoman(vehicleData.level) : '';

  return (
    <Box
      className={classes.card}
      onClick={handleCardClick}
      style={{ '--nation-color': nationColor } as React.CSSProperties}
    >
      <Box>
        <Image
          src={vehicleData?.nation?.icons?.large}
          className={classes.flag}
        />
        <Image
          src={vehicleData?.icons?.large}
          className={classes.ship}
          loading="lazy"
        />
      </Box>
      <Stack
        gap="xs"
        justify="space-between"
        align="stretch"
        className={classes.info}
      >
        <Group gap="xs" align="center">
          <Title order={4} className={classes.title}>
            {`${level} ${vehicleData?.title}`}
          </Title>
          <Image src={vehicleData?.type?.icons?.default} />
        </Group>
      </Stack>
      <Box className={classes.overlay} />
    </Box>
  );
};

export default ShipCard;
