import { useState,useEffect } from 'react'
import Navbar from './components/navbar'
import Logo from './components/logo.jsx'
import './App.css'
import Hero from './components/hero.jsx'
import Work from './components/work.jsx'
import { motion,useScroll,useSpring,useTransform } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/products.jsx'
import Contact from './components/contact'


function App() {
  const [count, setCount] = useState(0);
  

  return (
    <Router>
      <Navbar/>
    <div className='mt-0 w-full justify-center'>
    
  

    <Routes>
      <Route path="/shop" element={<Hero/>}/>

      <Route path="/work" element={<Work/>}/>
      <Route path="/contact" element={<Contact/>}/>

    </Routes>

  </div>
  </Router>
  
  )
}

export default App
