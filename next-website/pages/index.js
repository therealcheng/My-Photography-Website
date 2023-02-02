import Head from 'next/head';
import Image from 'next/image';
import { Button, Text } from '@nextui-org/react';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Button>Click me</Button>
      <Text>NextUI colors</Text>
    </div>
  );
}
