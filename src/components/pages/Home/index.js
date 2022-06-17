import React from 'react';
import { Invoicing } from '../../organisms';

const Home = () => {
  return (
    <div className='grid grid-cols-3 gap-4 px-20 mb-20'>
      <div className='col-span-2 grid grid-rows-3 gap-4 h-auto'>
        <div className='flex w-full h-40 bg-white'></div>
        <div className='flex w-full h-40 bg-white'></div>
        <div className='flex w-full h-40 bg-white'></div>
      </div>
      <div className='col-span-1 h-auto bg-gray-200'>
        <Invoicing />
      </div>
    </div>
  );
};

export default Home;
