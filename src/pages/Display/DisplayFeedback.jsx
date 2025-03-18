import React, { useEffect } from 'react'
import { useApi } from '../../contexts/ApiContext';
import DisplayCard from './displayComponents/DisplayCard';
import { Link } from 'react-router';

function DisplayFeedback() {
    const { feedbackList, fetchFeedback } = useApi();

    useEffect(() => {
        fetchFeedback(); 
      }, []);

  return (
    <div className='w-full max-w-screen-xl h-fit min-h-screen p-4 md:p-10 mx-auto'>
        <ul className='w-full h-full grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                feedbackList.map((feedback)=>(
                    <DisplayCard
                    key={feedback.id}
                    name={feedback.name}
                    feedback={feedback.message}
                    date={feedback.at}

                    />
                ))
            }

        </ul>

       <div className='bg-blue-500 w-fit h-fit mt-12 rounded-lg'>
         <Link className='p-6 text-white' to={"/"}>
         Home
         </Link>
       </div>
      
    </div>
  )
}

export default DisplayFeedback
