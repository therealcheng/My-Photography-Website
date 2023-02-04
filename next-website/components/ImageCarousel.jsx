import Image from 'next/image';
import artwork1 from '../public/img1.jpg';
import artwork2 from '../public/img2.jpg';
import artwork3 from '../public/img3.jpg';
import artwork4 from '../public/img4.jpg';
import artwork5 from '../public/img5.jpg';
import artwork6 from '../public/img6.jpg';
import artwork7 from '../public/img7.jpg';
import artwork8 from '../public/img8.jpg';
import { motion } from 'framer-motion';

const Carousel = () => {
  return (
    <div className='h-64 w-96 relative'>
      <div className='carousel rounded-box'>
        <div className='carousel-item'>
          <Image src={artwork1} alt='Burger' fill cover />
        </div>
        <div className='carousel-item'>
          <Image src={artwork1} alt='Burger' fill cover />
        </div>
        <div className='carousel-item'>
          <Image src={artwork1} alt='Burger' fill cover />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
