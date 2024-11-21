import React from 'react'
import { logo } from '../assets/assets'

export default function Navbar() {
  return (
    <nav className='px-12 py-8 w-full flex justify-between items-center '>
       <a className='block' href="#"><img src={logo} className='w-40 cursor-pointer' alt="" /></a>
       <button className='capitalize rounded-3xl font-Poppins font-xbold text-sm bg-white text-VDarkCyan border border-none py-3 px-12 shadow-md hover:shadow-lg hover:text-GrayishBlue transition-all duration-[250ms] ease-in'>try it free</button>
    </nav>
  )
}
