import { useState,useEffect } from 'react'
import Navbar from './components/navbar'
import Logo from './components/logo.jsx'
import './App.css'
import Hero from './components/hero.jsx'
import Work from './components/work.jsx'
import { motion,useScroll,useSpring,useTransform } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Products from './components/products.jsx'
import Contact from './components/contact'
import Footer from './components/footer.jsx'
import Ronda from './components/ronda.jsx'
import Aboutme from './components/aboutme.jsx'
import { Analytics } from "@vercel/analytics/react"
import { inject } from '@vercel/analytics';


inject();
function App() {
  const [count, setCount] = useState(0);


  return (
    <Router>
      <Navbar/>
    <div className='mt-0 w-full justify-center'>
    
  

    <Routes>
      <Route path="/shop" element={<Hero/>}/>
      <Route path="/" element={<Navigate to="/work" replace />} />
      <Route path="/work" element={<Work/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/ronda" element={<Ronda/>}/>
      <Route path="/aboutme" element={<Aboutme/>}/>


    </Routes>
    <Footer/>

  </div>

  </Router>
  
  )
}

export default App
