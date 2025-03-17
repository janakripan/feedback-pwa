import React from 'react'


function DisplayCard({
    name,
    feedback,
    date,
}) {
   
  return (
    <div className='w-full h-full p-4 ' >
        <h2 className='text-2xl font-medium'>
            {name}
        </h2>
        <p className='text-lg font normal'>
            {feedback}
        </p>
        <span className='text-xs font-light'>
            {date}
        </span>
      
    </div>
  )
}

export default DisplayCard
