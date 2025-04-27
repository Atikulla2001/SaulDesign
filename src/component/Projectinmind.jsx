import React from 'react'
import Siri from "../assets/siri.png"
import Spring from "../assets/spring.png"

const Projectinmind = () => {
    return (
        <section className='mt-[150px]'>
            <div className='container'>

                <div className='flex flex-col lg:flex-row justify-between'>
                    <div className='lg:w-1/2'>
                        <div><h2 className='font-poppins font-bold text-lg lg:text-[64px] lg:w-[600px] text-text'>Got a project in <span className='text-project'>mind?</span></h2></div>
                        <div className='relative'><img className='lg:absolute -top-[15px] left-[222px]' src={Siri} alt="picture" /></div>
                        <div className='relative'><img className='lg:absolute top-[90px] left-[20px]' src={Spring} alt="picture" /></div>
                    </div>


                    <div>
                        <div className='lg:w-1/2 flex flex-col lg:flex-row gap-6'>
                            <div>
                                <label className='block mb-2.5 font-poppins font-bold text-lg text-white' htmlFor="Name">Your name</label>
                                <input className='px-6 py-4 mywork-blac/50 font-poppins font-bold text-lg text-white border-1' type="text" placeholder='Name' />
                            </div>

                            <div>
                                <label className='block mb-2.5 font-poppins font-bold text-lg text-white' htmlFor="Name">Your name</label>
                                <input className='px-6 py-4 mywork-blac/50 font-poppins font-bold text-lg text-white border-1' type="text" placeholder='Name' />
                            </div>

                        </div>


                        <div className='mt-6'>
                            <label className='block mb-2.5 font-poppins font-bold text-lg text-white' htmlFor="">Your Message</label>
                            <textarea className='w-full h-[280px] px-6 py-4 mywork-blac/50 font-poppins font-bold text-lg text-white border-1' name="" id="" placeholder='Message'></textarea>
                        </div>



                        <div>
                            <button className='btn-text bg-btnbg/75 hover:bg-span rounded-full text-border lg:text-lg font-bold font-poppins mt-[24px] px-8 py-2.5'>Send Message
                                <span className='pl-3'><i class="fa-classic fa-solid fa-paper-plane fa-fw"></i></span>
                            </button>
                        </div>



                    </div>



                </div>



            </div>
        </section>
    )
}

export default Projectinmind