import React, { Suspense } from 'react'
import "./App.css"
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Rout from './Rout'
import Footer from './components/Footer'
import { FaPhoneAlt } from 'react-icons/fa'
import { RiWhatsappFill } from "react-icons/ri";
import Icons from './components/Icons'
import { ToastContainer } from 'react-toastify'
import Loader from './utils/Loader'
import ScrollToTop from './utils/ScrollToTop'

const App = () => {
  return (
    <>
      <ToastContainer />
      <ScrollToTop />
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