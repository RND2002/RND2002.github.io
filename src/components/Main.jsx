import React from 'react'

import dashboard from './Assets/dashBoard.jpeg'

const Main = () => {
  return (
    <div className='h-96 md:mx-32'>
        <div className='flex mx-12 mt-48 justify-between'>
           
      <div class="flex flex-col sm:flex-row items-center">
  <div class="sm:w-1/2">
    <h1 class="font-semibold text-6xl text-navColor ">Welcome to CodeSite</h1>
    <h3 class="font-semibold text-lg text-wt ">We are working to make magic happen on the Internet</h3>
    <div class="mt-5">
     <a  href='#contact'> <button class="border border-white rounded-full font-bold px-8 py-2 bg-navColor">Contact us</button></a>
    </div>
  </div>
  <div class="sm:w-1/2 lg:w-1/2 ">
    <img class="hidden lg:block object-cover h-60 w-96 rounded-lg mr-32" src={dashboard} alt=""/>
  </div>
</div>


    </div>
    </div>
  )
}


export default Main



