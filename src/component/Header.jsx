import React, { useState } from 'react'
import { FaBarsProgress } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import { Link } from 'react-router';

const Header = () => {
    const [menuBar, setMenuBar] = useState(false);

    const handlemenutoggle = () => {

        setMenuBar(!menuBar);

    };


    console.log(menuBar)



    return (
        <header className=' py-5 lg:py-12 border-b border-border/10'>
            <div className='container'>
                <nav>
                    <div className='flex justify-between items-center'>
                        <img src="public/logo.png" alt="logo" />


                        {menuBar ? (<GrClose onClick={handlemenutoggle}
                            className='text-white text-lg lg:hidden' />)

                            : (<FaBarsProgress
                                onClick={handlemenutoggle}
                                className='text-white text-lg lg:hidden'
                            />)

                        }






                        <ul className='hidden lg:flex gap-x-[30px]'>
                            <li className='after:content-[""] relative after:absolute after:top-8 after:left-0 after:w-0 after:h-1 after:bg-red-500 hover:after:w-full transition after:duration-[.5000s]'><Link className='li' to="/">Home</Link></li>
                            <li className='after:content-[""] relative after:absolute after:top-8 after:left-0 after:w-0 after:h-1 after:bg-red-500 hover:after:w-full transition after:duration-[.5000s]'><Link className='li' to="/about" >About Me</Link></li>
                            <li className='after:content-[""] relative after:absolute after:top-8 after:left-0 after:w-0 after:h-1 after:bg-red-500 hover:after:w-full transition after:duration-[.5000s]'><Link className='li' to="/contact" >Contact</Link></li>
                        </ul>


                        {menuBar && (

                            <ul className=' w-full absolute top-20 left-0 p-2 bg-teal-600   lg:hidden gap-x-[30px]'>
                                <li><Link className='li' to="/">Home</Link></li>
                                <li><Link className='li' to="/about">About Me</Link></li>
                                <li><Link className='li' to="/contact">Contact</Link></li>
                            </ul>
                        )}








                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header