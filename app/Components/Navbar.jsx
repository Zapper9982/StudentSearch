import {
    TextInput,
    Code,
    UnstyledButton,
    Badge,
    Text,
    Group,
    ActionIcon,
    Tooltip,
    rem,
  } from '@mantine/core';
  import { IconBulb, IconUser, IconCheckbox, IconSearch, IconPlus,IconHomeFilled,IconPencil } from '@tabler/icons-react';
//   import { UserButton } from '../UserButton/UserButton';
  import classes from './Navbar.module.css';
  import Dark from "./Dark";

  
  
  const links = [
    { icon: IconHomeFilled, label: 'Home Page' , links: '/'},
    { icon: IconSearch, label: 'Search Students', links: '/Search' },
    // { icon: IconUser, label: 'Profile', links: `/Profile/${}` },
    { icon: IconPencil, label: ' Edit Profile', links: '/Account/edit' },
    
  ];
  

  
  export function NavbarSearch() {
   
    const mainLinks = links.map((link) => (
      <UnstyledButton key={link.label} className={classes.mainLink}>
        <div className={classes.mainLinkInner}>
          <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
        <a href={link.links} style={{textDecoration:'none', color:'inherit'}}><span><h4>{link.label}</h4></span></a> 
        </div>
        {link.notifications && (
          <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
            {link.notifications}
          </Badge>
        )}
      </UnstyledButton>
    ));
  

    return (
      <nav className={classes.navbar}>
        <div className={classes.section}>
          {/* <UserButton /> */}
        </div>
  
        <TextInput
          placeholder="Search"
          size="xs"
          leftSection={<IconSearch style={{ width: rem(12), height: rem(12) }} stroke={1.5} />}
          rightSectionWidth={70}
          rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
          styles={{ section: { pointerEvents: 'none' } }}
          mb="sm"
        />
  
        <div className={classes.section}>
          <div className={classes.mainLinks}>{mainLinks}</div>
        </div>
  
        
        <Dark/>
      </nav>
    );
  }