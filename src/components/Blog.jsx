import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { SlArrowRight } from 'react-icons/sl'


import data from '../../db.json'

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(9)

    useEffect(() => {
        fetch('/blogs')
        .then((response) => response.json())
        // .then((data) => console.log(data))
        .then(setBlogs)
    }, [])

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = blogs.slice(firstPostIndex, lastPostIndex)
    
  return (
    <div>
        <div className="bg-[url('./assets/blog.png')] h-[500px] bg-cover bg-no-repeat">
            <Navbar/>
            <div className='flex flex-col items-center gap-6'>
                <h1 className='font-bold text-4xl'>Blog</h1>
                <h1 className='flex flex-row gap-2 items-center uppercase'><a href="/" className='hover:underline'>Home</a> <SlArrowRight/>Blog</h1>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-8 px-20 py-12'>
            {data.blogs.map((blog) => (
                <div className='relative'>
                    <div>
                        <img src={blog.image} alt="" />
                    </div>
                    <div className='bg-black/60 px-4 py-4 rounded-md absolute bottom-[30%] left-[15%] flex flex-col gap-2'>
                        <h1 className='opacity-70'>{blog.date}</h1>
                        <h1 className='font-bold'>{blog.title}</h1>
                    </div>
                </div>
            ))}
        </div>
        <Footer/>
    </div>
  )
}

export default Blog