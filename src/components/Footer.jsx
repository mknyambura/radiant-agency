import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { SlLocationPin } from 'react-icons/sl'
import { CiMail } from 'react-icons/ci'

const Footer = () => {
  return (
    <div className='flex flex-col px-24 py-12'>
        <div className='flex sm:flex-col md:flex-col lg:flex-row justify-between gap-12'>
            <div className='flex flex-col gap-6 w-1/4'>
                <h1 className='font-bold text-3xl'><span className='text-[#FF723A]'>R</span>adiant</h1>
                <p className='opacity-50'>
                    Radiant is a digital agency. UI/UX Design and Website Development located in Ohio, USA
                </p>
            </div>
            <div className='w-3/4 flex sm:flex-col md:flex-col lg:flex-row gap-8 justify-evenly'>
                <div className=' flex flex-col gap-4'>
                    <h1 className='font-bold'>Get in Touch</h1>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-row gap-2'>
                            <SlLocationPin/>
                            <p className='opacity-50'>
                                8819 Ohio St.South Gate, CA 90280
                            </p>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <CiMail/>
                            <p className='opacity-50'>
                                radiant-agency@example-email.com
                            </p>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <BsTelephone/>
                            <p className='opacity-50'>
                                +1 386-688-3295
                            </p>
                        </div>
                    </div>
                </div>
                <div className=' flex flex-col gap-4'>
                    <h1 className='font-bold'>Service</h1>
                    <div className='flex flex-col gap-2 '>
                        <h1 className='opacity-50 hover:underline hover:font-bold hover:opacity-100 hover:cursor-pointer'>UI/UX Design</h1>
                        <h1 className='opacity-50 hover:underline hover:font-bold hover:opacity-100 hover:cursor-pointer'>Web Development</h1>
                        <h1 className='opacity-50 hover:underline hover:font-bold hover:opacity-100 hover:cursor-pointer'>Mobile Development</h1>
                        <h1 className='opacity-50 hover:underline hover:font-bold hover:opacity-100 hover:cursor-pointer'>IT Consultancy</h1>
                        <h1 className='opacity-50 hover:underline hover:font-bold hover:opacity-100 hover:cursor-pointer'>Database Security</h1>
                        <h1 className='opacity-50 hover:underline hover:font-bold hover:opacity-100 hover:cursor-pointer'>QA Testing</h1>
                    </div>
                </div>
                <div className=' flex flex-col gap-4'>
                    <h1 className='font-bold'>Company</h1>
                    <div className='flex flex-col gap-2 '>
                        <h1 className='opacity-50 hover:underline hover:font-bold hover:font-white hover:opacity-100 hover:cursor-pointer'>Service</h1>
                        <h1 className='opacity-50 hover:underline hover:font-bold hover:font-white hover:opacity-100 hover:cursor-pointer'>Features</h1>
                        <h1 className='opacity-50 hover:underline hover:font-bold hover:font-white hover:opacity-100 hover:cursor-pointer'>Our Team</h1>
                        <h1 className='opacity-50 hover:underline hover:font-bold hover:font-white hover:opacity-100 hover:cursor-pointer'>Portfolio</h1>
                        <h1 className='opacity-50 hover:underline hover:font-bold hover:font-white hover:opacity-100 hover:cursor-pointer'>Blog</h1>
                        <h1 className='opacity-50 hover:underline hover:font-bold hover:font-white hover:opacity-100 hover:cursor-pointer'>Contact Us</h1>
                    </div>
                </div>
                <div className='w-1/4 flex flex-col gap-4 '>
                    <div className='flex flex-row gap-3'>
                        <button disabled="disabled" className='bg-white rounded-full text-black font-bold text-xl px-2 py-2'>Dr</button>
                        <button disabled="disabled" className='bg-white rounded-full text-black font-bold text-xl px-2 py-2'>Be</button>
                        <button disabled="disabled" className='bg-white rounded-full text-black font-bold text-xl px-2 py-2'>IG</button>
                    </div>
                    <p className=' opacity-50 text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
                </div>
            </div>
        </div>
        <div className='flex flex-col px-12 py-12 gap-8'>
            <div className='bg-[#FF723A] h-[2px]'></div>
            <div className='flex sm:flex-col md:flex-col lg:flex-row gap-8 justify-between px-12 py-6'>
                <h1>All Rights Reserved.</h1>
                <div className='flex flex-row'>
                    <h1>Privacy Policy</h1>
                    <h1>Terms & Conditions</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer