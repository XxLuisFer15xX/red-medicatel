import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { TextCustom } from '../../atoms';

const HeaderMenu = ({ onClick = () => null}) => {
  return (
    <Toolbar className="p-4">
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={onClick}
        sx={{ mr: 2, display: { sm: 'none' } }}
        className={'h-full'}
      >
        <MenuIcon />
      </IconButton>
      <div className="w-full">
        <TextCustom
          text={'Header Menu'}
          variant={'h6'}
          component={'div'}
        />
      </div>
    </Toolbar>
  );
};

export default HeaderMenu;
