import React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import { DrawerItem, TextCustom } from '../../atoms';

const DrawerContent = () => {
  return (
    <div>
      <Toolbar>
        <TextCustom text={'Asegurame'} variant={'h4'} />
      </Toolbar>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <DrawerItem text={text} index={index} />
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <DrawerItem text={text} index={index} />
        ))}
      </List>
    </div>
  );
};

export default DrawerContent;
