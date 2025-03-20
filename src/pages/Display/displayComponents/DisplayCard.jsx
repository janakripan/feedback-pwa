import React from 'react'
import { SlCalender } from "react-icons/sl";
import { MdOutlineTimer } from "react-icons/md";

function DisplayCard({
    name,
    feedback,
    date,
}) {

    const newDate = new Date(date*1000)
    const day = newDate.getUTCDate();
    const month = newDate.toLocaleString('en-US', { month: 'long' });  
    const year = newDate.getUTCFullYear();
    const time = newDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
    
    const formattedDate = `${day} ${month} ${year} `;
    const formattedTime = `${time}`;
    
   
  return (
    <div className='w-full h-72 p-4  outline outline-gray-200 rounded-md shadow-lg flex flex-col  justify-between gap-y-2 ' >
        <h2 className='text-xl lowercase first-letter:capitalize  font-medium mb-4'>
            {name}
        </h2>
        <span className='text-sm font-medium text-gray-500/75 tracking-tight w-full flex flex-row items-center gap-1  '>
             <SlCalender style={{ color: 'rgb(59, 130, 246)', fontSize:'20' }}/>{formattedDate}
        </span>
        <span className='text-sm font-medium text-gray-500/75 tracking-tight w-full flex flex-row items-center gap-1 '>
            <MdOutlineTimer  style={{ color: 'rgb(59, 130, 246)', fontSize:'23' }}/> {formattedTime}
        </span>
        <p className='text-base capitalize  text-balance text-gray-700 scrollbar-hide font-normal mt-4 flex-1  overflow-auto scrollbar scrollbar-thin '>
            {feedback}
        </p>
      
    </div>
  )
}

export default DisplayCard
