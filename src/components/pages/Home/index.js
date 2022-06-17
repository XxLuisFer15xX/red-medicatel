import React, { useContext } from 'react';
import AuthContext from '../../../hooks/context/authContext';
import { InfoUserSection, StatisticSection, WelcomeSection } from '../../molecules';
import { Invoicing } from '../../organisms';

const Home = () => {
  const { auth } = useContext(AuthContext);
  const { personalInfo } = auth;

  return (
    <div className='grid grid-cols-3 gap-4 px-20 mb-20'>
      <div className='col-span-2 grid grid-rows-5 gap-4 h-auto'>
        <div className='row-span-2 flex w-full bg-white'>
          <WelcomeSection name={personalInfo.nombre} />
        </div>
        <div className='row-span-2 flex w-full bg-white'>
          <InfoUserSection
            name={personalInfo.nombre}
            phoneNumber={personalInfo.telefono}
            email={personalInfo.correo}
            rtn={personalInfo.rtn}
            country={personalInfo.pais}
            city={personalInfo.ciudad}
          />
        </div>
        <div className='row-span-1 grid grid-cols-3 gap-4 w-full'>
          <StatisticSection text='123' title='Colaboradores' />
          <StatisticSection text='29' title='Citas Agendadas' />
          <StatisticSection text='29 / 100' title='Positivos / Negativos' isCovid />
        </div>
      </div>
      <div className='col-span-1 h-auto bg-gray-200'>
        <Invoicing />
      </div>
    </div>
  );
};

export default Home;
