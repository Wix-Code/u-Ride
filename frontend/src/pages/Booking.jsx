import React from 'react'

const Booking = () => {
  return (
    <div className='font-display flex flex-col gap-20'>
       <div className='lg:h-[75vh] sm:h-[60vh] mt-5 flex justify-center flex-col gap-3 items-center bg-cover bg-center bg-[url("https://mlszn6rjkywy.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://nairaxi.ng/wp-content/uploads/2024/04/NAIRAXI-luxury-car-rentals-with-chauffeur-vip.jpg")]'> 
        <h1 className='text-[#FFFFFF] text-center lg:text-[48px] sm:text-[30px] font-extrabold'>Luxury Car Rentals with Chauffeur</h1>
        <p className='text-[#FFFFFF] text-center lg:text-[18px] sm:text-[18px] font-bold'>Airport Transfer, Private Car Hire Services in Abuja, Lagos, Kano, PH & All major cities in Nigeria
        </p>
        <button className='py-3 px-7 bg-white border-[2px] border-[#28a745] text-[14px] font-normal text-[#28a745] hover:bg-[#28a745] hover:text-white transition-all duration-[0.5s] hover:border-[2px] hover:border-white cursor-pointer'>Book Now</button>
      </div>
      <div className='flex justify-center flex-col items-center max-w-[750px] m-auto sm:mx-5'>
        <p className='font-extrabold uppercase text-[#1d274e]'>What we do</p>
        <p className='text-center lg:text-[16px] sm:text-[12px] font-medium mt-5 text-[#343a40]'>U-RIDE Luxury Car Rentals with Chauffeur gets you to your destination promptly and comfortably. Our experienced staff offers personalized and professional assistance that enhances any celebration or corporate event. You can rely on a clean picture perfect condition vehicle waiting for you for special occasions and corporate ground transportation.</p>
      </div>
      <div className='flex items-center max-w-[1150px] m-auto lg:flex-row lg:gap-8 sm:flex-col sm:gap-4 sm:mx-5'>
        <div className='flex flex-col lg:gap-5 sm:gap-3'>
          <img src="https://mlszn6rjkywy.i.optimole.com/w:1035/h:741/q:mauto/f:best/https://nairaxi.ng/wp-content/uploads/2024/06/Nairaxi-Luxury-chauffeur-Hire-a-car-in-Abuja.jpg" alt="" />
          <p className='text-[#1d274e] font-bold sm:text-[18px] lg:text-[24px]'>Airport Transportation</p>
          <p className='text-[#343a40] sm:text-[14px] lg:text-[16px]'>We provide pick up and drop off and shuttle service to and from all major local airports in surrounding areas in one of our comfortable luxury sedans. We can assist you with airport transfers for stress-free travel and take you to all your desired destinations.</p>
        </div>
        <div className='flex flex-col gap-3'>
          <img src="https://mlszn6rjkywy.i.optimole.com/w:1035/h:741/q:mauto/f:best/https://nairaxi.ng/wp-content/uploads/2024/06/Nairaxi-Luxury-chauffeur-Hire-a-car-in-Abuja.jpg" alt="" />
          <p className='text-[#1d274e] font-bold sm:text-[18px] lg:text-[24px]'>Flexible Rentals</p>
          <p className='text-[#343a40] sm:text-[14px] lg:text-[16px]'>Get your private transportation service for your special event such as your wedding day, corporate, night out on the town, bachelor/bachelorette party, concert, and more. We also provide high-quality private car service for your business meetings or corporate affairs.</p>
        </div>
      </div>
      <div className='bg-[#28a745] text-white text-center lg:px-52 lg:py-20 flex flex-col lg:gap-8 sm:px-5 sm:py-10 sm:gap-3'>
        <p className='lg:text-[22px] sm:text-[16px] font-medium'>RIDE IN STYLE</p>
        <h1 className='font-extrabold sm:text-[24px] lg:text-[50px]'>Comfort. Prompt. Professional</h1>
        <p className='lg:text-[22px] font-medium sm:leading-5 lg:leading-10 sm:text-[14px]'>Included in all transportation services are one (1) uniformed driver, complimentary water, WIFI, charging and complimentary snacks. Driver will be present at the pickup location fifteen (15) minutes before scheduled pickup time.</p>
      </div>
      <div className='lg:max-w-[800px] sm:mx-5 lg:m-auto flex flex-col sm:gap-2 lg:gap-4 border-[1px] border-[#dddddd] lg:p-10 sm:p-5'>
        <h1 className='text-[18px] text-[#1d274e] font-bold text-center'>Hire Mercedes Sprinter Bus</h1>
        <h2 className='lg:text-[22px] text-center text-[#1d274e] sm:text-[16px] font-extrabold'>RESERVE YOUR VEHICLE TODAY!</h2>
        <p className='text-[#868e96] lg:text-center lg:text-[16px] sm:text-[14px] sm:text-justify'>Our team of experienced drivers will provide you with stress-free travel, reliable service for all your needs in ground transportation. We give you upfront pricing, crystal clear communication, and an excellent customer experience every time.</p>
        <div className='flex flex-col mt-5 lg:gap-5 sm:gap-2'>
          <p className='lg:text-[16px] sm:text-[16px] font-bold text-[#1d274e]'>Personal Information</p>
          <div className='flex gap-2 lg:flex-row sm:flex-col'>
            <div className='flex flex-col gap-2 w-full'>
              <label className='lg:text-[16px] text-[#4f5050] sm:text-[14px]' htmlFor='name'>Your Name</label>
              <input className='border-[1px] focus:border-[#28a745] outline-none px-5 border-[#dddddd] h-[52px]' type='text' id='name' name='name' required />
            </div>
            <div className='flex flex-col gap-2 w-full '>
              <label className='lg:text-[16px] text-[#4f5050] sm:text-[14px]' htmlFor='name'>Email</label>
              <input className='border-[1px] focus:border-[#28a745] outline-none px-5 border-[#dddddd] h-[52px]' type='text' id='name' name='name' required />
            </div>
          </div>
          <div className='flex gap-2 lg:flex-row sm:flex-col'>
            <div className='flex flex-col gap-2 w-full'>
              <label className='lg:text-[16px] text-[#4f5050] sm:text-[14px]' htmlFor='name'>Age</label>
              <input className='border-[1px] focus:border-[#28a745] outline-none px-5 border-[#dddddd] h-[52px]' type='text' id='name' name='name' required />
            </div>
            <div className='flex flex-col gap-2 w-full '>
              <label className='lg:text-[16px] text-[#4f5050] sm:text-[14px]' htmlFor='name'>Phone No</label>
              <input className='border-[1px] focus:border-[#28a745] outline-none px-5 border-[#dddddd] h-[52px]' type='text' id='name' name='name' required />
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:gap-5 mt-5 sm:gap-2'>
          <p className='lg:text-[16px] sm:text-[16px] font-bold text-[#1d274e]'>Itinerary Information</p>
          <div className='flex gap-2 lg:flex-row sm:flex-col'>
            <div className='flex flex-col gap-2 w-full'>
              <label className='lg:text-[16px] text-[#4f5050] sm:text-[14px]' htmlFor='name'>Your Name</label>
              <input className='border-[1px] focus:border-[#28a745] outline-none px-5 border-[#dddddd] h-[52px]' type='text' id='name' name='name' required />
            </div>
            <div className='flex flex-col gap-2 w-full '>
              <label className='lg:text-[16px] text-[#4f5050] sm:text-[14px]' htmlFor='name'>Email</label>
              <input className='border-[1px] focus:border-[#28a745] outline-none px-5 border-[#dddddd] h-[52px]' type='text' id='name' name='name' required />
            </div>
          </div>
          <div className='flex gap-2 lg:flex-row sm:flex-col'>
            <div className='flex flex-col gap-2 w-full'>
              <label className='lg:text-[16px] text-[#4f5050] sm:text-[14px]' htmlFor='name'>Age</label>
              <input className='border-[1px] focus:border-[#28a745] outline-none px-5 border-[#dddddd] h-[52px]' type='text' id='name' name='name' required />
            </div>
            <div className='flex flex-col gap-2 w-full '>
              <label className='lg:text-[16px] text-[#4f5050] sm:text-[14px]' htmlFor='name'>Phone No</label>
              <input className='border-[1px] focus:border-[#28a745] outline-none px-5 border-[#dddddd] h-[52px]' type='text' id='name' name='name' required />
            </div>
          </div>
        </div>
        <button className='bg-[#28a745] mt-5 cursor-pointer text-[16px] uppercase text-white px-10 h-[52px]'>Submit Request</button>
      </div>
    </div>
  )
}

export default Booking