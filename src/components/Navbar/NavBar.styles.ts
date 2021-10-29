import { Drawer, IconButton, SwipeableDrawer } from '@mui/material';
import styled from 'styled-components';

export const Header = styled.header`
  left: 0;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
`;

export const HamburguerButton = styled(IconButton)`
  color: white;
`;

export const NavDrawer = styled(SwipeableDrawer)`
  .MuiDrawer-paper {
    width: 250px;
    background-color: black;
  }
`;
