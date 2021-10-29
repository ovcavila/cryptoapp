import { FC, useState } from "react";
import Link from 'next/link';
import { Drawer, Hidden, IconButton } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';

import { Navigation } from "./Navigation";
import { HamburguerButton, Header, NavDrawer } from "./NavBar.styles";
import { NavLink } from "./Navigation.styles";

export const NavBar:FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Header>
        <Link href="/" passHref>
          <NavLink>CryptoApp</NavLink>
        </Link>
        <Hidden mdDown>
          <Navigation />
        </Hidden>
        <Hidden mdUp>
          <HamburguerButton onClick={() => setOpenDrawer(true)}>
            <MenuIcon />
          </HamburguerButton>
        </Hidden>
    </Header>
    <NavDrawer
      anchor="right"
      open={openDrawer}
      onOpen={() => setOpenDrawer(true)}
      onClose={() => setOpenDrawer(false)}
    >
      <Navigation />
    </NavDrawer>
  </>
  );
}