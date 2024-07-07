import './Navbar.css'
import { motion } from 'framer-motion'
import Logo from './logo.jsx'
function Navbar() {
  
  return (
    
   <nav className="flex flex-row ">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-2 p-4 w-full">
    <ul className="flex flex-row w-full">
      
     <a href="#" className=''><div className='svg-container'> <img className=' primary'  src="./ibouyen3.PNG"></img><img className='secondary'src="./ibouyenN.png"></img></div></a>
     <div  className='flex flex-row  align-middle space-x-4'>
            <a href='#' className='img-container'><img className="illo primary" src="./AM.png" alt="" /> <img className="illo   secondary" src="./AMN.png" alt="" />      </a>
            <a href='#' className='img-container'><img className="illo primary" src="./work.png" alt="" /> <img className="illo secondary" src="./WORKN.png" alt="" />   </a>
            <a href='#' className='img-container'><img className="illo primary" src="./RONDA.png" alt="" /><img className="illo secondary" src="./RONDAN.png" alt="" /> </a>
            <a href='#' className='img-container'><img className="illo primary" src="./shop.png" alt="" /><img className="illo  secondary" src="./SHOPN.png" alt="" />  </a>
     </div> 
    </ul>
    </div>
   </nav>
   
  )
}

export default Navbar