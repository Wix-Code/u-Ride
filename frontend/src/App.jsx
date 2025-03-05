import React from 'react'
import "./App.css"
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Rout from './Rout'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Rout />
    </div>
  )
}

export default App