import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const DrawerItem = ({ text = '', onClick = () => null, icon = null }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <ListItem key={text} disablePadding onClick={handleClick}>
      <ListItemButton className='pl-10'>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default DrawerItem;
