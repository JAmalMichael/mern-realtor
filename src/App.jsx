import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home, Profile, SignIn, SignUp, About} from './pages/index.js'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App