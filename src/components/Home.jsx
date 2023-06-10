import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'

import data from '../../db.json'

import { BsArrowRight } from 'react-icons/bs'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper' 
import 'swiper/css'
import 'swiper/css/free-mode'
import 'bootstrap/dist/css/bootstrap.min.css'

import mid1 from '../assets/mid1.png'
import mid2 from '../assets/mid2.png'
import mission1 from '../assets/mission1.png'
import mission2 from '../assets/mission2.png'
import formImage from '../assets/form.png'

const Home = () => {
    const [services, setServices] = useState([])
    const [help, setHelp] = useState([])
    const [steps, setSteps] = useState([])
    const [clients, setClients] = useState([])

    useEffect(() => {
        fetch('/services')
        .then((response) => response.json())
        // .then((data) => console.log(data))
        .then(setServices)
    }, [])

    useEffect(() => {
        fetch('/help')
        .then((response) => response.json())
        // .then((data) => console.log(data))
        .then(setHelp)
    }, [])

    useEffect(() => {
        fetch('/steps')
        .then((response) => response.json())
        // .then((data) => console.log(data))
        .then(setSteps)
    }, [])

    useEffect(() => {
        fetch('/clients')
        .then((response) => response.json())
        // .then((data) => console.log(data))
        .then(setClients)
    }, [])

  return (
    <div>
        <Navbar/>
        <Header/>
        <div className='flex flex-col items-center gap-12 mt-16 mb-16'>
            <h1 className='font-bold sm:text-4xl md:text-5xl lg:text-5xl'>Our Services</h1>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 px-24 py-12 gap-12'>
                {data.services.map((service) => (
                    <div 
                        key={service.id} 
                        className='bg-[#2F2E41] rounded-lg flex flex-col items-center px-12 py-12 justify-between gap-8'
                    >
                        <div>
                            <img src={service.image} alt="" />
                        </div>
                        <h1 className='font-bold text-xl text-center'>{service.title}</h1>
                        <p className='opacity-50 text-center'>{service.description}</p>
                        <a href="#" className='flex items-center gap-2 text-[#FF723A] hover:underline'>Learn More <BsArrowRight/></a>
                    </div>
                ))}
            </div>
        </div>
        <div className='flex sm:flex-col lg:flex-row justify-between gap-8 px-20 py-12 mt-16 mb-16'>
            <Swiper
                freeMode={true}
                grabCursor={true}
                modules={FreeMode}
                slidesPerView={1}
                spaceBetween={30}
                className='sm:w-3/4 md:w-3/4  mySwiper flex flex-row  justify-start overflow-x-scroll overflow-y-hidden'
            >
                <SwiperSlide className='flex flex-col items-center justify-center'>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={mid1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col items-center justify-center'>
                    <div className='flex flex-col items-center top-[-2%] left-[-15%] justify-center'>
                        <img src={mid2} alt="" width={400} />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='flex flex-col justify-evenly lg:w-1/2 px-12 py-12 gap-8'>
                <h1 className='font-bold sm:text-4xl md:text-5xl lg:text-5xl'>Top Class Web Development Agency</h1>
                
                <div className=' flex flex-col gap-8'>
                    <p className='opacity-50'>
                        We are an experienced and talented team of passionate developers who lives and breathe in web design and development.
                    </p>
                    <p className='opacity-50'>
                        We have many clients around the world like United States, Australia, United Kingdom, Canada, France, Germany, and many more.
                    </p>
                    <button className='sm:w-[35%] md:w-[35%] lg:w-[40%] mt-16 text-white bg-[#FF723A] px-4 py-2 rounded-lg'>Explore More</button>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center gap-12 mt-16 mb-16'>
            <div className='flex flex-col gap-8 w-3/4 items-center text-center'>
                <h1 className='font-bold text-5xl'>How Our Web Developer Team Can Help</h1>
                <p className='opacity-50 w-1/2'>
                    We enjoy adapting our strategies to offer every client the best solutions that are at the forefront of the industry.
                </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-24 py-12 gap-12'>
                {data.help.map((help) => (
                    <div 
                        key={help.id} 
                        className='bg-[#2F2E41] rounded-lg flex flex-col items-center px-12 py-12 justify-between gap-8'
                    >
                        <div>
                            <img src={help.image} alt="" />
                        </div>
                        <h1 className='font-bold text-xl text-center'>{help.title}</h1>
                        <p className='opacity-50 text-center'>{help.description}</p>
                        <a href="#" className='flex items-center gap-2 text-[#FF723A] hover:underline'>Learn More <BsArrowRight/></a>
                    </div>
                ))}
            </div>
        </div>
        <div className='flex sm:flex-col md:flex-col lg:flex-row px-20 py-12 mt-16 mb-16 justify-between'>
            <div className='flex flex-col gap-8'>
                <h1 className='font-bold text-5xl'>Why Work With Us?</h1>
                <p className='opacity-50'>
                    Let’s see Why do we claim that we are the best web agency in Bangladesh?
                </p>
                <ul className='flex flex-col gap-2 list-disc marker:text-[#FF723A]'>
                    <li>Access To Diversified Pool of Skilled Professionals</li>
                    <li>Leverage Highest Quality Standards</li>
                    <li>Leverage Strong Project Management Expertise</li>
                    <li>Competitive Price, On Time On Budget Deliveries</li>
                    <li>100% Satisfaction Guarantee</li>
                    <li>Superior support team</li>
                </ul>
            </div>
            <div className='sm:w-full lg:w-[60%] sm:mb-24 md:mb-22 lg:mb-16 flex sm:flex-row lg:flex-col justify-between relative'>
                <div className=''>
                    <img src={formImage} alt="" />
                </div>
                <form className='absolute sm:w-[300px] md:[350px] lg:top-[-14.4%] sm:right-0 lg:left-[35%] bg-[#2F2E41] px-3 py-3 rounded-lg'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="">First Name</label>
                            <input type="text" className='px-3 py-3 focus:ring-[#FF723A] focus:ring-offset-[#FF723A] bg-[#3B3A4F]'/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="">Email Address</label>
                            <input type="email" className='px-3 py-3 focus:ring-[#FF723A] focus:ring-offset-[#FF723A] bg-[#3B3A4F]'/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="">Messages</label>
                            <textarea type="text" cols='30' row='10' className='px-3 py-3 focus:ring-[#FF723A] focus:ring-offset-[#FF723A] bg-[#3B3A4F]'></textarea>
                        </div>
                    </div>
                    <button className='sm:mt-5 md:mt-5 w-1/2 bg-[#FF723A] sm:px-1 sm:py-1 lg:px-4 lg:py-2 rounded-md'>Send Message</button>
                </form>
            </div>
        </div>
        <div className='flex flex-col gap-12 mt-16 items-center '>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='font-bold sm:text-4xl md:text-4xl lg:text-5xl'>Get Started with 4 Easy Steps</h1>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-16 mb-16 px-20 justify-evenly gap-2'>
                {data.steps.map((step) => (
                    <div
                        key={step.id}
                        className='flex flex-col gap-4 sm:w-full md:1/2 lg:w-full'
                    >
                        <div>
                            <img src={step.image} alt="" />
                        </div>
                        <div className='flex flex-col gap-8'>
                            <h1 className='font-bold text-2xl'>{step.title}</h1>
                            <p>{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className=' flex flex-col gap-8 px-20 py-12'>
            <div className='mb-16 flex flex-col items-center justify-center'>
                <h1 className='font-bold text-5xl'>Some of our partners and clients</h1>
            </div>
            <div className=' flex sm:flex-col md:flex-col lg:flex-row justify-between gap-12 px-6 py-6'>
                {data.clients.map((client) => (
                    <div key={client.id} className='flex  flex-col  justify-evenly rounded-lg bg-[#2F2E41] px-6 py-6'>
                        <div>
                            <img src={client.image} alt="" />
                        </div>
                        <div>
                            <p>{client.description}</p>
                        </div>
                        <a href="#" className='font-bold mt-8 hover:underline hover:cursor-pointer'>View Project</a>
                    </div>
                ))}
            </div>
        </div>
        <div className='flex sm:flex-col md:flex-col lg:flex-row justify-between gap-8 px-20 py-12 mt-16 mb-16'>
            <Swiper
                freeMode={true}
                grabCursor={true}
                modules={FreeMode}
                slidesPerView={1}
                spaceBetween={50}
                className='sm:w-full md:w-full lg:w-1/2  mySwiper flex flex-row  justify-start overflow-x-scroll overflow-y-hidden'
            >
                <SwiperSlide className='flex flex-col items-center justify-center'>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={mission1} alt="" width={400}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col items-center justify-center'>
                    <div className='flex flex-col items-center top-[-2%] left-[-15%] justify-center'>
                        <img src={mission2} alt="" width={400} />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='flex flex-col justify-evenly lg:w-1/2 px-12 py-12 gap-8'>
                <h1 className='font-bold text-5xl'>Our Mission & Vission</h1>
                <div className='flex sm:flex-col md:flex-col lg:flex-col gap-8'>
                    <p className='opacity-50'>
                        We believe in creating technology that enhances the growth of your business around the world.
                    </p>
                    <p className='opacity-50'>
                        Our vision is to design and deliver cutting-edge website solutions, E-commerce website & Digital marketing that help businesses become more sustainable. We understand the customized need of each client, and partner with them to create superior value for their businesses. Our team consists of highly skilled consultants, website developers, digital marketers, and executives. We aim to exceed the expectations of the clients by continually making our products and services better.
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home