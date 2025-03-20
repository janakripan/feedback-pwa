import React, { useEffect } from 'react'
import { useApi } from '../../contexts/ApiContext';
import DisplayCard from './displayComponents/DisplayCard';
import bgPic from '../../assets/Creative writing-rafiki.svg'
function DisplayFeedback() {
    const { feedbackList, fetchFeedback } = useApi();

    useEffect(() => {
        fetchFeedback(); 
      }, []);

  return (
    <div className='w-full max-w-screen-xl h-fit min-h-screen p-4 mx-auto'>
      <div className='w-full h-full min-h-[80vh]  flex flex-row justify-between  '>
       <div className='h-full w-fit pt-12'>
       <h1 className='text-7xl whitespace-nowrap font-bold capitalize '>
          We value your <br /> feedback
        </h1>
        <p className='text-3xl font-semibold mt-24 whitespace-nowrap '>
          Your feedback is important to us . <br /> See the feed backs of other users.
        </p>
       </div>
       <div className=' w-5/12  '>
        <img src={bgPic} className=' w-full h-full  aspect-square ' alt="" />
       </div>

      </div>
     <div className="w-full h-full flex flex-col items-center mt-9 ">
     <h3 className=' text-3xl font-semibold text-center mb-8 '>
        Feedbacks
      </h3>
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

     </div>
      
      
    </div>
  )
}

export default DisplayFeedback
