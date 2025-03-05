import React from 'react'
import { data, dummy } from '../utils/dumyData'

const Home = () => {
  return (
    <div className='text-(--font-display) m-auto flex flex-col gap-[80px]'>
      <div className='flex lg:flex lg:flex-row items-center gap-4 sm:flex sm:flex-col-reverse sm:gap-4 sm:even:flex-row-reverse'>
        <div className='flex-1'>
          <div className='mx-[80px] flex flex-col gap-4 sm:mx-[20px] sm:gap-2'>
            <h1 className='text-[70px] text-[#1d274e] font-extrabold leading-[78px] sm:text-[30px] sm:leading-8'>Do More with Nairaxi</h1>
            <p className='text-[22px] text-[#868e96] sm:text-[16px]'>Get an affordable ride service in minutes.</p>
            <p className='text-[22px] text-[#868e96] sm:text-[16px]'>Shop and have groceries delivered right to your door from your favorite stores.</p>
            <p className='text-[22px] text-[#868e96] sm:text-[16px]'>Send, Receive & Track items seamlessly  all on one platform.</p>
          </div>
        </div>
        <div className='flex-1'>
          <img className='flex-1 w-[100]' src="https://mlszn6rjkywy.i.optimole.com/w:850/h:803/q:mauto/f:best/https://nairaxi.ng/wp-content/uploads/2023/06/Nairaxi-the-hybrid-application-for-movement-shopping-and-parcel-delivery-1-min.png" alt="" />
        </div>
      </div>
      <div className='max-w-[1100px] m-auto lg:flex lg:flex-row items-center justify-between gap-6 sm:flex sm:flex-col sm:gap-4'>
        {
          dummy.map((item) => {
            return (
              <div className='flex gap-3 flex-col items-center'>
                <img src={item.img} className='w-[300px] object-cover sm:w-[150px]' alt="" />
                <h1 className='text-[24px] font-bold text-[#1d274e] sm:text-[18px]'>{item.title}</h1>
                <p className='text-[#868e96] text-center text-[16px] leading-[25px] sm:text-[16px]'>{item.desc}</p>
              </div>
            )
          })
        }
      </div>
      <div className='flex flex-col lg:gap-[60px] sm:flex sm:flex-col sm:gap-6'>
        {
          data.map((data) => {
            return (
              <div className='lg:flex lg:flex-row lg:gap-6 items-center lg:even:flex-row-reverse sm:flex sm:flex-col sm:gap-4'>
                <div className='flex-1 w-full'>
                  <img src={data.img} className='w-[100%] object-cover' alt="" />
                </div>
                <div className='flex-1'>
                  <div className='lg:px-[120px] flex-1 flex flex-col gap-6 sm:px-[40px]'>
                    <h1 className='font-extrabold text-[46px] text-[#28a745] sm:text-[28px]'>{data.title}</h1>
                    <p className='text-[#868e96] text-[19px] leading-[30px] sm:text-[16px]'>{data.desc}</p>               
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home