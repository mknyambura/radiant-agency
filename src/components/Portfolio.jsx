import React, { useEffect, useMemo, useState } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import { SlArrowRight } from 'react-icons/sl'

import data from '../../db.json'
import { button } from '@material-tailwind/react'

const Portfolio = () => {
    const [item, setItem] = useState(data.projects);
    const [selectedCategory, setSelectedCategory] = useState();


    useEffect(() => {
        setItem(data.projects);
    }, []);

    function getFilteredList() {
        if (!selectedCategory) {
          return item;
        }
        return item.filter((item) => item.category === selectedCategory);
    }
    var filteredList = useMemo(getFilteredList, [selectedCategory, item]);

  return (
    <div>
        <div className="bg-[url('./assets/portfolio.png')] h-[500px] bg-cover bg-no-repeat">
            <Navbar/>
            <div className='flex flex-col items-center gap-6'>
                <h1 className='font-bold text-4xl'>Portfolio</h1>
                <h1 className='flex flex-row gap-2 items-center uppercase'><a href="/" className='hover:underline'>Home</a> <SlArrowRight/>Portfolio</h1>
            </div>
        </div>


        <div>
            <div className='flex flex-row justify-evenly px-12 py-12'>
                <h1 className='active:font-bold active:underline active:text-[#FF723A] hover:cursor-pointer hover:font-bold shadow-xl shadow-[#FF723A]/70'>All</h1>
                {data.categories.map((category) => (
                    <h1 className='active:font-bold active:underline active:text-[#FF723A] hover:cursor-pointer hover:font-bold shadow-xl shadow-[#FF723A]/70'>{category.category}</h1>
                ))}
            </div>
            <div className='grid grid-cols-3 gap-12 px-20 py-12'>
                {data.projects.map((project) => (
                    <div className='relative'>
                        <div>
                            <img src={project.image} alt="" />
                        </div>
                        <div className='bottom-0  px-3 py-3 bg-[#FF723A]/70 rounded-md w-full text-black flex flex-col absolute'>
                            <h1 className='opacity-50 text-sm'>{project.category}</h1>
                            <h1>{project.title}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Portfolio