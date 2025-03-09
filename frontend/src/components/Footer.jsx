import React from 'react'
import { links } from '../utils/dumyData'
import { Link } from "react-router-dom"
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='mt-32 font-display'>
      <div className='flex justify-between lg:flex-row max-w-[1000px] sm:flex-col sm:gap-3 lg:gap-5 lg:m-auto sm:mx-6'>
        <div className='flex-1 flex flex-col gap-4'>
          <h1 className='lg:text-[22px] sm:text-[18px] text-[#1d274e] font-extrabold'>COMPANY</h1>
          <div className='uppercase lg:text-[14px] sm:text-[13px] flex flex-col gap-2'>
            {
              links.map((link) => {
                return (
                  <div key={link.id} className='my-2'>
                    <Link to={link.href}><p className='hover:text-[#28a745] hover:duration-[0.5s] hover:translate-x-2 hover:transform'>{link.title}</p></Link>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='flex-1 flex flex-col gap-4'>
          <h1 className='lg:text-[22px] sm:text-[18px] text-[#1d274e] font-extrabold'>CONTACT</h1>
          <a className='lg:text-[16px] sm:text-[14px] text-[#343a40] flex items-center gap-1' href="mailto:ogbonna428alex@gmail.com"><IoMdMail /> ogbonna428alex@gmail.com</a>
          <a className='lg:text-[16px] sm:text-[14px] text-[#343a40] flex items-center gap-1' href="tel:+2348126829146"><FaPhone /> 08126829146</a>
          <a className='lg:text-[16px] sm:text-[14px] text-[#28a745] flex items-center gap-1' href="http://"><FaLocationDot /> No 16 Banjul Street, Wuse II, Abuja.</a>
          <img className='mt-3' src="https://s11.flagcounter.com/count2/O9J1/bg_FFFFFF/txt_000000/border_FFFFFF/columns_4/maxflags_40/viewers_0/labels_0/pageviews_1/flags_0/percent_0/" alt="" />
        </div>
        <div className='flex-1 flex flex-col gap-4'>
          <h1 className='lg:text-[22px] sm:text-[18px] text-[#1d274e] font-extrabold'>DOWNLOAD</h1>
          <p className='lg:text-[16px] sm:text-[14px] text-[#343a40]'>Nairaxi App is now available on Android and iOS Platforms for hassle-free payments. Enjoy free rides on Registration.</p>
          <div className='flex sm:flex-row sm:gap-1 lg:flex-row lg:gap-2'>
            <img src="https://mlszn6rjkywy.i.optimole.com/w:160/h:56/q:mauto/f:best/https://nairaxi.ng/wp-content/uploads/2020/07/playstore-nairaxi.png" alt="" />
            <img src="https://mlszn6rjkywy.i.optimole.com/w:160/h:56/q:mauto/f:best/https://nairaxi.ng/wp-content/uploads/2020/07/appstorenairaxi.png" alt="" />
          </div>
        </div>
      </div>
      <div className='bg-[#28a745] py-10 text-center mt-20'>
        <p className='lg:text-[14px] sm:text-[12px] text-white'>© 2021-2025 NARAXI. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer