import Head from 'next/head';
import Image from 'next/image';
import { Button, Text } from '@nextui-org/react';
import NavBar from '@/components/NavBar';
import test1 from '../public/1.png';
import test2 from '../public/2.png';

const images = [
  {
    src: { test1 },
    alt: 'Image 1',
  },
  {
    src: { test2 },
    alt: 'Image 2',
  },
];

export default function Home() {
  return (
    <div>
      <NavBar />
    </div>
  );
}
