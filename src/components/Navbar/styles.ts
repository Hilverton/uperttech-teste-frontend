import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  padding: 0 50px;
  transition: all 0.5ms ease;

  &.is-active {
    background-color: var(--white);
    -webkit-box-shadow: var(--navbar-shadow);
    -moz-box-shadow: var(--navbar-shadow);
    box-shadow: var(--navbar-shadow);
  }
`;

export const Logo = styled.img`
  width: 224px;
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Link = styled(NavLink)`
  margin-right: 30px;
  color: var(--black);
  text-decoration: none;
  cursor: pointer;

  &.is-active {
    font-weight: bold;
  }
`;

