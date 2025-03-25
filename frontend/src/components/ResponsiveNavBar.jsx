import React, { useContext } from 'react'
import { links } from '../utils/dumyData'
import { Link } from 'react-router-dom'
import { storeContext } from '../utils/Context'

const ResponsiveNavBar = () => {
  const { token, clearDetails } = useContext(storeContext)
  
  return (
    <div className='bg-white w-full h-[100vh] lg:hidden sm:flex sm:flex-col'>
      {
        links.map((link) => {
          return (
            <div key={link.id} className='flex items-center justify-center px-5 py-3'>
              <a href={link.href} className='text-[#28a745] uppercase font-bold px-4 py-2 text-[16px] hover:text-[#007bff]'>{link.title}</a>
            </div>
          )
        })
      }
      <div className=' sm:flex lg:hidden justify-center'>
      {
        token ?
        <button className='px-4 py-2 text-[16px] uppercase text-white font-bold bg-[#28a745] hover:bg-[#1d274e]' onClick={clearDetails}>Logout</button> : <Link to="/login"><button  className='px-4 py-2 text-[16px] uppercase text-white font-bold bg-[#28a745] hover:bg-[#1d274e]'>Login</button></Link>
      }
      </div>
    </div>
  )
}

export default ResponsiveNavBar