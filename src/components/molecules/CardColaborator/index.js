import React from 'react';
import { Divider } from '@mui/material';

// Icons
import BadgeIcon from '@mui/icons-material/Badge';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import UserIcon from '../../../assets/images/user.PNG';

// Components
import { DetailItem, TextCustom } from '../../atoms';

const CardColaborator = ({
  name = '',
  position = '',
  city = '',
  nid = '',
  phoneNumber = '',
  email = '',
  onClick = () => null
}) => {
  return (
    <div className="bg-white border-gray-200 border" onClick={onClick}>
      <div className='flex pl-10 py-5 w-full'>
        <div className='w-3/12'>
          <img src={UserIcon} alt='user' className='h-16' />
        </div>
        <div className='flex flex-col w-9/12'>
          <TextCustom text={name} className='text-lg text-blue-900 font-bold' />
          <TextCustom text={position} className='text-sm text-cyan-300 font-bold' />
          <TextCustom text={city} className='text-sm text-gray-900' />
        </div>
      </div>
      <Divider /> 
      <div className="flex flex-col py-10 pl-16 pr-4">
        <DetailItem
          text={nid}
          icon={<BadgeIcon className="mr-6" />}
          className={'mb-2'}
        />
        <DetailItem
          text={phoneNumber}
          icon={<PhoneIcon className="mr-6" />}
          className={'mb-2'}
        />
        <DetailItem
          text={email}
          icon={<MailOutlineIcon className="mr-6" />}
        />
      </div>
    </div>
  );
};

export default CardColaborator;
