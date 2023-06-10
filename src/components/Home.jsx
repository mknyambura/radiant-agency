import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import Landing from './Landing'


const Home = () => {
    
  return (
    <div>
        <Navbar/>
        <Header/>
        <Landing/>
        <Footer/>
    </div>
  )
}

export default Home