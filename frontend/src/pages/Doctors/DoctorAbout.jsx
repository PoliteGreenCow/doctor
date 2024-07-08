import React from 'react'

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
                About of
                <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
                  Samuel David
                </span>
            </h3>
            <p className='text__para'>
                Welcome to our hospital! Your health is our priority. 
                Schedule your appointment today for personalized care.
            </p>
        </div>
        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
                Education
            </h3>
        </div>
      
    </div>
  )
}

export default DoctorAbout
