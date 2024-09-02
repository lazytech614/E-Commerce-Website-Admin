import React from 'react'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import { AddProducts } from '../components/AddProducts/AddProducts'
import { ListProducts } from '../components/ListProducts/ListProducts'

export const Admin = () => {
  return (
    <div className='flex flex-col md:flex-row items-stretch gap-2 h-[88vh]'>
      <Sidebar />
      <Routes>
        <Route path='/addproduct' element={<AddProducts />} />
        <Route path='/listproduct' element={<ListProducts />} />
      </Routes>
    </div>
  )
}
