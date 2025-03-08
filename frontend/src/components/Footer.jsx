import React from 'react'
import { links } from '../utils/dumyData'
import { Link } from "react-router-dom"
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='mt-24 font-display'>
      <div className='flex justify-between lg:flex-row max-w-[1000px] sm:flex-col sm:gap-3 lg:gap-5 lg:m-auto'>
        <div className='flex-1 flex flex-col gap-4'>
          <h1 className='text-[22px] text-[#1d274e] font-extrabold'>COMPANY</h1>
          <div className='uppercase text-[14px] flex flex-col gap-2'>
            {
              links.map((link) => {
                return (
                  <div key={link.id} className='my-2'>
                    <Link to={link.href}>{link.title}</Link>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='flex-1 flex flex-col gap-4'>
          <h1 className='text-[22px] text-[#1d274e] font-extrabold'>CONTACT</h1>
          <a className='text-[16px] text-[#343a40] flex items-center gap-1' href="mailto:ogbonna428alex@gmail.com"><IoMdMail /> ogbonna428alex@gmail.com</a>
          <a className='text-[16px] text-[#343a40] flex items-center gap-1' href="tel:+2348126829146"><FaPhone /> 08126829146</a>
          <a className='text-[16px] text-[#28a745] flex items-center gap-1' href="http://"><FaLocationDot /> No 16 Banjul Street, Wuse II, Abuja.</a>
        </div>
        <div className='flex-1 flex flex-col gap-4'>
          <h1 className='text-[22px] text-[#1d274e] font-extrabold'>DOWNLOAD</h1>
          <p className='text-[16px] text-[#343a40]'>Nairaxi App is now available on Android and iOS Platforms for hassle-free payments. Enjoy free rides on Registration.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer