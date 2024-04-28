import React, { useEffect } from 'react'
import './App.css'
import "./CSS/tailwindCss.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login, Register } from './components/shared'
import {  Contact, Home, AllEventsHome,CategoryEvents, EventHome, Navbar } from './components/audience'



const App = () => {
  useEffect(() => {
    if (localStorage.theme === 'dark' || !('theme' in localStorage) ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },[])
  
  return (
    <div className=''>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          
          {/* public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<AllEventsHome />} />
          <Route path="/events/category" element= {<CategoryEvents />} />
          <Route path="/events/category/event" element= {<EventHome />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
