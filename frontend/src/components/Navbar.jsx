import React, { useState } from 'react'
import { links } from '../utils/dumyData'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa"
import ResponsiveNavBar from './ResponsiveNavBar'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='font-display sticky top-0 z-50 shadow-sm shadow-rgba(0, 0, 0, 0.1) 0px 4px 12px] bg-white w-[100%] sm:h-[80px] lg:h-[100px] justify-between flex items-center'>
      <div className='lg:ml-24 sm:ml-5'>
        <img className='lg:w-[250px] sm:w-[120px]' src="https://mlszn6rjkywy.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://nairaxi.ng/wp-content/uploads/2024/04/Nairaxi-Luxury-Car-Hire_Rentals-Ride-Hailing-Transport-Technology.png" alt="" />
      </div>
      <div className='flex items-center justify-between mr-24 sm:hidden lg:flex'>
        {
          links.map((link) => {
            return (
              <div>
                <Link key={link.id} to={link.href} className='text-[#28a745] uppercase font-bold px-4 py-2 text-[16px] hover:text-[#1d274e]'>{link.title}</Link>
              </div>
            )
          })
        }
      </div>
      <button className='lg:hidden sm:flex sm:mr-5' onClick={()=>setOpen(!open)}><FaBars /></button>{
        open &&
        <div className='absolute top-[80px] w-full h-[100vh]'>
          <ResponsiveNavBar />
        </div>
      }
    </div>
  )
}

export default Navbar