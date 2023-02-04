import Head from 'next/head';
import Image from 'next/image';
import { Button, Text } from '@nextui-org/react';
import NavBar from '@/components/NavBar';
import Carousel from '@/components/ImageCarousel';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Carousel />
    </div>
  );
}
