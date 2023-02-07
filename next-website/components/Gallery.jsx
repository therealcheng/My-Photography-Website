import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Gallery = ({ images }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <AnimatePresence>
      <div className='grid lg:grid-cols-3 lg:gap-1 p-8 gap-8'>
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className='rounded-md overflow-hidden'
            onClick={() => setOpen(true)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={500}
              className='object-cover'
            />
            <Lightbox
              open={open}
              close={() => setOpen(false)}
              slides={[
                { src: '/image1.jpg' },
                { src: '/image2.jpg' },
                { src: '/image3.jpg' },
              ]}
            />
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
};

export default Gallery;
