import './hero.css'

function Hero() {
  
  return (
    
<div className='mx-auto w-3/6'>
<div className="flex flex-row">
    <a href="#" className='svg-container1'><img src="./1.PNG" alt=""  className='primary'/><img src="./11.PNG" alt=""  className='secondary'/></a>
    <a href="#" className='svg-container1'><img src="./2.PNG" alt="" className='primary' /><img src="./22.PNG" alt="" className='secondary'/></a>
</div>
<div className="flex flex-row">
<a href="#" className='svg-container1'><img src="./3.PNG" alt=""  className='primary'/><img src="./33.PNG" alt="" className='secondary'/></a>
<a href="#"className='svg-container1'><img src="./4.PNG"className='primary' alt="" /><img src="./44.PNG" alt="" className='secondary' /></a>
</div>
</div>
   
  )
}

export default Hero