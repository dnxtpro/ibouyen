import './hero.css'
import { motion } from 'framer-motion'
import { useScroll } from 'framer-motion'


function Hero() {
  const { scrollY } = useScroll()
  
  return (
    
<div className='w-full'>
<img className=' px-2 w-full' src='./Baja calidad.GIF'/>
  </div>
   

  )
}

export default Hero