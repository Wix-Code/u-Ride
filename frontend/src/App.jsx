import React from 'react'
import "./App.css"
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Rout from './Rout'
import Footer from './components/Footer'
import { FaPhoneAlt } from 'react-icons/fa'
import { RiWhatsappFill } from "react-icons/ri";

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Rout />
      <Footer />
      <div className='flex justify-between items-center fixed bottom-5 z-30 w-full px-10'>
        <button className='w-[55px] shadow-sm shadow-rgba(0, 0, 0, 0.1) 0px 4px 12px] h-[55px] rounded-[50%] bg-[#087c23] text-white items-center justify-center flex text-[24px]'><a href="tel:+2348126829146"><FaPhoneAlt /></a></button>
        <a href="https://wa.me/08126829146">
          <button className='w-[55px] h-[55px] items-center justify-center cursor-pointer shadow-sm shadow-rgba(0, 0, 0, 0.1) 0px 4px 12px]  rounded-[50%] bg-[#087c23] text-white flex text-[24px]'><RiWhatsappFill /></button>
        </a>
      </div>
    </div>
  )
}

export default App