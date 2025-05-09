import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { RiWhatsappFill } from 'react-icons/ri'

const Icons = () => {
  return (
    <div className='lg:px-10 sm:px-5 fixed bottom-5 z-30'>
        <div className='flex justify-between items-center gap-5'>
          <div>
          <button className='lg:w-[55px] sm:h-[40px] sm:w-[40px] lg:h-[55px] shadow-sm shadow-rgba(0, 0, 0, 0.1) 0px 4px 12px] rounded-[50%] bg-[#087c23] text-white items-center justify-center flex lg:text-[24px] sm:text-[14px]'><a href="tel:+2348126829146"><FaPhoneAlt /></a></button>
          </div>
          <div className='float-right'>
          <a href="https://wa.me/08126829146">
            <button className='lg:w-[55px] sm:h-[40px] sm:w-[40px] lg:h-[55px] items-center justify-center cursor-pointer shadow-sm shadow-rgba(0, 0, 0, 0.1) 0px 4px 12px]  rounded-[50%] bg-[#087c23] text-white flex sm:text-[18px] lg:text-[24px]'><RiWhatsappFill /></button>
          </a>
          </div>
        </div>
      </div>
  )
}

export default Icons