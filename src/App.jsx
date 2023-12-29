import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Nosotros from './pages/nosotros';


function App() {
  return (
    <div>
       <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/nosotros" element={<Nosotros/>} />

       </Routes>

    </div>
  )
}

export default App
