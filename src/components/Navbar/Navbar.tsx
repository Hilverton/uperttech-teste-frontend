import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Logo, Menu, Link } from './styles';

import Brand from '../../assets/brand.png';

import Button from '../Button';

export default function Navbar() {
  return (
    <Container>
      <NavLink to='/'>
        <Logo src={Brand} />
      </NavLink>
      <Menu>
        <Link to='/' exact activeClassName='is-active'>Quem somos</Link>
        <Link to='/serviços' activeClassName='is-active'>Serviços</Link>
        <NavLink to='/produtos'>
          <Button>Soluções</Button>
        </NavLink>
      </Menu>
    </Container>
  );
}
