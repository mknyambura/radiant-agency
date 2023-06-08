import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row items-center justify-between px-14 py-12'>
        <h1 className='font-bold  text-2xl'><span className='text-[#FF723A]'>R</span>adiant</h1>
        <div className='flex flex-row gap-4'>
            <h1 className='opacity-70'>Home</h1>
            <h1 className='opacity-70'>About Us</h1>
            <h1 className='opacity-70'>Services</h1>
            <h1 className='opacity-70'>Our Team</h1>
            <h1 className='opacity-70'>Blog</h1>
            <h1 className='opacity-70'>Portfolio</h1>
            <h1 className='opacity-70'>FAQs</h1>
            <h1 className='opacity-70'>Contact Us</h1>
        </div>
        <div className='flex flex-row gap-4'>
            <button className='px-4 py-2 rounded-md opacity-70 hover:border hover:border-[#FF723A]'>Login</button>
            <button className='px-4 py-2 rounded-md bg-[#FF723A] '>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar