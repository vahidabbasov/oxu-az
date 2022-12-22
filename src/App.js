import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Index'
import Home from './Components/Pages/Home/Index'
function App() {
  return (
   <BrowserRouter>
  <Navbar/>
    <Routes>
    <Route path ="/" element={<Home/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App