import { Navbar, Button, Link, Text } from '@nextui-org/react';
import { FaGithub, Fa500Px, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function NavBar() {
  const collapseItems = [
    'Features',
    'Customers',
    'Pricing',
    'Company',
    'Legal',
    'Team',
    'Help & Feedback',
    'Login',
    'Sign Up',
  ];
  return (
    <Navbar shouldHideOnScroll isCompact isBordered variant='floating'>
      <Navbar.Brand>
        <Navbar.Toggle aria-label='toggle navigation' />
        <Text b color='inherit' hideIn='xs'>
          Cheng Lim Photography
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        hideIn='xs'
        variant='highlight-rounded'
      >
        <Navbar.Link isActive href='#'>
          Home
        </Navbar.Link>
        <Navbar.Link href='#'>Concert</Navbar.Link>
        <Navbar.Link href='#'>Event</Navbar.Link>
        <Navbar.Link href='#'>Family</Navbar.Link>
        <Navbar.Link href='#'>Video</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Link>
          <Fa500Px />
        </Link>
        <Link>
          <FaInstagram />
        </Link>
        <Link>
          <FaTwitter />
        </Link>
      </Navbar.Content>

      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color='inherit'
              css={{
                minWidth: '100%',
              }}
              href='#'
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
