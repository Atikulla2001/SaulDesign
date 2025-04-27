import React, { useState } from 'react'
import Website from "../assets/website.png"
import Laptop from "../assets/laptop.png"
import Mobile from "../assets/mobile.png"
import Project from "../assets/Projects.png"

const Myrecentworks = () => {

    const [activenumber, setActiveNumber] = useState(1)

    const handleactive = (number) => {
        setActiveNumber(number)
    }




    return (
        <section className='lg:mt-[250px] mb-[250px]' style={{ backgroundImage: `URL(${Project})` }}>
            <div className='container'>

                <div className='pt-[268px]'>
                    <h2 className='font-poppinsi font-bold text-2xl lg:text-fontsize text-white'>My recent <span className='text-span'>works</span></h2>
                </div>



                <div className='flex mt-[16px]'>

                    <div onClick={() => handleactive(1)} className='btn-text w-[82px] h-[47px] bg-mywork-black/50 rounded-3xl hover:bg-span'>
                        <h2 className='font-poppins font-bold text-lg text-border text-center pt-[10px] '>All</h2>
                    </div>

                    <div onClick={() => handleactive(2)} className='btn-text w-[82px] h-[47px] bg-mywork-black/50 rounded-3xl ml-[16px] hover:bg-span'>
                        <h2 className='font-poppins font-bold text-lg text-border text-center pt-[10px]'>UI</h2>
                    </div>

                    <div onClick={() => handleactive(3)} className='btn-text w-[82px] h-[47px] bg-mywork-black/50 rounded-3xl ml-[16px] hover:bg-span'>
                        <h2 className='font-poppins font-bold text-lg text-border text-center pt-[10px]'>UX</h2>
                    </div>

                    <div onClick={() => handleactive(4)} className='btn-text w-[174px] h-[47px] bg-mywork-black/50 rounded-3xl ml-[16px] hover:bg-span'>
                        <h2 className='font-poppins font-bold text-lg text-border text-center pt-[10px]'>Web Design</h2>
                    </div>

                </div>


                <div className='pb-[367px]'>

                    <div className='flex gap-2 flex-col lg:flex-row justify-between mt-[48px]'>

                        {activenumber == 1 ? (
                            

                            <div className=' flex gap-5'>

                                <div><img src={Website} alt="picture" /></div>
                                <div><img src={Laptop} alt="picture" /></div>
                                <div> <img src={Mobile} alt="picture" /></div>

                            </div>


                        ) : activenumber == 2 ? (

                            <div className=' flex gap-5'>

                                <div><img src={Website} alt="picture" /></div>
                                <div><img src={Laptop} alt="picture" /></div>
                                {/* <div> <img src={Mobile} alt="picture" /></div> */}

                            </div>


                        ) : (


                            <div className=' flex gap-5'>

                                <div><img src={Website} alt="picture" /></div>
                                {/* <div><img src={Laptop} alt="picture" /></div> */}
                                {/* <div> <img src={Mobile} alt="picture" /></div> */}

                            </div>


                        )}


                    </div>


                </div>




            </div>
        </section>
    )
}

export default Myrecentworks