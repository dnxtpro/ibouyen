import './hero.css'
import { motion } from 'framer-motion'
import { useScroll } from 'framer-motion'


function Hero() {
  const { scrollYProgress } = useScroll()
  
  return (
    
<div className=' lolo mx-auto mt-4'>
<img className='w-full an  ' src='./Buena calidad.GIF'/>
  </div>
   

  )
}

export default Hero