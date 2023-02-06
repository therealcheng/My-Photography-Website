import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

const Gallery = ({ images }) => {
  return (
    <AnimatePresence>
      <div className='grid grid-cols-3 gap-4'>
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className='rounded-lg overflow-hidden'
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={450}
              className='w-full h-64 object-cover'
            />
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
};

export default Gallery;
