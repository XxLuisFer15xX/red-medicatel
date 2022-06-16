import { Button } from '@mui/material';
import React from 'react';

const ButtonCustom = ({
  variant = 'contained',
  onClick = () => null,
  text = '',
  className = '',
  ...rest
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={`w-full py-4 ${className}`}
      {...rest}>
      {text}
    </Button>
  );
};

export default ButtonCustom;
