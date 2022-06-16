import React, { useContext } from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';

// Hooks
import AuthContext from '../../../hooks/context/authContext';

// Icons
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Logout from '@mui/icons-material/Logout';

// Components
import { DrawerItem, TextCustom } from '../../atoms';

// Const
import { authTypes } from '../../../commons/types';

const DrawerContent = () => {
  const navigate = useNavigate();
  const { dispatchAuth } = useContext(AuthContext);

  const handleLogout = () => {
    dispatchAuth({ type: authTypes.logout });
  };

  const handleEmpresa = () => {
    navigate('/dashboard/home');
  };

  const handleColaboradores = () => {
    navigate('/dashboard/colaborators');
  };

  return (
    <div className="flex flex-col h-full">
      <Toolbar>
        <TextCustom text={'Red Medicatel'} variant={'h4'} />
      </Toolbar>
      <Divider />
      <div className="flex flex-col justify-between h-full">
        <List>
          <DrawerItem
            text={'Empresa'}
            onClick={handleEmpresa}
            icon={<InboxIcon />}
          />
          <DrawerItem
            text={'Colaboradores'}
            onClick={handleColaboradores}
            icon={<MailIcon />}
          />
        </List>
        <div>
          <Divider />
          <DrawerItem
            text={'Cerrar sesión'}
            onClick={handleLogout}
            icon={<Logout />}
          />
        </div>
      </div>
    </div>
  );
};

export default DrawerContent;
