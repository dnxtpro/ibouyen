import './hero.css'
import './contact.css'
import Products from './products'
import { motion } from 'framer-motion'
import { useScroll,useTransform } from 'framer-motion'


function Contact() {
  const { scrollYProgress } = useScroll()
  const scale =useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const y=useTransform(scrollYProgress,[0,1],[0,-300])
  
  return (
    <>
<div className=' flex flex-row justify-evenly mb-96'>
    <motion.a href='https://www.instagram.com/ibouyen' animate={{opacity:1, x:0,scale:1}} initial={{opacity:0, x:-500,scale:0.5}} transition={{ duration: 2}}className="imgw-container"><img className='primary' src="./INSTA.PNG" alt="" srcset="" /><img className='secondary' src="./INSTAN.PNG" alt="" srcset="" />
    </motion.a>
    <motion.a href='mailto:fadelmabroukiibouyen@gmail.com' animate={{opacity:1, x:0,scale:1.1}}  initial={{opacity:0, x:500,scale:0.5}} transition={{ duration: 2}} className="imgw-container"><img className='primary' src="./GMAIL.PNG" alt="" srcset="" /><img className='secondary' src="./GMAILN.PNG" alt="" srcset="" />
   </motion.a>
   
</div>

</>

  )
}

export default Contact