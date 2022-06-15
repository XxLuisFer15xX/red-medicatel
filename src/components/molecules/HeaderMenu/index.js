import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { TextCustom } from '../../atoms';

const HeaderMenu = () => {
  return (
    <Toolbar className="p-4">
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
