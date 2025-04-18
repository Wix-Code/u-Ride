import React, { useContext } from 'react'
import { links } from '../utils/dumyData'
import { Link, useLocation } from 'react-router-dom'
import { storeContext } from '../utils/Context'

const ResponsiveNavBar = () => {
  const { token, clearDetails } = useContext(storeContext)
  const location = useLocation();
  const pathname = location.pathname
  
  return (
    <div className='bg-white w-full h-[100vh] border-t-[1px] border-t-[#28a745]  lg:hidden sm:flex sm:flex-col'>
      {
        links.map((link) => {
          return (
            <div key={link.id} className='flex border-b-[1px] border-b-[#28a745] items-center justify-center px-5 py-3'>
              <a href={link.href} className={`uppercase font-bold hover:duration-[0.5s] hover:translate-x-2 hover:transform px-4 py-2 text-[16px] hover:text-[#1d274e] ${
        pathname === link.href ?  'text-[#1d274e]' : 'text-[#28a745]'
      }`}>{link.title}</a>
            </div>
          )
        })
      }
      <div className='sm:flex sm:mt-4 pb-4 lg:hidden border-b-[1px]  border-b-[#28a745] justify-center'>
      {
        token ?
        <button className='px-4 py-2 text-[16px] uppercase text-white font-bold bg-[#28a745] hover:bg-[#1d274e]' onClick={clearDetails}>Logout</button> : <Link to="/login"><button  className='px-4 py-2 text-[16px] uppercase text-white font-bold bg-[#28a745] hover:bg-[#1d274e]'>Login</button></Link>
      }
      </div>
    </div>
  )
}

export default ResponsiveNavBar