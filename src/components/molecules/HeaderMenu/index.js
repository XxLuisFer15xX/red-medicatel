import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { ButtonCustom, ButtonUser } from '../../atoms';

const HeaderMenu = ({ onClick = () => null}) => {
  return (
    <div className="h-24 pr-20 w-full flex flex-row-reverse items-start">
      <ButtonUser className='h-10' />
      <ButtonCustom text='Agendar' className='h-10 mr-10 w-auto bg-blue-500' startIcon={<AddIcon />} />
    </div>
  );
};

export default HeaderMenu;
