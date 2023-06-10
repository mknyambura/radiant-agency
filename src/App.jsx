import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Blog from './components/Blog'
import Portfolio from './components/Portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/portfolio-projects' element={<Portfolio/>}/>
      </Routes>
    </>
  )
}

export default App
