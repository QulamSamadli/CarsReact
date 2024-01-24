import React from 'react'
import { Route, Routes } from 'react-router'
import Products from '../Products'
import ProductDetail from '../ProductDetails/index.jsx'

const Routing = () => {
  return (
    <Routes>
         <Route path='/products' element={<Products />} />
         <Route path='/products/:id' element={<ProductDetail />} />
    </Routes>
  )
}

export default Routing