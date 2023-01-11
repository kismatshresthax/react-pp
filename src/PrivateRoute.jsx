import { Login } from './login/Login'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import HomePage from './HomePage'

const PrivateRoute = () => {
  return (
   <>
   <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<About/>}/>
           </Routes>
   </>
  )
}

export default PrivateRoute
