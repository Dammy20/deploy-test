import React from 'react'
import { Link } from "react-router-dom"
function HeroBanner3() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  return (
    <>


      <div className='w-full'>
        <div className='relative w-full h-40 md:h-60 2xl:h-72'>
          <div className='absolute inset-0'>
            <img
              alt="bannerImage"
              src={process.env.PUBLIC_URL + "./images/bg/backG.jpg"}
              style={{ position: "absolute", height: "70%", width: "100%", inset: "0px", marginTop: "-50px" }}
              data-wow-duration="1.5s"
              data-wow-delay="1s"
            />
          </div>
        </div>


        <div className='relative  container mt-14 lg:mt-20'>
          <div className='bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-8 rounded-3x1 md:rounded-[40px] shadow-xl flex flex-col md:flex-row lg:items-center'>
            <div className='flex flex-col sm:flex-row md:block sm:items-start sm:justify-between'>
              <div className='w-40 sm:w-48 md:w-56 xl:w-60'>
                <div className='aspect-w-1 aspect-h-1 relative rounded-3xl overflow-hidden z-0'>
               
                </div>
              </div>
              <div className='mt-4 flex items-center sm:justify-center space-x-3'></div>
            </div>
            <div className='mt-5 md:mt-0 md:ml-8 xl:ml-14 flex-grow'></div>
          </div>
        </div>
      </div >


      {/* New Card */}



    </>
  )
}

export default HeroBanner3