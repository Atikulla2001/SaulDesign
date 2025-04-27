import React, { useState } from 'react'
import BannerImg from "../assets/bannerimgright.png"
import VactorImg from "../assets/Vector 187.png"


const Banner = () => {

  const [activenumber, setActiveNumber] = useState(1)

  const handleactive = (number) => {
    setActiveNumber(number)
  }



  return (
    <section className='lg:mt-[202px]'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row justify-content-between items-center'>
          <div className='lg:w-2/4'>

            <div className='relative'>
              <img className='hidden lg:block absolute top-10 -left-26' src={VactorImg} alt="vactorimg" />
            </div>

            <h1 className='text-2xl lg:text-8xl text-text font-bold font-poppins leading-24'>CREATIVE UI <span className='text-span'>DESIGNER</span></h1>


            <div className='lg:mt-11'>

              <button onClick={()=>handleactive (1)} className={` ${activenumber == 1 ? "btn-text bg-btnbg/75 hover:bg-span rounded-full text-border text-lg font-bold font-poppins px-4 lg:px-8 py-1.5 lg:py-2.5 ml-2.5" : 'btn-text bg-btnbg/75 hover:bg-span rounded-full text-border text-lg font-bold font-poppins px-4 lg:px-8 py-1.5 ml-2.5 lg:py-2.5'} `}>Hire me</button>



              <button onClick={()=>handleactive (2)} className={` ${activenumber == 2 ? "btn-text bg-btnbg/75 hover:bg-span rounded-full text-border text-lg font-bold font-poppins px-4 lg:px-8 py-1.5 lg:py-2.5 ml-2.5" : 'btn-text bg-btnbg/75 hover:bg-span rounded-full text-border text-lg font-bold font-poppins px-4 lg:px-8 py-1.5 ml-2.5 lg:py-2.5'} `}>Download CV
                <span className='pl-3'><i class="fa-download fa-solid"></i></span>
              </button>


            </div>

          </div>
          <div className='lg:w-2/4'>
            <img className='ml-auto' src={BannerImg} alt="bannerimg" />
          </div>



        </div>
      </div>
    </section>
  )
}

export default Banner