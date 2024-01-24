

import React from 'react'
import Products from './Products'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
  <BrowserRouter>
    <div><Products/></div>
  </BrowserRouter>
  )
}

export default App

