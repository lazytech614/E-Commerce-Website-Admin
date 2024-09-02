import React from 'react'
import nav_logo from '/nav-logo.svg'
import profile_logo from '/profile_pic_circle.svg'
import dropdown_arrow from '/dropdown_arrow.png'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className='custom-backdrop flex justify-between items-center shadow-custom px-4 sm:px-10 md:px-20 py-2 sm:py-4'>
        <Link to="/"><img className='w-[150px] sm:w-[200px]' src={nav_logo} alt='company logo' /></Link>
        <div className='flex gap-2'>
            <img className='w-[30px] sm:w-[54px]' src={profile_logo} alt='profile picture' />
            <img className='w-[10px] sm:w-[20px] object-cover cursor-pointer' src={dropdown_arrow} alt='dropdown arrow' />
        </div>    
    </header>
  )
}
