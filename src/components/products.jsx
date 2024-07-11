import './products.css'
import { motion,useScroll,useTransform} from 'framer-motion'



function Products() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  
  return (
    
<div className=' lolo mt-4'>
<motion.div style={{y}} className="flex flex-row space-x-4">
<a href="#" className='border-4 rounded-lg text-center'> <span>RONDA</span><img src="./68.svg" className=' hover:bg-blue-400 text-center' alt="" /> <div className='flex flex-row space-x-4 align-middle'><span>150MAD</span><button>ADD TO CART</button> </div>  </a>
<a href="#" className='border-4 rounded-lg text-center'> <span>RONDA</span><img src="./68.svg" className=' hover:bg-blue-400 text-center' alt="" /> <div className='flex flex-row space-x-4 align-middle'><span>150MAD</span><button>ADD TO CART</button> </div>  </a>
<a href="#" className='border-4 rounded-lg text-center'> <span>RONDA</span><img src="./68.svg" className=' hover:bg-blue-400 text-center' alt="" /> <div className='flex flex-row space-x-4 align-middle'><span>150MAD</span><button>ADD TO CART</button> </div>  </a>


</motion.div>
</div>
   

  )
}

export default Products