import './Navbar.css'
import { motion } from 'framer-motion'
import Logo from './logo.jsx'
function Navbar() {
  
  return (
    
   <nav className="flex flex-no-wrap z-40 sticky top-0 bg-white w-full ">
    <div className=" flex items-center mx-2 p-4 w-full ">
    <ul className="flex 2xl:flex-row 2xl:justify-between justify-center w-full flex-col ">
      
     <a href="#" className='justify-center flex flex-row'><div className='svg-container 2xl:w-[700px] w-[80vh] '> <img className='primary'  src="./ibouyen3.PNG"></img><img className='secondary'src="./ibouyenN.png"></img></div></a>
     <div  className='flex flex-rows  align-middle justify-center 2xl:justify-normal space-x-4 max-lg:mt-4 ka mr-7  '>
            <a href='/work' className='img-container'><img className="illo primary" src="./work.PNG" alt="" /> <img className="illo secondary" src="./WORKN.PNG" alt="" />   </a>
            <a href='/aboutme' className='img-container'><img className="illo primary" src="./AM.PNG" alt="" /> <img className="illo   secondary"   src="./AMN.PNG" alt="" />      </a>
            <a href='/ronda' className='img-container'><img className="illo primary" src="./RONDA.PNG" alt="" /><img className="illo secondary" src="./RONDAN.PNG" alt="" /> </a>
            <a href='/shop' className='img-container'><img className="illo primary" src="./shop.PNG" alt="" /><img className="illo  secondary" src="./SHOPN.PNG" alt="" />  </a>
            <a href='/contact' className='img-container'><img className="illo primary" src="./Contactn.PNG" alt="" /><img className="illo  secondary" src="./Contact.PNG" alt="" />  </a>  
     </div> 
    </ul>
    </div>
   </nav>
   
  )
}

export default Navbar