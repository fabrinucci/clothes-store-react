import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthRouter } from './AuthRouter'
import { MainRouter } from './MainRouter'


export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path='/*' element={<MainRouter />}/>

          <Route path='auth/*' element={ <AuthRouter />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  )
}
