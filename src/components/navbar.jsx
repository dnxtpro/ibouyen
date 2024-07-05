import './Navbar.css'
import { motion } from 'framer-motion'
import Logo from './logo.jsx'
function Navbar() {
  
  return (
    
   <nav className="flex flex-row">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <ul className="flex flex-row w-full">
      
      <a href="#"><div className='svg-container'> <img className=' primary'  src="./ibouyen.svg"></img><img className='secondary'src="./ibouyen2.svg"></img></div></a>
      <div className='ml-10 flex-row justify-items-end '><a className='justify-end' href='https://www.instagram.com/ibouyen'><div className="img-container">
        <img className='prim' width={88} src="./ig2.svg"></img>
        <img className='sec' width={88} src="./ig2N.svg"></img>
        </div></a>
      </div>
    </ul>
    </div>
   </nav>
   
  )
}

export default Navbar