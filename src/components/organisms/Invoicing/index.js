import React from 'react'
import { TextCustom } from '../../atoms';

const Invoicing = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <TextCustom text='Facturación' className='text-blue-800 text-sm' />
      <TextCustom text='Próximamente' variant='h5' className='text-blue-800 font-bold' />
    </div>
  )
}

export default Invoicing;