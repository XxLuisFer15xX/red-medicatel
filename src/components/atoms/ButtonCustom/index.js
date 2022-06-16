import { Button } from '@mui/material';
import React from 'react';

const ButtonCustom = ({
  variant = 'contained',
  onClick = () => null,
  text = '',
  className = '',
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={`w-full py-4 ${className}`}>
      {text}
    </Button>
  );
};

export default ButtonCustom;
