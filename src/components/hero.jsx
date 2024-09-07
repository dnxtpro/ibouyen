import './hero.css'
import Products from './products'
import { motion } from 'framer-motion'
import { useScroll,useTransform } from 'framer-motion'


function Hero() {
  const { scrollYProgress } = useScroll()
  const scale =useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const scale1 =useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const y=useTransform(scrollYProgress,[0,1],[0,-300])
  
  return (
    <div className='relative z-0 justify-center items-center  flex flex-col'>
<motion.div style={{scale,y}} className=' lolo mt-4 '>
<img className='w-full' src='./Baja calidad.GIF'/>
</motion.div>
<motion.div style={{scale:scale1,y}} className="flex flex-col w-2/4">

  <img src="/zzzz.gif" alt="" />
  </motion.div>

</div>

  )
}

export default Hero