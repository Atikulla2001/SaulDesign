import React from 'react'

const Footer = () => {
  return (
    <section className='mt-[350px] mb-[150px]'>
      <div className='container'>

        <ul className='flex flex-col lg:flex-row items-center justify-center gap-[48px] '>

          <li><i class="fa-solid fa-house text-lg text-white"></i><a className='ml-3 font-poppins font-normal text-lg text-border' href="#">Home</a></li>
          <li><i class="fa-solid fa-user text-lg text-white"></i><a className='ml-3 font-poppins font-normal text-lg text-border' href="#">About me</a></li>
          <li><i class="fa-solid fa-phone-volume text-lg text-white"></i><a className='ml-3 font-poppins font-normal text-lg text-border' href="#">Contact</a></li>

        </ul>

        <div className='flex justify-center gap-[24px] mt-[38px]'>
          <div>
            <div className='w-[48px] h-[48px]  rounded-full bg-mywork-black text-center pt-[13px]'><i class="fa-brands fa-facebook-f text-white/75 text-2xl"></i></div>
          </div>

          <div>
            <div className='w-[48px] h-[48px]  rounded-full bg-mywork-black text-center pt-[13px]'><i class="fa-brands fa-instagram text-white/75 text-2xl"></i></div>
          </div>

          <div>
            <div className='w-[48px] h-[48px]  rounded-full bg-mywork-black text-center pt-[13px]'><i class="fa-brands fa-twitter fa-fw text-white/75 text-2xl"></i></div>
          </div>

          <div>
            <div className='w-[48px] h-[48px]  rounded-full bg-mywork-black text-center pt-[13px]'><i class="fa-brands fa-youtube fa-fw text-white/75 text-2xl"></i></div>
          </div>
        </div>


        <div className='mt-50'>
          <h2 className='font-poppins font-normal text-lg text-border/75 text-center'>Terms of Service - Privacy Policy</h2>
        </div>

      </div>
    </section>
  )
}

export default Footer