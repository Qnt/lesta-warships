import { Badge, Box, Group, Image, Stack, Title } from '@mantine/core';
import { Vehicle } from '../graphql/graphql';
import classes from './ShipCard.module.css';

export const ShipCard = ({ vehicle }: { vehicle: Vehicle }) => (
  <Box className={classes.card}>
    <Box>
      <Image src={vehicle?.nation?.icons?.large} className={classes.flag} />
      <Image src={vehicle?.icons?.large} className={classes.ship} />
    </Box>
    <Box className={classes.overlay}></Box>
    <Stack
      gap="xs"
      justify="space-between"
      align="stretch"
      className={classes.info}
    >
      <Group gap="xs">
        <Title order={4}>{vehicle?.title}</Title>
        <Image src={vehicle?.type?.icons?.default} className={classes.icon} />
      </Group>
      <Group gap="xs">
        <Badge
          radius="xs"
          variant="default"
        >{`уровень: ${vehicle?.level}`}</Badge>
        <Badge radius="xs" variant="default">
          {vehicle?.type?.title}
        </Badge>
      </Group>
    </Stack>
  </Box>
);
