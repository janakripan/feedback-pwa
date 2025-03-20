import React from 'react'
import { navlinks } from '../utils/navlinks'
import { NavLink } from 'react-router'

function Navbar() {
  return (
    <div className='w-full h-fit py-5  max-w-screen-xl mx-auto relative bg-gra p-4'>

        <h1 className='w-full h-full font-semibold text-center text-4xl '>
            FeedBook
        </h1>
        <div className="flex flex-row gap-2 absolute right-0 top-0 translate-y-1/2  ">
        {navlinks.map((items,index)=>(
            <NavLink 
            key={index}
            to={items.path}
            className={({ isActive }) =>`py-2 px-3 text-lg font-medium rounded-full   transition-all duration-300 ${
                isActive ? "bg-blue-500 text-white" : " hover:scale-105"
            } `}
            >
            {items.title}

            </NavLink>
        ))}

        </div>


      
    </div>
  )
}

export default Navbar
