import React from 'react';
import { ButtonCustom, TextCustom } from '../../atoms';

const WelcomeSection = ({name = ''}) => {
  return (
    <div className="flex flex-col p-10">
      <div className="flex mb-6 mt-6">
        <TextCustom text="Hola," className="text-blue-800 pr-1 text-3xl" />
        <TextCustom
          text={name}
          className="text-blue-800 font-bold text-3xl"
        />
      </div>
      <div className="mb-10">
        <TextCustom
          text="Bienvenido a Red Medicatel"
          className="text-gray-600 pr-1 text-sm mb-2"
        />
        <TextCustom
          text="Agenda y ten toda la información médica de tu empresa"
          className="text-gray-600 pr-1 text-sm"
        />
      </div>
      <div>
        <ButtonCustom
          text="Agendar"
          className="text-white text-lg py-4 w-64 bg-blue-800"
          style={{ textTransform: 'none' }}
        />
      </div>
    </div>
  );
};

export default WelcomeSection;
