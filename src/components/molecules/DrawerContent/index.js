import React, { useContext } from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';

// Hooks
import AuthContext from '../../../hooks/context/authContext';

// Icons
import SafetyDividerIcon from '@mui/icons-material/SafetyDivider';
import LogoutIcon from '@mui/icons-material/Logout';
import BusinessIcon from '@mui/icons-material/Business';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RedMedicatelIcon from '../../../assets/images/red-medicatel.PNG';
import UserLogo from '../../../assets/images/user-logo.PNG';

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
      <div className='flex justify-center items-center my-10'>
        <img src={RedMedicatelIcon} alt={'Red Medicatel'} className={'w-8/12 h-24'} />
      </div>
      <div className='w-full h-28 pr-4 mb-10'>
        <div className='w-full h-full pl-10 flex items-center bg-blue-200'>
          <img src={UserLogo} className='h-8 mr-4 w-10' />
          <TextCustom text='Fundación Grupo Terra' className='mr-4 text-sm text-blue-800' />
          <KeyboardArrowDownIcon color='primary' />
        </div>
      </div>
      <div className="flex flex-col justify-between h-full">
        <List>
          <DrawerItem
            text={'Empresa'}
            onClick={handleEmpresa}
            icon={<BusinessIcon />}
          />
          <DrawerItem
            text={'Colaboradores'}
            onClick={handleColaboradores}
            icon={<SafetyDividerIcon />}
          />
        </List>
        <div>
          <Divider />
          <DrawerItem
            text={'Cerrar sesión'}
            onClick={handleLogout}
            icon={<LogoutIcon />}
          />
        </div>
      </div>
    </div>
  );
};

export default DrawerContent;
