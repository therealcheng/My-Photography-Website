import { motion } from 'framer-motion';
import ReactGridGallery from 'react-grid-gallery';

const images = [
  {
    src: 'photo1.jpg',
    thumbnail: 'photo1-thumbnail.jpg',
    caption: 'Photo 1',
  },
  {
    src: 'photo2.jpg',
    thumbnail: 'photo2-thumbnail.jpg',
    caption: 'Photo 2',
  },
  // ...
];

const Gallery = () => {
  return (
    <div>
      <ReactGridGallery images={images} enableImageSelection={false} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {images.map((image) => (
          <motion.img
            key={image.src}
            src={image.src}
            alt={image.caption}
            initial={{ scale: 0.5, x: -50, y: -50 }}
            animate={{ scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Gallery;
