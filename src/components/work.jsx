import './hero.css'

        const handleDownload = () => {
          const link = document.createElement('a');
          link.href = '/Portofolio-Ibouyen.pdf'; // Ruta relativa al PDF en la carpeta 'public'
          link.download = 'PortofolioIbouyen.pdf'; // Nombre sugerido al descargar el archivo
          link.click();
        };


function Work() {
    
  
  return (
<div className="grid grid-cols-6 gap-0 h-3/6">
        <div className="col-span-3 py-0 my-0"><img src="./work/burro.jpg" alt="" /></div>    
        <div className='col-span-3 col-start-4 flex flex-col'>
        <img src="./work/paisajes.png" className='' alt="" />
        <img src="./work/fadelrezando.png" alt="" />
        </div>
        <div className="col-span-3 row-span-2 row-start-2">
        <img src="./work/fadelplayboy-min.png"  alt="" />
        </div>
        <div className='col-span-3 col-start-4 row-start-2'>
        <img src="./work/bichos.png"  alt="" />
        </div>
        
        <div className='col-span-3 row-span-2 col-start-4 row-start-3'>
        <img src="./work/dormida-min.png"  alt="" />
        </div>
        
        <div className='col-span-2 row-span-2 row-start-4'>
        <img  src="./work/aichakandicha.jpg"  alt="" />
        </div>
       
        <div className='col-span-4 col-start-3 row-start-5 flex flex-row'>
                <div className="grid grid-cols-2 gap-0">
                        <div onClick={handleDownload} className="row-span-2"><img src="./work/clickhere.png" className=' hover:cursor-pointer' alt="" /></div>
                        <div className="row-span-2 col-start-2 row-start-2"> <img src="./work/estatua.jpg" alt="" /></div>
                 </div>

                
        </div>
        
 
</div>
  )
}

export default Work