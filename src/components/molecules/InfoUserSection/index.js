import React from 'react';

// Icons
import BadgeIcon from '@mui/icons-material/Badge';
import FlagIcon from '@mui/icons-material/Flag';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import UserLogo from '../../../assets/images/user-logo.PNG';

// Components
import { DetailItem, TextCustom } from '../../atoms';

const InfoUserSection = () => {
  return (
    <div className="flex flex-col w-full p-10">
      <div className="flex flex-row w-full pb-10">
        <div className="relative w-32 h-32 mr-10">
          <img
            className="rounded-full border border-gray-100 shadow-sm w-32 h-32"
            src={UserLogo}
            alt="user"
          />
        </div>
        <div className="h-auto flex items-center">
          <div>
            <TextCustom
              text="Fundación Grupo Terra"
              className="text-blue-800 font-bold text-3xl mb-2"
            />
            <TextCustom
              text="correo@fundaciongrupoterra.com"
              className="text-cyan-500 font-bold text-sm"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-6/12">
          <DetailItem
            title='RTN'
            text='0801-1900-00000'
            icon={<BadgeIcon className='mr-6' />}
          />
          <DetailItem
            title='País'
            text='Honduras'
            icon={<FlagIcon className='mr-6' />}
          />
        </div>
        <div className="w-6/12">
          <DetailItem
            title='Teléfono'
            text='(504) 2222-2222'
            icon={<PhoneIcon className='mr-6' />}
          />
          <DetailItem
            title='Ciudad'
            text='Tegucigalpa'
            icon={<LocationCityIcon className='mr-6' />}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoUserSection;
