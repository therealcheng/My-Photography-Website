import { Navbar, Button, Link, Text, useTheme } from '@nextui-org/react';
import { Layout } from './Layout.jsx';

export default function NavbarNext() {
  const { isDark } = useTheme();

  return (
    <Layout>
      <Navbar isBordered={isDark} variant='sticky'>
        <Navbar.Brand>
          <Text b color='inherit' hideIn='xs'>
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn='xs' variant='underline'>
          <Navbar.Link href='#'>Features</Navbar.Link>
          <Navbar.Link isActive href='#'>
            Customers
          </Navbar.Link>
          <Navbar.Link href='#'>Pricing</Navbar.Link>
          <Navbar.Link href='#'>Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color='inherit' href='#'>
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href='#'>
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
}
