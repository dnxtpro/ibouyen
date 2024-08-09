import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  // Lista de URLs de imágenes
  const images = [
    'rondaz.PNG',
    'morado.PNG',
    'blanco.PNG',
    'dorado.PNG',
    // Agrega más URLs de imágenes aquí
  ];

  // Estado para la imagen actual
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Cambia la imagen cada 5 segundos (5000 ms)
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 2000);

    // Limpieza del intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    
      <img 
        src={images[currentImageIndex]} 
        alt={`Imagen ${currentImageIndex + 1}`}
        className='w-2/4 mx-auto'
      />
  );
};

export default ImageSlider;
