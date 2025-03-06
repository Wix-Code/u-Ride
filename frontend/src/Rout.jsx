import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Rentals from './pages/Rentals'
import Logistics from './pages/Logistics'
import Booking from './pages/Booking'
import Contact from './pages/Contact'

const Rout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rentals" element={<Rentals />} />
      <Route path="/logistics" element={<Logistics />} />
      <Route path="/book" element={<Booking />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default Rout