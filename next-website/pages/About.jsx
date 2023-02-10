import Modal from '@/components/Modal';
import CarouselBleed from '@/components/CarouselBleed';
import React from 'react';
import { Text, Button } from '@nextui-org/react';
import NavbarNext from '@/components/NavbarNext';
import Image from 'next/image';
import aboutImage1 from '../public/concertImages/img-8.jpg';
import Footer from '@/components/Footer';

const About = () => {
  const paragraph1 = `Welcome to my photography website! I have always had a passion for
        capturing memories through the lens of a camera, starting from my early
        childhood when I would snap photos of anything and everything that
        caught my eye. My love for photography really took off when I was given
        a Canon DSLR (60D) and I started to take my hobby more seriously. During
        my time at university, I had the opportunity to work for friends and
        university societies, which gave me the chance to hone my skills and
        gain valuable experience. Over the last year, my main focus has been on
        event and concert photography. This work has been incredibly rewarding
        and has pushed me creatively, allowing me to develop my own unique style
        and approach to photography. I'm excited to share my work with you and
        hope that you enjoy browsing through my portfolio.`;
  const paragraph2 = `If you like what you see and are in need of a photographer, I would love
        the opportunity to work with you. Please feel free to get in touch with
        me via the contact form on my website, or through the contact
        information provided. I look forward to the possibility of capturing
        memories for you and creating beautiful and timeless images that you
        will cherish for years to come.`;
  return (
    <>
      <NavbarNext />
      <Text
        h1
        size={60}
        css={{
          textGradient: '45deg, $blue600 -20%, $pink100 50%',
        }}
        weight='bold'
      >
        About
      </Text>
      <Image src={aboutImage1} width={600} height={80} />

      <Text blockquote className='pt-12'>
        {paragraph1}
      </Text>
      <Text blockquote>{paragraph2}</Text>
      <Footer />
    </>
  );
};

export default About;
