
// import React from 'react'
// import {GiHamburgerMenu} from 'react-icons/gi'

// const Navbar = () => {
//   return (
//     <div className='bg-navColor'>
      

      


// <header class="bg-white bg-opacity-5 text-white shadow-lg hidden md:block">
//   <div class="container mx-auto flex items-center h-24">
//     <a href="" class="flex items-center justify-center">
//       {/* <img className="h-16 bg-none" src={logo} alt="" /> */}
//       <span class="ml-4 text-2xl font-black">Codesite</span>
//     </a>
//     <div clas><GiHamburgerMenu size={40}/></div>
//     <nav class="contents font-semibold text-base lg:text-lg">
//       <ul class="mx-auto flex items-center">
//         <li class="p-5 xl:p-8 active">
//           <a href="WhatWeDo">
           
//             <span>What we do</span>
//           </a>
//         </li>
//         <li class="p-5 xl:p-8">
//           <a href="#About">
//             <span>Who we are</span>
//           </a>
//         </li>
//         <li class="p-5 xl:p-8">
//           <a href="">
//             <span>Our projects</span>
//           </a>
//         </li>
//         <li class="p-5 xl:p-8">
//           <a href="">
//             <span>Services</span>
//           </a>
//         </li>
//         <li class="p-5 xl:p-8">
//           <a href="">
//             <span>Blog</span>
//           </a>
//         </li>
//       </ul>
//     </nav>
//     <button class="border border-white rounded-full font-bold px-8 py-2">Contact</button>
//   </div>
// </header>
//     </div>
//   )
// }

// export default Navbar
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = [
  { name: 'What We Do', href: '#whatWeDo', current: true },
 
  { name: 'Projects', href: '#services', current: false },
  { name: 'Services', href: '#services', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-navColor">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                <a href="/" className="flex items-center">
              <span className="text-2xl font-black">Codesite</span>
            </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {Navbar.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
             
              <a href='#contact'><button class="border border-white rounded-full font-bold px-8 py-2">Contact</button></a>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {Navbar.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
