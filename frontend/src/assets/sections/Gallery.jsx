import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { photoBook } from '../data/photoBook';
import './Gallery.css';

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <section id="book" className="gallery">
      <div className="gallery-header">
        <h2 className="gallery-header__title">Galería</h2>
        <p className="gallery-header__description">
          Una colección de fotos de mi book de fotos profesional.
        </p>
      </div>

      <div className="gallery-book">
        {photoBook.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={photo.alt}
            className="gallery-book__image"
            onClick={() => {
              setPhotoIndex(index);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={photoBook}
        index={photoIndex}
      />
    </section>
  );
};

export default Gallery;
