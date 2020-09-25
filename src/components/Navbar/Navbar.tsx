import React from 'react';
import { Link as NavLink } from 'react-router-dom';
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
        <Link>Quem somos</Link>
        <Link>Serviços</Link>
        <NavLink to='/teste'>
          <Button>Soluções</Button>
        </NavLink>
      </Menu>
    </Container>
  );
}
