import test from '../public/test.jpg';
import Image from 'next/image';

const CarouselBleed = () => {
  return (
    <div>
      <div className='carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box'>
        <div className='carousel-item'>
          <Image alt='test' width={300} src={test} className='rounded-box' />
        </div>
        <div className='carousel-item'>
          <Image alt='test' width={300} src={test} className='rounded-box' />
        </div>
        <div className='carousel-item'>
          <Image alt='test' width={300} src={test} className='rounded-box' />
        </div>
        <div className='carousel-item'>
          <Image alt='test' width={300} src={test} className='rounded-box' />
        </div>
        <div className='carousel-item'>
          <Image alt='test' width={300} src={test} className='rounded-box' />
        </div>
        <div className='carousel-item'>
          <Image alt='test' width={300} src={test} className='rounded-box' />
        </div>
        <div className='carousel-item'>
          <Image alt='test' width={300} src={test} className='rounded-box' />
        </div>
      </div>
    </div>
  );
};

export default CarouselBleed;
