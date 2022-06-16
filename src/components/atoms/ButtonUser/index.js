import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import UserLogo from '../../../assets/images/user-logo.PNG';
import TextCustom from '../TextCustom';

const ButtonUser = ({ className = ''}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={UserLogo} className={'h-8 mr-4 w-10'} alt="user" />
      <TextCustom
        text="Fundación Grupo Terra"
        className="mr-4 text-sm text-blue-800"
      />
      <KeyboardArrowDownIcon color="primary" />
    </div>
  );
};

export default ButtonUser;
