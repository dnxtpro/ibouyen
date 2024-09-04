import './products.css'
import { motion,useScroll,useTransform} from 'framer-motion'

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/Portofolio.pdf'; // Ruta relativa al PDF en la carpeta 'public'
  link.download = 'PortofolioIbouyen.pdf'; // Nombre sugerido al descargar el archivo
  link.click();
};

function Footer() {

  return (
      
<div className='  flex flex-row bottom-0 h-40 cuaderno w-full items-center justify-around '>
<div className="flex flex-col mt-4">
<a href="/work">WoRK</a>
<a href="/contact">CoNTACT</a>
<a href="/aboutme">ABoUT ME</a>
<a onClick={handleDownload}>PoRToFoLIo</a>
<a href="/shop">SHoP</a>
<a href="/ronda">RoNDA</a>
</div>
<img className='h-full' src="/dordor.GIF" alt="" />
<div className='flex flex-col justify-center '>
  <a href='https://www.instagram.com/ibouyen' className='flex flex-row items-center'><img className='h-16' src="ing.PNG" alt="" />@ibouyen</a>
  <div className="flex flex-row space-x-4 justify-around mt-2">
    <h1>THiS WEB WAS MADE BY iLiAS AFAiLAL  </h1>   
    <a href='https://www.instagram.com/afailalilias'><img className='h-10 ' src="/2515843_black and white_dark grey_instagram_icon.svg" alt="" /></a>
    <a href="https://github.com/dnxtpro"><img className='h-10' src="/github-mark.svg" alt="" /></a>

</div>
</div>


</div>
   

  )
}

export default Footer