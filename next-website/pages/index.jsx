import Head from 'next/head';
import Image from 'next/image';
import { Button, Text } from '@nextui-org/react';
import NavBar from '@/components/NavBar';
import Content from '@/components/Content';
import GalleryRecent from '@/components/GalleryRecent';

const images = [
  {
    src: '../public/1.png',
    alt: 'Image 1',
  },
  {
    src: '../public/1.png',
    alt: 'Image 2',
  },
];

export default function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <GalleryRecent images={images} />
      </div>
    </div>
  );
}
