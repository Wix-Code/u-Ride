import React from 'react'
import "./App.css"
import Home from './pages/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Home />
    </div>
  )
}

export default App