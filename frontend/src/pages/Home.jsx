import React from 'react'
import { data } from '../utils/dumyData'

const Home = () => {
  return (
    <div className='text-(--font-display) m-auto'>
      <div className='flex items-center gap-4'>
        <div className='flex-1'>
          <div className='mx-[80px] flex flex-col gap-4'>
            <h1 className='text-[70px] text-[#1d274e] font-extrabold leading-[78px]'>Do More with Nairaxi</h1>
            <p className='text-[22px] text-[#868e96]'>Get an affordable ride service in minutes.</p>
            <p className='text-[22px] text-[#868e96]'>Shop and have groceries delivered right to your door from your favorite stores.</p>
            <p className='text-[22px] text-[#868e96]'>Send, Receive & Track items seamlessly  all on one platform.</p>
          </div>
        </div>
        <div className='flex-1'>
          <img className='flex-1 w-[100]' src="https://mlszn6rjkywy.i.optimole.com/w:850/h:803/q:mauto/f:best/https://nairaxi.ng/wp-content/uploads/2023/06/Nairaxi-the-hybrid-application-for-movement-shopping-and-parcel-delivery-1-min.png" alt="" />
        </div>
      </div>
      <div className='flex flex-col gap-[60px] not-odd:'>
        {
          data.map((data) => {
            return (
              <div className='flex gap-5 items-center even:flex-row-reverse'>
                <div className='flex-1 w-full'>
                  <img src={data.img} className='w-[100%] object-cover' alt="" />
                </div>
                <div className='flex-1'>
                  <div className='px-[120px] flex-1 flex flex-col gap-6'>
                    <h1 className='font-extrabold text-[46px] text-[#28a745]'>{data.title}</h1>
                    <p className='text-[#868e96] text-[19px] leading-[30px]'>{data.desc}</p>               
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