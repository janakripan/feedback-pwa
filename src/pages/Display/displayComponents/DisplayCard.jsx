import React from 'react'


function DisplayCard({
    name,
    feedback,
    date,
}) {
   
  return (
    <div className='w-full h-full p-4  outline outline-gray-200 rounded-md shadow-lg flex flex-col items-center ' >
        <h2 className='text-xl font-medium mb-4'>
            {name}
        </h2>
        <p className='text-base font normal mb-3'>
            {feedback}
        </p>
        <span className='text-xs font-light'>
            {date}
        </span>
      
    </div>
  )
}

export default DisplayCard
