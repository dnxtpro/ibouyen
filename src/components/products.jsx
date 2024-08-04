import './products.css'
import { motion,useScroll,useTransform} from 'framer-motion'



function Products() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x1 = useTransform(scrollYProgress,[0.4,0.7],[-200,0]);
  const x2 = useTransform(scrollYProgress,[0.4,0.7],[200,0]);

  return (
      
<div className=' lolo flex flex-col space-y-5 mt-4'>
<div style={{y}} className="flex flex-row space-x-16">
<a style={{x:x1}} href="#" className='border-4 rounded-lg text-center'> <span>RONDA</span><img src="./68.svg" className=' hover:bg-blue-400 text-center' alt="" /> <div className='flex flex-row space-x-16 align-middle'><span>150MAD</span><button>ADD TO CART</button> </div>  </a>
<a href="#" className='border-4 rounded-lg text-center'> <span>RONDA</span><img src="./68.svg" className=' hover:bg-blue-400 text-center' alt="" /> <div className='flex flex-row space-x-16 align-middle'><span>150MAD</span><button>ADD TO CART</button> </div>  </a>
<a style={{x:x2}} href="#" className='border-4 rounded-lg text-center'> <span>RONDA</span><img src="./68.svg" className=' hover:bg-blue-400 text-center' alt="" /> <div className='flex flex-row space-x-16 align-middle'><span>150MAD</span><button>ADD TO CART</button> </div>  </a>


</div>
<div style={{y}} className=" flex flex-row space-x-16">
<a style={{x:x1}} href="#" className='border-4 rounded-lg text-center'> <span>RONDA</span><img src="./68.svg" className=' hover:bg-blue-400 text-center' alt="" /> <div className='flex flex-row space-x-16 align-middle'><span>150MAD</span><button>ADD TO CART</button> </div>  </a>
<a href="#" className='border-4 rounded-lg text-center'> <span>RONDA</span><img src="./68.svg" className=' hover:bg-blue-400 text-center' alt="" /> <div className='flex flex-row space-x-16 align-middle'><span>150MAD</span><button>ADD TO CART</button> </div>  </a>
<a style={{x:x2}} href="#" className='border-4 rounded-lg text-center'> <span>RONDA</span><img src="./68.svg" className=' hover:bg-blue-400 text-center' alt="" /> <div className='flex flex-row space-x-16 align-middle'><span>150MAD</span><button>ADD TO CART</button> </div>  </a>


</div>
<div style={{y}} className="flex flex-row space-x-16">
<a style={{x:x1}} href="#" className='border-4 rounded-lg text-center'> <span>RONDA</span><img src="./68.svg" className=' hover:bg-blue-400 text-center' alt="" /> <div className='flex flex-row space-x-16 align-middle'><span>150MAD</span><button>ADD TO CART</button> </div>  </a>
<a href="#" className='border-4 rounded-lg text-center'> <span>RONDA</span><img src="./68.svg" className=' hover:bg-blue-400 text-center' alt="" /> <div className='flex flex-row space-x-16 align-middle'><span>150MAD</span><button>ADD TO CART</button> </div>  </a>
<a style={{x:x2}} href="#" className='border-4 rounded-lg text-center'> <span>RONDA</span><img src="./68.svg" className=' hover:bg-blue-400 text-center' alt="" /> <div className='flex flex-row space-x-16 align-middle'><span>150MAD</span><button>ADD TO CART</button> </div>  </a>


</div>
</div>
   

  )
}

export default Products