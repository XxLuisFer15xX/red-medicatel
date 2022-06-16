import React from 'react';
import Typography from '@mui/material/Typography';

const TextCustom = ({
  text = '',
  isParagraph = false,
  variant = 'h6',
  isWrap = false,
  component = '',
  ...rest
}) => {
  return (
    <Typography
      paragraph={isParagraph}
      noWrap={isWrap}
      variant={variant}
      component={component}
      {...rest}>
      {text}
    </Typography>
  );
};

export default TextCustom;
