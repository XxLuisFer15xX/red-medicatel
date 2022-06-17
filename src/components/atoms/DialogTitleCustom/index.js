import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { DialogTitle, IconButton } from '@mui/material';

const DialogTitleCustom = ({ children, onClose, ...other }) => {
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme => theme.palette.grey[500],
        }}>
        <CloseIcon />
      </IconButton>
    </DialogTitle>
  );
};

export default DialogTitleCustom;
