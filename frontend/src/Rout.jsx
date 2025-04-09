import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
//import Home from './pages/Home'
//import Rentals from './pages/Rentals'
import Logistics from './pages/Logistics'
import Booking from './pages/Booking'
import Contact from './pages/Contact'
//import SinglePage from './pages/SinglePage'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import ResetPasssword from './pages/ResetPasssword'
import { Suspense } from 'react'


const Rentals = lazy(() => import("./pages/Rentals"))
const SinglePage = lazy(() => import("./pages/SinglePage"))
const Home = lazy(() => import("./pages/Home"))
const Rout = () => {
  
  return (
    <Suspense fallback={<h1 style={{color: "black", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}} className='text-center text-black'>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/:id" element={<SinglePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPasssword />} />
      </Routes>
    </Suspense>
  )
}

export default Rout