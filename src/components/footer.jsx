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
      
<div className='  flex flex-row bottom-0 h-[20vh] cuaderno w-full items-center justify-around '>
<div className="flex flex-col mt-4 h-[20vh]  justify-center ">
<a href="/work">WoRK</a>
<a href="/contact">CoNTACT</a>
<a href="/aboutme">ABoUT ME</a>
<a className='hover:cursor-pointer'href="https://drive.google.com/drive/folders/15h5wY6wwbIfdpVqp-ejVcJBva-MGsDFT">PoRToFoLIo</a>
<a href="/shop">SHoP</a>
<a href="/ronda">RoNDA</a>
</div>
<img className='md:block hidden h-3/4 ' src="/dordor.GIF" alt="" />
<div className='flex flex-col justify-center  w-auto'>
  <a href='https://www.instagram.com/ibouyen' className='flex flex-row items-center h-[7vh]'><img className='h-[7vh]' src="ibig.png" alt="" /></a>
  <div className="flex flex-row space-x-4 justify-around mt-2 il p-2">
    <h2 className='align-middle text-xs'>THiS WEB WAS MADE BY iLiAS AFAiLAL  </h2>   
    <a href=''><img className=' h-[2vh]' src="/2515843_black and white_dark grey_instagram_icon.svg" alt="" /></a>
    <a href="https://github.com/dnxtpro"><img className='h-[2vh]' src="/github-mark.svg" alt="" /></a>

</div>
</div>


</div>
   

  )
}

export default Footer