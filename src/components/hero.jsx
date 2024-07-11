import './hero.css'
import Products from './products'
import { motion } from 'framer-motion'
import { useScroll,useTransform } from 'framer-motion'


function Hero() {
  const { scrollYProgress } = useScroll()
  const scale =useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const y=useTransform(scrollYProgress,[0,1],[0,-300])
  
  return (
    <>
<motion.div style={{scale,y}} className=' lolo mt-4 '>
<img className='w-full' src='./Baja calidad.GIF'/>
</motion.div>
<div className="flex">
  <Products/>
</div>

</>

  )
}

export default Hero