import Image from 'next/image';
import artwork1 from '../public/img1.jpg';
import artwork2 from '../public/img2.jpg';
import artwork3 from '../public/img3.jpg';
import artwork4 from '../public/img4.jpg';
import artwork5 from '../public/img5.jpg';
import artwork6 from '../public/img6.jpg';
import artwork7 from '../public/img7.jpg';
import artwork8 from '../public/img8.jpg';
import { Button } from '@nextui-org/react';
import { Text } from '@nextui-org/react';
import { motion } from 'framer-motion';

const Carousel = () => {
  return (
    <motion.div
      className='carousel carousel-center max-w-md p-4 space-x-4 rounded-box'
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      transition={{ duration: 1.5 }}
    >
      <div className='carousel-item'>
        <Image
          src={artwork1}
          width={300}
          height={450}
          alt='Ishan Artwork'
          className='rounded-box'
        />
      </div>
      <div className='carousel-item'>
        <Image
          src={artwork2}
          width={300}
          height={450}
          alt='Ishan Artwork'
          className='rounded-box'
        />
      </div>
      <div className='carousel-item'>
        <Image
          src={artwork3}
          width={300}
          height={450}
          alt='Ishan Artwork'
          className='rounded-box'
        />
      </div>
      <div className='carousel-item'>
        <Image
          src={artwork5}
          width={300}
          height={450}
          alt='Ishan Artwork'
          className='rounded-box'
        />
      </div>
      <div className='carousel-item'>
        <Image
          src={artwork6}
          width={300}
          height={450}
          alt='Ishan Artwork'
          className='rounded-box'
        />
      </div>
      <div className='carousel-item'>
        <Image
          src={artwork7}
          width={300}
          height={450}
          alt='Ishan Artwork'
          className='rounded-box'
        />
      </div>
      <div className='carousel-item'>
        <Image
          src={artwork8}
          width={300}
          height={450}
          alt='Ishan Artwork'
          className='rounded-box'
        />
      </div>
    </motion.div>
  );
};

export default Carousel;
