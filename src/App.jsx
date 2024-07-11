import { useState,useEffect } from 'react'
import Navbar from './components/navbar'
import Logo from './components/logo.jsx'
import './App.css'
import Hero from './components/hero.jsx'
import Work from './components/work.jsx'
import { motion,useScroll,useSpring,useTransform } from 'framer-motion'


function App() {
  const [count, setCount] = useState(0);
  const{scrollYProgress} = useScroll();
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <div className='mt-0 w-full justify-center'>
  <Navbar/>
  <motion.div style={{scale}} className="mx-auto ">
  <Hero/>
  </motion.div>
  <Work/>
  </div>
  )
}

export default App
