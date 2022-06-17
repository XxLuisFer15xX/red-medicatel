import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import UserLogo from '../../../assets/images/user-logo.PNG';
import TextCustom from '../TextCustom';

const ButtonUser = ({
  text = '',
  className = '',
  textStyle = '',
  iconColor = 'primary',
}) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className='flex items-center'>
        <img src={UserLogo} className={'h-8 mr-4 w-10'} alt="user" />
        <TextCustom
          text={text}
          className={`mr-4 text-sm text-blue-800 ${textStyle}`}
        />
      </div>
      <KeyboardArrowDownIcon color={iconColor} className='mr-4' />
    </div>
  );
};

export default ButtonUser;
