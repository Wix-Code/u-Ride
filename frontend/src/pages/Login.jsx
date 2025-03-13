import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { storeContext } from '../utils/Context'

const Login = () => {
  const { handleChange, handleSubmit } = useContext(storeContext)
  return (
    <div className='justify-center flex items-center h-[80vh] font-display'>
      <div className='w-[500px] sm:mx-5 border-[#dddddd] border-[1px] p-5 flex flex-col gap'>
        <h1 className='lg:text-[30px] sm:text-[20px] font-bold uppercase text-[#28a745] text-center'>Login</h1>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-1'>
            <label className='lg:text-[16px] text-[#4f5050] sm:text-[14px]'>Email</label>
            <input onChange={handleChange} className='border-[1px] focus:border-[#28a745] outline-none px-5 border-[#dddddd] h-[52px]' type="email" placeholder="Enter your email" name='email' />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='lg:text-[16px] text-[#4f5050] sm:text-[14px]'>Password</label>
            <input onChange={handleChange} className='border-[1px] focus:border-[#28a745] outline-none px-5 border-[#dddddd] h-[52px]' name='password' type="password" placeholder="Enter your password" />
          </div>
          <div className='flex justify-between items-center'>
            <Link to="/register"><p className='lg:text-[16px] hover:text-[#28a745] text-[#4f5050] sm:text-[14px]'>Register</p></Link>
            <Link to="/forgot"><span className='lg:text-[16px] text-[#4f5050] sm:text-[14px] hover:text-[#28a745]'>Forgot Password?</span></Link>
          </div>
          <button type='submit' className='bg-[#28a745] w-full cursor-pointer text-[16px] uppercase text-white px-10 h-[52px]'>Login</button>
          <button className='bg-[#28a745] w-full cursor-pointer text-[16px] uppercase text-white px-10 h-[52px]'>Login with Google</button>
        </form>
      </div>
    </div>
  )
}

export default Login