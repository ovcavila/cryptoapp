import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-direction: row;
  }
`;

export const NavLink = styled.a`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 16px 8px;

  ${({ theme }) => theme.breakpoints.up('md')} {
    padding: 0 8px;
  }

  > svg {
    margin-right: 10px;
  }
`;