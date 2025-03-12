import React from 'react'

const ResetPasssword = () => {
  return (
    <div className='justify-center flex items-center h-[80vh] font-display'>
    <div className='w-[500px] sm:mx-5 border-[#dddddd] border-[1px] p-5 flex flex-col gap'>
      <h1 className='lg:text-[30px] sm:text-[20px] font-bold uppercase text-[#28a745] text-center'>reset password</h1>
        <form className='flex flex-col gap-2'>
        <div className='flex flex-col gap-1'>
          <label className='lg:text-[16px] text-[#4f5050] sm:text-[14px]'>New Password</label>
          <input className='border-[1px] focus:border-[#28a745] outline-none px-5 border-[#dddddd] h-[52px]' type="email" placeholder="Enter your new password" />
        </div>
        <button className='bg-[#28a745] w-full cursor-pointer text-[16px] uppercase text-white px-10 h-[52px]'>Reset password</button>
      </form>
    </div>
  </div>
  )
}

export default ResetPasssword