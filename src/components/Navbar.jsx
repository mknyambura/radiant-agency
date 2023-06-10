import React, { useState } from 'react'

import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  
  const handleclick =() => {
    setOpen(!open)
  }

  return (
    <div>
      <div className='lg:flex mg:flex-row justify-between items-center py-12'>
        <div className='font-bold text-3xl sm:px-16'>
          <span className='text-[#FF723A] '>R</span>
          adiant
        </div>
        <div className='absolute right-8 top-[5%] lg:hidden' onClick={handleclick}>
          {
            open ?  <FaBars className='text-[#FF723A] text-3xl'/> : <FaTimes className='text-[#FF723A] text-3xl'/>
          }
        </div>
        <ul className={`sm:w-full md:w-full lg:w-auto sm:z-10 md:z-10 z-[-1] sm:absolute md:absolute lg:static sm:py-6 sm:px-6 sm:mb-6 sm:mt-6 md:py-6 md:px-6 md:mb-6 md:mt-6 sm:bg-[#FF723A] md:bg-[#FF723A] lg:bg-transparent flex sm:flex-col md:flex-col lg:flex-row gap-4 items-center ${open ? "top-[-1090px]": "top-auto"}`}>
          <li className='opacity-70 hover:font-bold active:text-[#FF723A] active:underline hover:cursor-pointer'>
            <a href="/">Home</a>
          </li>
          <li className='opacity-70 hover:font-bold active:text-[#FF723A] active:underline hover:cursor-pointer'>
            <a href="/about-us">About Us</a>
          </li>
          <li className='opacity-70 hover:font-bold active:text-[#FF723A] active:underline hover:cursor-pointer'>Services</li>
          <li className='opacity-70 hover:font-bold active:text-[#FF723A] active:underline hover:cursor-pointer'>Our Team</li>
          <li className='opacity-70 hover:font-bold active:text-[#FF723A] active:underline hover:cursor-pointer'>
            <a href="/blog">Blog</a>
          </li>
          <li className='opacity-70 hover:font-bold active:text-[#FF723A] active:underline hover:cursor-pointer'>
            <a href="/portfolio-projects">Portfolio</a>
          </li>
          <li className='opacity-70 hover:font-bold active:text-[#FF723A] active:underline hover:cursor-pointer'>FAQs</li>
          <li className='opacity-70 hover:font-bold active:text-[#FF723A] active:underline hover:cursor-pointer'>Contact Us</li>
          <div className='flex flex-row gap-4 '>
            <button className='sm:bg-[#13121D] sm:border sm:border-[#FF723A] sm:active:font-bold sm:active:bg-transparent sm:active:border sm:active:border-[#FF723A] md:active:font-bold md:bg-[#13121D] md:active:bg-transparent md:border md:border-[#FF723A] md:active:border md:active:border-[#FF723A] lg:bg-transparent lg:hover:text-[#FF723A] lg:active:text-white  lg:active:bg-[#FF723A] lg:hover:border lg:hover:border-[#FF723A] px-4 py-2 rounded-md'>Login</button>
            <button className=' sm:bg-[#13121D] sm:border sm:border-[#FF723A] sm:active:font-bold sm:active:bg-transparent sm:active:border sm:active:border-[#FF723A] md:active:font-bold md:bg-[#13121D] md:active:bg-transparent md:border md:border-[#FF723A] md:active:border md:active:border-[#FF723A] lg:bg-[#FF723A] lg:active:bg-transparent lg:active:border lg:active:border-[#FF723A] px-4 py-2 rounded-md'>Sign Up</button>
          </div>
        </ul>
      </div>
    </div>
    // <div className='flex flex-row justify-between px-20 py-12 items-center'>
    //     <h1 className='font-bold  text-2xl'><span className='text-[#FF723A]'>R</span>adiant</h1>
        
    //     <button onClick={handleclick}>
    //       {isClicked ? 
    //         <FaTimes className='lg:hidden text-[#FF723A] text-4xl'/>
    //         : 
    //         <FaBars className='lg:hidden text-[#FF723A] text-4xl'/> 
    //       }
    //     </button>
        
    //     <div className='sm:z-50 md:z-50 lg:z-1 sm:bg-orange md:bg-orange lg:bg-transparent sm:absolute md:absolute lg:static sm:hidden  md:hidden lg:flex sm:flex-col md:flex-col lg:flex-row sm:gap-8 md:gap-8 lg:gap-10 sm:top-[8%] md:top-[8%] items-center justify-between'>
    //       {/* <button>
    //       </button> */}

    //       <div className='flex sm:flex-col md:flex-col lg:flex-row gap-4'>
    //         <h1 className='opacity-70 hover:font-bold active:text-[#FF723A] active:underline hover:cursor-pointer'>Home</h1>
    //         <h1 className='opacity-70 hover:font-bold active:text-[#FF723A] active:underline hover:cursor-pointer'>About Us</h1>
    //         <h1 className='opacity-70 hover:font-bold active:text-[#FF723A] active:underline hover:cursor-pointer'>Services</h1>
    //         <h1 className='opacity-70 hover:font-bold active:text-[#FF723A] active:underline hover:cursor-pointer'>Our Team</h1>
    //         <h1 className='opacity-70 hover:font-bold active:text-[#FF723A] active:underline hover:cursor-pointer'>Blog</h1>
    //         <h1 className='opacity-70 hover:font-bold active:text-[#FF723A] active:underline hover:cursor-pointer'>Portfolio</h1>
    //         <h1 className='opacity-70 hover:font-bold active:text-[#FF723A] active:underline hover:cursor-pointer'>FAQs</h1>
    //         <h1 className='opacity-70 hover:font-bold active:text-[#FF723A] active:underline hover:cursor-pointer'>Contact Us</h1>
    //       </div>
    //       <div className='flex flex-row gap-4'>
    //         <button className='sm:bg-[#13121D] sm:border sm:border-[#FF723A] sm:active:font-bold sm:active:bg-transparent sm:active:border sm:active:border-[#FF723A] md:active:font-bold md:bg-[#13121D] md:active:bg-transparent md:border md:border-[#FF723A] md:active:border md:active:border-[#FF723A] lg:bg-transparent lg:hover:text-[#FF723A] lg:active:text-white  lg:active:bg-[#FF723A] lg:hover:border lg:hover:border-[#FF723A] px-4 py-2 rounded-md'>Login</button>
    //         <button className=' sm:bg-[#13121D] sm:border sm:border-[#FF723A] sm:active:font-bold sm:active:bg-transparent sm:active:border sm:active:border-[#FF723A] md:active:font-bold md:bg-[#13121D] md:active:bg-transparent md:border md:border-[#FF723A] md:active:border md:active:border-[#FF723A] lg:bg-[#FF723A] lg:active:bg-transparent lg:active:border lg:active:border-[#FF723A] px-4 py-2 rounded-md'>Sign Up</button>
    //       </div>
    //     </div>
    // </div>
  )
}

export default Navbar