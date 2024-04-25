import React from 'react'
import './App.css'
import "./CSS/tailwindCss.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login, Register } from './components/shared'
import { Home, Event, AllEvents, Contact } from './components/pages'
import Navbar from './components/shared/Navbar/Navbar'


const App = () => {
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
          <Route path="/events" element={<AllEvents />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
