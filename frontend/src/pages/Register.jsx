import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    setUserDetails({...userDetails, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(userDetails)
    const res = await axios.post("http://localhost:5000/api/auth/register", userDetails, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })
    console.log(res.data)
    // make API call to register user with userDetails
  }
  return (
    <div className='justify-center flex items-center h-[80vh] font-display'>
    <div className='w-[500px] sm:mx-5 border-[#dddddd] border-[1px] p-5 flex flex-col gap'>
      <h1 className='lg:text-[30px] sm:text-[20px] font-bold uppercase text-[#28a745] text-center'>Register</h1>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-1'>
          <label className='lg:text-[16px] text-[#4f5050] sm:text-[14px]'>Email</label>
          <input className='border-[1px] focus:border-[#28a745] outline-none px-5 border-[#dddddd] h-[52px]' type="text" name='name' onChange={handleChange} placeholder="Enter your name" />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='lg:text-[16px] text-[#4f5050] sm:text-[14px]'>Email</label>
          <input className='border-[1px] focus:border-[#28a745] outline-none px-5 border-[#dddddd] h-[52px]' type="email" name='email' onChange={handleChange} placeholder="Enter your email" />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='lg:text-[16px] text-[#4f5050] sm:text-[14px]'>Password</label>
          <input className='border-[1px] focus:border-[#28a745] outline-none px-5 border-[#dddddd] h-[52px]' type="password" onChange={handleChange} name='password' placeholder="Enter your password" />
        </div>
        <div className='flex justify-between items-center'>
          <p className='lg:text-[16px] text-[#4f5050] sm:text-[14px]'>Already have an account?</p>
          <Link to="/login"><span className='lg:text-[16px] text-[#4f5050] sm:text-[14px] hover:text-[#28a745]'>Login</span></Link>
        </div>
        <button type='submit' className='bg-[#28a745] w-full cursor-pointer text-[16px] uppercase text-white px-10 h-[52px]'>Sign up</button>
        <button className='bg-[#28a745] w-full cursor-pointer text-[16px] uppercase text-white px-10 h-[52px]'>Signup with Google</button>
      </form>
    </div>
  </div>
  )
}

export default Register