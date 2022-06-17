import React, { useContext } from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import { useNavigate } from 'react-router-dom';

// Hooks
import AuthContext from '../../../hooks/context/authContext';

// Icons
import SafetyDividerIcon from '@mui/icons-material/SafetyDivider';
import LogoutIcon from '@mui/icons-material/Logout';
import BusinessIcon from '@mui/icons-material/Business';
import RedMedicatelIcon from '../../../assets/images/red-medicatel.PNG';

// Components
import { ButtonUser, DrawerItem } from '../../atoms';

// Const
import { authTypes } from '../../../commons/types';

const DrawerContent = () => {
  const navigate = useNavigate();
  const { auth, dispatchAuth } = useContext(AuthContext);
  const { personalInfo } = auth;

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
      <div className="flex justify-center items-center my-10">
        <img
          src={RedMedicatelIcon}
          alt={'Red Medicatel'}
          className={'w-8/12 h-24'}
        />
      </div>
      <div className="w-full h-28 pr-4 mb-10">
        <div className="w-full h-full pl-10 flex items-center bg-blue-100">
          <ButtonUser text={personalInfo.nombre} className='w-full' />
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
