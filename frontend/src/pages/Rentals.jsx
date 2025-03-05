import React from 'react'

const Rentals = () => {
  return (
    <div className='flex flex-col gap-20'>
      <div className='h-[75vh] mt-5 flex justify-center flex-col gap-3 items-center bg-cover bg-center bg-[url("https://mlszn6rjkywy.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://nairaxi.ng/wp-content/uploads/2024/04/NAIRAXI-luxury-car-rentals-with-chauffeur-vip.jpg")]'> 
        <h1 className='text-[#FFFFFF] lg:text-[48px] lg:font-extrabold'>Luxury Car Rentals with Chauffeur</h1>
        <p className='text-[#FFFFFF] lg:text-[16px] lg:font-bold'>Airport Transfer, Private Car Hire Services in Abuja, Lagos, Kano, PH & All major cities in Nigeria
        </p>
        <button className='py-3 px-7 bg-[#28a745] text-[16px] text-white cursor-pointer'>Book Now</button>
      </div>
      <div className='flex justify-center flex-col items-center max-w-[750px] m-auto'>
        <p className='font-extrabold uppercase text-[#1d274e]'>What we do</p>
        <p className='text-center text-[16px] font-medium mt-5 text-[#343a40]'>U-RIDE Luxury Car Rentals with Chauffeur gets you to your destination promptly and comfortably. Our experienced staff offers personalized and professional assistance that enhances any celebration or corporate event. You can rely on a clean picture perfect condition vehicle waiting for you for special occasions and corporate ground transportation.</p>
      </div>
      <div className='flex items-center max-w-[1150px] m-auto lg:gap-8'>
        <div className='flex flex-col gap-5'>
          <img src="https://mlszn6rjkywy.i.optimole.com/w:1035/h:741/q:mauto/f:best/https://nairaxi.ng/wp-content/uploads/2024/06/Nairaxi-Luxury-chauffeur-Hire-a-car-in-Abuja.jpg" alt="" />
          <p className='text-[#1d274e] font-bold text-[24px]'>Airport Transportation</p>
          <p className='text-[#343a40] text-[16px]'>We provide pick up and drop off and shuttle service to and from all major local airports in surrounding areas in one of our comfortable luxury sedans. We can assist you with airport transfers for stress-free travel and take you to all your desired destinations.</p>
        </div>
        <div className='flex flex-col gap-3'>
          <img src="https://mlszn6rjkywy.i.optimole.com/w:1035/h:741/q:mauto/f:best/https://nairaxi.ng/wp-content/uploads/2024/06/Nairaxi-Luxury-chauffeur-Hire-a-car-in-Abuja.jpg" alt="" />
          <p className='text-[#1d274e] font-bold text-[24px]'>Flexible Rentals</p>
          <p className='text-[#343a40] text-[16px]'>Get your private transportation service for your special event such as your wedding day, corporate, night out on the town, bachelor/bachelorette party, concert, and more. We also provide high-quality private car service for your business meetings or corporate affairs.</p>
        </div>
      </div>
    </div>
  )
}

export default Rentals