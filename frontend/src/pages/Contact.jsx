import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='lg:max-w-[1100px] lg:m-auto sm:mx-5 flex lg:flex-row sm:flex-col justify-between gap-20 mt-10'>
        <div className='flex flex-col gap-5 flex-1'>
          <h1 className='text-[44px] text-gray-800'>Contact <span className='text-[60px] text-gray-600 font-extrabold'>Nairaxi</span></h1>
          <p className='text-[17px] text-gray-600'>You may contact us by filling in this form any time you need professional support or have any questions. You can also fill in the form to leave your comments or feedback.</p>
          <div className='flex flex-col gap-2'>
            <label className='text-[17px] text-gray-600' htmlFor="">Name</label>
            <input className='border-[1px] outline-hidden border-gray-300 px-3 py-3' type="text" placeholder='Enter your name' />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-[17px] text-gray-600' htmlFor="">Email</label>
            <input className='border-[1px] outline-hidden border-gray-300 px-3 py-3' type="email" placeholder='Enter your email' />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-[17px] text-gray-600' htmlFor="">Subject</label>
            <input className='border-[1px] outline-hidden border-gray-300 px-3 py-3' type="subject" placeholder='Enter the subject' />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-[17px] text-gray-600' htmlFor="">Phone Number</label>
            <input className='border-[1px] outline-hidden border-gray-300 px-3 py-3' type="subject" placeholder='Enter your phone No' />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-[17px] text-gray-600' htmlFor="">Message</label>
            <textarea className='border-[1px] text-[17px] text-gray-600 outline-hidden border-gray-300 px-3 py-3' type="subject" placeholder='Enter your message' />
          </div>
        </div>
        <div className='flex-1'>
          <img className='w-full' src="https://mlszn6rjkywy.i.optimole.com/w:400/h:298/q:mauto/f:best/https://nairaxi.ng/wp-content/uploads/2020/10/customer-service-1.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Contact