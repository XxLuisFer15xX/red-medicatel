import React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import { DrawerItem, TextCustom } from '../../atoms';
import { apiTest } from '../../../api';

const DrawerContent = () => {
  const handlePressItem = async () => {
    const response = await apiTest();
    console.log(response);
  }

  return (
    <div>
      <Toolbar>
        <TextCustom text={'Asegurame'} variant={'h4'} />
      </Toolbar>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <DrawerItem key={index} text={text} index={index} onClick={handlePressItem} />
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <DrawerItem key={index} text={text} index={index} onClick={handlePressItem} />
        ))}
      </List>
    </div>
  );
};

export default DrawerContent;
