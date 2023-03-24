import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BookBeds from '../Pages/BookBeds'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Hospitals from '../Pages/Hospitals'
import Dashboard from '../Pages/Dashboard'
import BookingForm from '../Pages/BookingForm'

const AllRoutes = ({ setKey }) => {
  return (
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/dashboard/:id' element={<Dashboard />}></Route>
        <Route exact path='/hospitals' element={<Hospitals />}></Route>
        <Route exact path='/bookbeds' element={<BookBeds />}></Route>

        <Route exact path='/login' element={<Login setKey={setKey}/>}></Route>
        <Route exact path='/signup' element={<Signup />}></Route>

        <Route exact path='/bookbed/hospital/:id' element={<BookingForm />}></Route>

      </Routes>
  )
}

export default AllRoutes