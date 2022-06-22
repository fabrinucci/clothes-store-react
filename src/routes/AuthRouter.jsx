import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from '../components/auth/Login'
import { Register } from '../components/auth/Register'

export const AuthRouter = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/login' element={<Login />} /> 
        <Route path='/register' element={<Register />} /> 
      </Routes>

    </div>
  )
}
