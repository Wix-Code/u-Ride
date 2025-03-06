import React from 'react'
import "./App.css"
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Rout from './Rout'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Rout />
      <Footer />
    </div>
  )
}

export default App