import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Logo, Menu, Link } from './styles';

import Brand from '../../assets/brand.png';

import Button from '../Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  function changeBackground(): void {
    console.log(window.scrollY);
    if (window.scrollY >= 45) setScrolled(true);
    else setScrolled(false);
  }

  window.addEventListener('scroll', changeBackground)
    console.log(scrolled);

  return (
    <Container className={`${scrolled && 'is-active'}`}>
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
