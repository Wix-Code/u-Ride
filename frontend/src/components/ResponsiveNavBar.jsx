import React from 'react'
import { links } from '../utils/dumyData'

const ResponsiveNavBar = () => {
  return (
    <div className='bg-white w-full h-[100vh]'>
      {
        links.map((link) => {
          return (
            <div key={link.id} className='flex items-center justify-between px-5 py-3'>
              <a href={link.href} className='text-[#28a745] uppercase font-bold px-4 py-2 text-[16px] hover:text-[#007bff]'>{link.title}</a>
            </div>
          )
        })
      }
    </div>
  )
}

export default ResponsiveNavBar