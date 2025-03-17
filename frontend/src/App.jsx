import React from 'react'
import "./App.css"
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Rout from './Rout'
import Footer from './components/Footer'
import { FaPhoneAlt } from 'react-icons/fa'
import { RiWhatsappFill } from "react-icons/ri";
import Icons from './components/Icons'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
      <ToastContainer />
      <div className=''>
        <Navbar />
        <Rout />
        <Footer />
        <Icons />
      </div>
    </>
  )
}

export default App