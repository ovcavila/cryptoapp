import { FC } from "react";
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import ArticleIcon from '@mui/icons-material/Article';

import {Nav, NavLink} from './Navigation.styles';

export const Navigation: FC =() => (
  <Nav>
    <Link href="/" passHref>
      <NavLink>
        <HomeIcon />
        Home
      </NavLink>
    </Link>
    <Link href="/" passHref>
      <NavLink>
        <AutoGraphIcon />
        Cryptocurrencies
      </NavLink>
    </Link>
    <Link href="/" passHref>
      <NavLink>
        <PriceChangeIcon />
        Exchanges
      </NavLink>
    </Link>
    <Link href="/" passHref>
      <NavLink>
        <ArticleIcon />
        News
      </NavLink>
    </Link>
  </Nav>
);