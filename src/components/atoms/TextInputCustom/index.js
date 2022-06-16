import React from 'react';
import TextField from '@mui/material/TextField';

const TextInputCustom = ({
  text = '',
  variant = 'outlined',
  value = '',
  handleInputChange = () => null,
  targetName = '',
  type = '',
  maxLength = null,
  ...rest
}) => {
  return (
    <TextField
      id="outlined-basic"
      label={text}
      variant={variant}
      name={targetName}
      value={value}
      onChange={handleInputChange}
      type={type}
      inputProps={{
        maxLength: maxLength,
    }}
      {...rest}
    />
  );
};

export default TextInputCustom;
