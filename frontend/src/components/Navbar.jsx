import React, { useContext, useState } from 'react'
import { links } from '../utils/dumyData'
import { Link, useLocation} from 'react-router-dom'
import { FaBars } from "react-icons/fa"
import ResponsiveNavBar from './ResponsiveNavBar'
import { storeContext } from '../utils/Context'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { token, clearDetails } = useContext(storeContext)
  const location = useLocation();
  const pathname = location.pathname

  return (
    <div className='font-display sticky top-0 z-50 shadow-sm shadow-rgba(0, 0, 0, 0.1) 0px 4px 12px] bg-white lg:max-w-[1100px]  m-auto sm:h-[80px] lg:h-[100px] justify-between flex items-center'>
      <div className='lg:ml-24 sm:ml-5'>
        <Link to="/"><img className='lg:w-[250px] sm:w-[120px]' src="https://mlszn6rjkywy.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://nairaxi.ng/wp-content/uploads/2024/04/Nairaxi-Luxury-Car-Hire_Rentals-Ride-Hailing-Transport-Technology.png" alt="" /></Link>
      </div>
      <div className='flex items-center justify-between mr-24 sm:hidden lg:flex'>
        {
          links.map((link) => {
            return (
              <div key={link.id}>
                <Link to={link.href} className={`uppercase font-bold px-4 py-2 text-[16px] hover:text-[#1d274e] ${
        pathname === link.href ?  'text-[#1d274e]' : 'text-[#28a745]'
      }`}>{link.title}</Link>
              </div>
            )
          })
        }
      </div>
      <div className='lg:mr-10 sm:hidden lg:flex'>
      {
        token ?
        <button className='px-4 py-2 text-[16px] uppercase text-white font-bold bg-[#28a745] hover:bg-[#1d274e]' onClick={clearDetails}>Logout</button> : <Link to="/login"><button  className='px-4 py-2 text-[16px] uppercase text-white font-bold bg-[#28a745] hover:bg-[#1d274e]'>Login</button></Link>
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