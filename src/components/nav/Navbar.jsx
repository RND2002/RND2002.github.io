import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiNetworkChart} from 'react-icons/bi'
import {AiOutlineMessage} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'

const Navbar = () => {
  const [activeNav,setActiveNav]=useState('#home')
  return (
<nav>
  <a href="#home" onClick={()=>setActiveNav('#home')}  className={activeNav==='#home' ?'active':' '}><AiOutlineHome/></a>
  <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active':' '}><AiOutlineUser/></a>
  <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#portfolio' ? 'active':' '}><BiNetworkChart/></a>
  <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav==='#services' ? 'active':' '}><RiServiceLine/></a>
  <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active':' '}><AiOutlineMessage/></a>
  

</nav>
  )
}

export default Navbar