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
<div className=' flex flex-row justify-evenly'>
    <div className="imgw-container"><img className='primary' src="./INSTA.PNG" alt="" srcset="" /><img className='secondary' src="./INSTAN.PNG" alt="" srcset="" /></div>
    <div className="imgw-container"><img className='primary' src="./GMAIL.PNG" alt="" srcset="" /><img className='secondary' src="./GMAILN.PNG" alt="" srcset="" /></div>
   
</div>

</>

  )
}

export default Contact