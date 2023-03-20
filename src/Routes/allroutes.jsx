import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import BookBeds from '../Pages/BookBeds'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import MedicalFacility from '../Pages/MedicalFacility'
import Signup from '../Pages/Signup'

const AllRoutes = () => {
  return (
    <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/about' element={<About/>}></Route>
            <Route exact path='/medicalfacility' element={<MedicalFacility/>}></Route>
            <Route exact path='/bookbeds' element={<BookBeds/>}></Route>

            <Route exact path='/login' element={<Login/>}></Route>
            <Route exact path='/signup' element={<Signup/>}></Route>
    </Routes>
  )
}

export default AllRoutes