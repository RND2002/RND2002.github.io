import React from 'react';
import Blockmagix from './Assets/BlockMagix.png'




const Customers = () => {
  // const items = mainCarouselData.map((item) => (
  //   <img className='cursor pointer -z-10 h-60' role='presentation' src={item.image} alt='' />
  // ));

  // return (
  // <div className='flex flex-row'>
  //    <div className=''>
  //    <AliceCarousel
    
  //   items={items}
  //   disableButtonControls
  //   disableButtonsControls
  //   autoPlay
  //   autoPlayInterval={2000} // Adjust the value here to control the sliding speed
  //   infinite
    
  // />
  //    </div>
 
  // </div>
  // );
  return(
    <div>
      <div className='p-4 sm:p-8 md:p-12 lg:p-16' id='services'>
      <h2 className='text-wt text-4xl text-center mb-8'>Our Happy Clients</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 '>
        <div className=' border-wt border rounded-lg  text-center  hover:bg-navColor'>
          <img className='h-72 w-full rounded-lg mx-auto object-cover' src={Blockmagix} alt='' />
          <div className='p-3  mt-4'>
            <span className='text-wt font-bold text-3xl'>Web Development</span>
          </div>
        </div>
        {/* <div className='border-wt border rounded-lg  text-center hover:bg-navColor'>
          <img className='h-72 w-full rounded-lg mx-auto object-cover ' src={Blockmagix} alt='' />
          <div className=' p-3 mt-4'>
            <span className='text-wt font-bold text-2xl'>App Development</span>
          </div>
        </div>
        <div className='border-wt border rounded-lg text-center hover:bg-navColor'>
          <img className='h-72 w-full rounded-lg mx-auto object-cover' src={Blockmagix} alt='' />
          <div className=' p-3 mt-4 '>
            <span className='text-wt font-bold text-3xl'>Desktop Apps</span>
          </div>
        </div> */}
      </div>
    </div>
  );
    </div>
  )
};

export default Customers;
