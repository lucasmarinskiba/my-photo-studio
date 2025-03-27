// src/components/Gallery.js
import React from 'react';

const Gallery = () => {
  const photos = [
    { id: 1, src: 'path/to/photo1.jpg', alt: 'Descripción 1' },
    { id: 2, src: 'path/to/photo2.jpg', alt: 'Descripción 2' },
    // Añade más fotos aquí
  ];

  return (
    <div className="gallery">
      {photos.map(photo => (
        <img key={photo.id} src={photo.src} alt={photo.alt} />
      ))}
    </div>
  );
};

export default Gallery;

