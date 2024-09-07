import './hero.css'
import { motion } from 'framer-motion'
import { useScroll,useTransform } from 'framer-motion'

        const handleDownload = () => {
          const link = document.createElement('a');
          link.href = '/Portofolio.pdf'; // Ruta relativa al PDF en la carpeta 'public'
          link.download = 'PortofolioIbouyen.pdf'; // Nombre sugerido al descargar el archivo
          link.click();
        };


function Work() {
  const { scrollYProgress } = useScroll()
  
  const scale3 =useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const y=useTransform(scrollYProgress,[0,1],[0,-300])
  const y2=useTransform(scrollYProgress,[0.3,1],[0,-500])
  const scale1 =useTransform(scrollYProgress, [0.2, 1], [1, 0.5]);
  const scale2 =useTransform(scrollYProgress, [0.3, 1], [1, 0.5]);
  const scale5 =useTransform(scrollYProgress, [0.5, 1], [1, 1.005]);
  const x=useTransform(scrollYProgress,[0.5,1],[0,-200])
  const yw=useTransform(scrollYProgress,[0.5,1],[0,-100])

  
  return (
<div className="grid grid-cols-6 gap-0 h-3/6">
        <motion.div style={{scale:scale3,y}}   className="col-span-3 py-0 my-0"><img src="./work/burro.jpg" alt="" /></motion.div>    
        <motion.div style={{scale:scale3,y}}  className='col-span-3 col-start-4 flex flex-col'>
        <img src="./work/paisajes.png" className='' alt="" />
        <img src="./work/fadelrezando.png" alt="" />
        </motion.div>
        <motion.div style={{scale:scale1,y}} className="col-span-3 row-span-2 row-start-2">
        <img src="./work/fadelplayboy-min.png"  alt="" />
        </motion.div>
        <motion.div style={{scale:scale1,y}} className='col-span-3 col-start-4 row-start-2'>
        <img src="./work/bichos.png"  alt="" />
        </motion.div>
        
        <motion.div style={{scale:scale1,y}} className='col-span-3 row-span-2 col-start-4 row-start-3'>
        <img src="./work/dormida-min.png"  alt="" />
        </motion.div>
        
        <motion.div style={{scale:scale2,y:y2}} className='col-span-2 row-span-2 row-start-4'>
        <img  src="./work/aichakandicha.jpg"  alt="" />
        </motion.div>
       
        <motion.div style={{scale:scale5,x,y:yw}} className='col-span-4 col-start-3 row-start-5 flex flex-row'>
                <div className="grid grid-cols-2 gap-0">
                        <a  href='https://drive.google.com/drive/folders/15h5wY6wwbIfdpVqp-ejVcJBva-MGsDFT' className="row-span-2"><img src="./clickheree.PNG" className=' hover:cursor-pointer' alt="" /></a>
                        <div className="row-span-2 col-start-2 row-start-2"> <img src="./estatua.PNG" alt="" /></div>
                 </div>

                
        </motion.div>
        
 
</div>
  )
}

export default Work