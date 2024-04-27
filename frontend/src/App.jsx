import React, { useEffect } from 'react'
import './App.css'
import "./CSS/tailwindCss.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login, Register } from './components/shared'
import {  Event, Contact, Home, AllEventsHome,CategoryEvents } from './components/audience'
import Navbar from './components/shared/Navbar/Navbar'


const App = () => {
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
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
          <Route path="/event" element={<Event />} />
          <Route path="/events" element={<AllEventsHome />} />
          <Route path="/events/category" element= {<CategoryEvents />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
