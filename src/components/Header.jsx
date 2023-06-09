import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper' 
import 'swiper/css'
import 'swiper/css/free-mode'
import 'bootstrap/dist/css/bootstrap.min.css'


import bg1 from '../assets/bg1.png'
import bg2 from '../assets/bg2.png'
import yellowBox from '../assets/yellow-box.png'



const Header = () => {
  return (
    <div className='flex flex-row items-center'>
        <div className='w-3/4 flex flex-col gap-8 px-20'>
            <h1 className='font-bold text-5xl'>We help grow the tech industry</h1>
            <p className='opacity-70'>
                We will help to develop every smallest thing into a big one for your company
            </p>
            <div className='flex flex-row gap-8'>
                <button className='bg-[#FF723A] px-5 py-2 rounded-md'>Contact Us</button>
                <button className='text-[#FF723A] px-5 py-2 rounded-md border border-[#FF723A]'>Our Works</button>
            </div>
        </div>
        <Swiper
            freeMode={true}
            grabCursor={true}
            modules={FreeMode}
            slidesPerView={1}
            spaceBetween={30}
            className='mySwiper flex flex-row items-center justify-start overflow-x-scroll overflow-y-hidden m-16 '
        >
            <SwiperSlide>
                <div className=''>
                    <img src={bg1} alt="" width={500}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex flex-col items-center relative'>
                    <img src={yellowBox} alt="" width={500}/>
                    <div className='absolute top-[-2%] left-0'>
                        <img src={bg2} alt="" width={500} />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Header