import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import { CreateUser } from './CreateUser'
import HomePage from './HomePage'
import  User from './User'
import { useState } from 'react'

const PrivateRoute = () => {
  const[editData,setEditData] = useState({edit:false,values:{
    firstName: '',
    lastname:''
  }})

  return (
   <>
   <Routes>
   <Route path="/" element={<HomePage />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<User setEditData={setEditData}  />} />
                <Route path="bbb" element={<CreateUser editData={editData}/>} />
           </Routes>
   </>
  )
}

export default PrivateRoute
