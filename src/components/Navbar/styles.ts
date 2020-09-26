import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Button from '../Button';

type Props = {
  open: boolean;
} 

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

  @media(max-width: 760px) {
    padding: 25px 0;
    display: flex;
    height: auto;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Logo = styled.img`
  width: 224px;

  @media(max-width: 760px) {
    width: 170px;
    margin-left: 20px;
  }
`;

export const Menu = styled.ul<Props>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 760px) {
    flex-direction: column;
    width: 100%;
    position: absolute;
    justify-content: space-around;
    height: 200px;
    align-items: center;
    margin: 168px 0 0 0;
    top: -150%;
    transform: ${({ open }) => open ? 'translateY(-150%)' : 'translateY(0)'};
    transition: transform 0.5s ease;
    background-color: var(--white);
    -webkit-box-shadow: var(--navbar-shadow);
    -moz-box-shadow: var(--navbar-shadow);
    box-shadow: var(--navbar-shadow);
  }
`;

export const Link = styled(NavLink)`
  margin-right: 30px;
  color: var(--black);
  text-decoration: none;
  cursor: pointer;

  &.is-active {
    font-weight: bold;
  }

  @media(max-width: 760px) {
    margin-right: 0;
  }
`;

export const Mobile = styled(Button)`
  display: none;

  @media(max-width: 760px) {
    display: block;
    position: absolute;
    top: 1;
    right: 0;
    margin-right: 20px;
  }
`;


