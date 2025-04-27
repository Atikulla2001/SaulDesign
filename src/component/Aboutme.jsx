import React, { useState } from 'react'
import Doodle from "../assets/doodleitems.png"
import Group from "../assets/Group 62.png"
import Ellipse from "../assets/Ellipse 3.png"

const Aboutme = () => {


  const [readmore, setReadmore] = useState(false);

  const handleToggle = () => {

    setReadmore(!readmore)

  }



  return (
    <section className='lg:mt-[150px]'>
      <div className='container'>

        <div className='flex justify-between flex-col lg:flex-row'>


          <div className='lg:w-2/4'>
            <h2 className='lg:font-poppins font-bold text-center lg:text-start text-2xl lg:text-fontsize text-white'>About <span className='text-span'>me</span></h2>

            <p className='font-poppins text-[15px] lg:text-lg text-border/75 w-full lg:w-[389px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis....

              <span onClick={handleToggle} className='text-white'>

                {!readmore &&
                  "Read more"
                }

              </span>

              {readmore && (


                <p>

                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nulla!
                </p>


              )

              }


              <span onClick={handleToggle} className='text-white'>

                {readmore &&
                  "Back"
                }

              </span>



            </p>



          </div>

          <div className='lg:w-2/4 relative'>
            <img src={Doodle} alt="picture" />

            <img className='lg:absolute top-[220px] left-[110px]' src={Group} alt="picture" />
            <img className='lg:absolute -bottom-[120px] right-[160px]' src={Ellipse} alt="picture" />

          </div>



        </div>


      </div>
    </section>
  )
}

export default Aboutme











