import { Image, Stack, Title, Text, Box, Group, Badge } from '@mantine/core';
import { Vehicle } from '../../graphql/graphql';
import classes from './ShipFullInfo.module.css';

export default function ShipFullInfo({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Stack className={classes.container}>
      <Box className={classes.images}>
        <Image src={vehicle?.nation?.icons?.large} className={classes.flag} />
        <Image src={vehicle?.icons?.large} className={classes.ship} />
      </Box>
      <Stack>
        <Group gap="xs">
          <Title order={4}>{vehicle?.title}</Title>
          <Image src={vehicle?.type?.icons?.default} />
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
      <Text>{vehicle?.description}</Text>
    </Stack>
  );
}
