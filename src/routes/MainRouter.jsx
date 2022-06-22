import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomeScreen } from '../components/app/HomeScreen'
import { AboutScreen } from '../components/app/AboutScreen';
import { FeaturesScreen } from '../components/app/FeaturesScreen'
import { ShopScreen } from '../components/app/ShopScreen';
import { ContactScreen } from '../components/app/ContactScreen'
import { Header } from '../components/content/Header';
import { ProductScreen } from '../components/product/ProductScreen';

export const MainRouter = () => {
  return (

    <>
      
      <Header />

      <Routes>
        <Route path='' element={<HomeScreen />} />
        <Route path='about' element={<AboutScreen />} />
        <Route path='features' element={<FeaturesScreen />} />
        <Route path='contact' element={<ContactScreen />} />
        <Route path='shop' element={<ShopScreen />} />

        <Route path='product' element={<ProductScreen />} />


      </Routes>

    </>
  )
}
