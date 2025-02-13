import { Button } from '@mantine/core';
import classes from './DrawerButton.module.css';
import type { ButtonProps } from '@mantine/core';

interface DrawerButtonProps extends ButtonProps {
  onClick: () => void;
}

export default function DrawerButton({ onClick, ...props }: DrawerButtonProps) {
  return (
    <Button
      variant="filled"
      className={classes.button}
      onClick={onClick}
      {...props}
    >
      {props.children}
    </Button>
  );
}
