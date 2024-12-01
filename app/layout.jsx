// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
"use client"

import { AppShell, Burger, Button, ColorSchemeScript, Group, MantineProvider, Skeleton,Text } from '@mantine/core';
import '@mantine/core/styles.css';
import './globals.css'
import { useDisclosure } from '@mantine/hooks';
import { NavbarSearch } from './Components/Navbar'; 
import { useEffect, useState } from 'react';
// export const metadata = {
//   title: 'My Mantine app',
//   description: 'I have followed setup instructions carefully',
// };

export default function RootLayout({
  children,
}) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(false);
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    localStorage.getItem("roll") && setUser(localStorage.getItem("roll"));
  });


  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
        <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header style={{backdropFilter: 'blur(20px)'}}>
        <Group h="100%" px="md" style={{position: "relative"}}>
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
          <Text size="xl" fw={700}>Student Search</Text>
          {user ? (
            <Button variant='light' style={{position:"absolute",right:"10px"}} component='a' href='/Account/edit'>
              Welcome {user}
            </Button>
          ) : (
            <Button variant='light' component='a' href='/login' style={{position:"absolute",right:"10px"}}>
              Login
            </Button>
          )}
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <NavbarSearch/>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}