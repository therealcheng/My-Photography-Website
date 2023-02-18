import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';

const Gallery = ({ images }) => {
  return (
    <AnimatePresence>
      <div className='grid lg:grid-cols-3 lg:gap-1 p-8 gap-8'>
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='rounded-md overflow-hidden'
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={500}
              className='object-cover'
            />
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
};

export default Gallery;
