import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Container, Logo, Menu, Link, Mobile } from './styles';

import Brand from '../../assets/brand.png';

import Button from '../Button';

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setClicked(false);
  }, [location]);

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
      <Mobile onClick={() => setClicked(!clicked)}>
        {!clicked ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>}
      </Mobile>
      <Menu open={!clicked}>
        <Link to='/' exact activeClassName='is-active'>Quem somos</Link>
        <Link to='/serviços' activeClassName='is-active'>Serviços</Link>
        <NavLink to='/produtos'>
          <Button>Soluções</Button>
        </NavLink>
      </Menu>
    </Container>
  );
}
