
import React from 'react';
import web from './Assets/web2.jpeg'
import app from './Assets/appDev.jpeg'
import iot from './Assets/iotDev.jpeg'

const Services = () => {
  return (
    <div className='p-4 sm:p-8 md:p-12 lg:p-16' id='services'>
      <h2 className='text-wt text-4xl text-center mb-8'>Our Services</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 '>
        <div className=' border-wt border rounded-lg  text-center  hover:bg-navColor'>
          <img className='h-72 w-full rounded-lg mx-auto object-cover' src={web} alt='' />
          <div className='p-3  mt-4'>
            <span className='text-wt font-bold text-2xl'>Web Development</span>
          </div>
        </div>
        <div className='border-wt border rounded-lg  text-center hover:bg-navColor'>
          <img className='h-72 w-full rounded-lg mx-auto object-cover ' src={app} alt='' />
          <div className=' p-3 mt-4'>
            <span className='text-wt font-bold text-2xl'>App Development</span>
          </div>
        </div>
        <div className='border-wt border rounded-lg text-center hover:bg-navColor'>
          <img className='h-72 w-full rounded-lg mx-auto object-cover' src={iot} alt='' />
          <div className=' p-3 mt-4 '>
            <span className='text-wt font-bold text-2xl'>Desktop Apps</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
