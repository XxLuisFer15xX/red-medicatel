import React from 'react';
import { ButtonCustom, ButtonUser } from '../../atoms';

const HeaderMenu = ({ onClick = () => null}) => {
  return (
    <div className="h-24 pr-20 w-full flex flex-row-reverse items-start">
      <ButtonUser className='h-10' />
      <ButtonCustom text='Agregar' className='h-10 mr-10 w-auto bg-blue-500' />
    </div>
  );
};

export default HeaderMenu;
