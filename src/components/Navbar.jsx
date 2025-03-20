import React, { useState } from 'react'
import { navlinks } from '../utils/navlinks'
import { NavLink } from 'react-router'
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoClose } from "react-icons/io5";


function Navbar() {
    const [isOpen , setIsOpen] = useState(false)
  return (
    <div className='w-full h-fit py-5  max-w-screen-xl mx-auto relative p-4  '>

        <h1 className='w-full h-full font-semibold text-center lg:text-4xl  text-2xl md:text-3xl '>
            FeedBook
        </h1>
        <div className=" hidden md:flex flex-row gap-2 absolute right-4 top-0 translate-y-1/2  ">
        {navlinks.map((items,index)=>(
            <NavLink 
            key={index}
            to={items.path}
            className={({ isActive }) =>`py-2 px-3 lg:text-lg text-sm md:text-base font-medium rounded-full   transition-all duration-300 ${
                isActive ? "bg-blue-500 text-white" : " hover:scale-105"
            } `}
            >
            {items.title}

            </NavLink>
        ))}

        </div>
        <div className=" md:hidden  absolute right-4 top-0 translate-y-3/4 border border-gray-700 rounded-lg flex items-center justify-center ">

       <button onClick={()=>setIsOpen(!isOpen)} className={`w-full h-full text-xl  p-0.5 text-gray-500 transition-all duration-300 ${isOpen? "rotate-180" : "rotate-0"}`}>
       {
            isOpen ? <IoClose/> :<MdOutlineMenuOpen/>
        }

       </button>
       

        </div>
        <div className={` md:hidden absolute z-[999] top-full border border-blue-400 bg-white rounded-lg py-4 right-0 w-8/12 h-fit flex flex-col transition-all duration-300
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
            {
                navlinks.map((items,index)=>(
                   <NavLink
                   onClick={()=>setIsOpen(false)}
                   key={index}
                   to={items.path}
                   className={({isActive})=>`w-full h-fit text-base transition-all text-center duration-300 whitespace-nowrap p-2 px-3 ${
                    isActive ? "bg-blue-500 text-white" : " "
                } `} 
                   >
                   {items.title}

                   </NavLink>
                ))
            }

        </div>


      
    </div>
  )
}

export default Navbar
