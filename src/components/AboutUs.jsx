import React from 'react'
import Home from './Home'
import Landing from './Landing'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'

import aboutUs from '../assets/about-us.png'
import { SlArrowRight } from 'react-icons/sl'

const AboutUs = () => {
  return (
    <div>
        <div className="bg-[url('./assets/about-us.png')] h-[500px] bg-cover bg-no-repeat">
            <Navbar/>
            <div className='flex flex-col items-center gap-6'>
                <h1 className='font-bold text-4xl'>About Us</h1>
                <h1 className='flex flex-row gap-2 items-center uppercase'><a href="/" className='hover:underline'>Home</a> <SlArrowRight/>About Us</h1>
            </div>
        </div>
        <Landing/>
        <Footer/>
    </div>
  )
}

export default AboutUs