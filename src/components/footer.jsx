import './products.css'
import { motion,useScroll,useTransform} from 'framer-motion'



function Footer() {

  return (
      
<div className='  flex flex-row bottom-0 h-32 bg-black text-white w-full    underline items-center justify-around '>
<div className="flex flex-col mt-4">
<a href="/work">WORK</a>
<a href="/contact">CONTACT</a>
<a href="/shop">SHOP</a>
<a href="/aboutme">ABOUT ME</a>
</div>
<div className='w-2/6 h-3/4' ><img className='h-full' src="/Cara.PNG" alt="" /></div>
<div className='flex flex-col justify-center '>WEB MADE by Ilias Afailal
  <div className="flex flex-row space-x-4 justify-around mt-2">
    <a href='https://www.instagram.com/afailalilias'><img className='h-10' src="/2515843_black and white_dark grey_instagram_icon.svg" alt="" /></a>
<a href="https://github.com/dnxtpro"><img className='h-10' src="/github-mark.svg" alt="" /></a>

</div>
</div>

</div>
   

  )
}

export default Footer