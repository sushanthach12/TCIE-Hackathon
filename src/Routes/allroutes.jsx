import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import BookBeds from '../Pages/BookBeds'
import Home from '../Pages/Home'
import MedicalFacility from '../Pages/MedicalFacility'

const AllRoutes = () => {
  return (
    <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/about' element={<About/>}></Route>
            <Route exact path='/medicalfacility' element={<MedicalFacility/>}></Route>
            <Route exact path='/bookbeds' element={<BookBeds/>}></Route>
    </Routes>
  )
}

export default AllRoutes