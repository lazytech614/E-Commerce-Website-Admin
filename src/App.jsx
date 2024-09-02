import { useState } from 'react'
import { Admin } from './pages/Admin'
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Admin />
    </BrowserRouter>
  )
}

export default App
