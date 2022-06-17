import React from 'react';
import Typography from '@mui/material/Typography';

const TextCustom = ({
  text = '',
  isParagraph = false,
  variant = 'h6',
  isWrap = false,
  component = '',
  className = '',
  ...rest
}) => {
  return (
    <Typography
      paragraph={isParagraph}
      noWrap={isWrap}
      variant={variant}
      component={component}
      className={className}
      {...rest}>
      {text}
    </Typography>
  );
};

export default TextCustom;
