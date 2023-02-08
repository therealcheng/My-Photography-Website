import { Navbar, Button, Link, Text, useTheme } from '@nextui-org/react';
import { Layout } from './Layout.jsx';
import Image from 'next/image.js';
import logo from '../public/logoLight.png';

export default function NavbarNext() {
  const collapseItems = ['Concert', 'Events', 'Video', 'About'];
  const collapseItemLinks = (item) => {
    if (item === 'Concert') return `/`;
    else return `/${item.toLowerCase()}`;
  };
  return (
    <Layout>
      <Navbar variant='sticky'>
        <Navbar.Brand>
          <Navbar.Toggle aria-label='toggle navigation' className='lg:hidden' />
          <Image src={logo} width={50} height={50} />
          <Text b color='inherit' hideIn='xs'>
            CHENG LIM PHOTOGRAPHY
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn='xs' variant='underline'>
          <Navbar.Link isActive href='/'>
            Concert
          </Navbar.Link>
          <Navbar.Link href='/events'>Events</Navbar.Link>
          <Navbar.Link href='/video'>Video</Navbar.Link>
          <Navbar.Link href='/about'>About</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link
            color='inherit'
            href='https://www.instagram.com/chenglimphotography/'
            target='blank'
          >
            Instagram
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href='/contact'>
              Contact
            </Button>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={item}>
              <Link
                color='inherit'
                css={{
                  minWidth: '100%',
                }}
                href={collapseItemLinks(item)}
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}
