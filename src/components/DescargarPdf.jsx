import React from 'react';

function DescargarPDF() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/documents/mi-documento.pdf'; // Ruta relativa al PDF en la carpeta 'public'
    link.download = 'mi-documento.pdf'; // Nombre sugerido al descargar el archivo
    link.click();
  };

  return (
    <button onClick={handleDownload}>
      Descargar PDF
    </button>
  );
}

export default DescargarPDF;
