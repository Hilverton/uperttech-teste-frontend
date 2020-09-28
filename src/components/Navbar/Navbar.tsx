import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { Container, Logo, Menu, Link, Li, LogoutBtn, Mobile } from './styles';

import Brand from '../../assets/brand.png';

import Button from '../Button';
import { LocalStorage } from '../../utils';

export default function Navbar() {
  const history = useHistory();
  const location = useLocation();
  const [logged, setLogged] = useState<LoggedResponse>({ logged: false });
  const [scrolled, setScrolled] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    function check() {
      const response = LocalStorage.logged();
      setLogged(response);
    }

    check();
    setClicked(false);
  }, [location]);

  function changeBackground(): void {
    if (window.scrollY >= 45) setScrolled(true);
    else setScrolled(false);
  }

  window.addEventListener('scroll', changeBackground);

  function handleClick() {
    LocalStorage.logout();
    setLogged({ logged: false });
    history.push('/home');
  }

  return (
    <Container className={`${(scrolled || clicked) && 'is-active'}`}>
      <NavLink to='/'>
        <Logo src={Brand} />
      </NavLink>
      <Mobile onClick={() => setClicked(!clicked)}>
        {!clicked ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>}
      </Mobile>
      <Menu open={!clicked}>
        <Link to='/' exact activeClassName='is-active'>Quem somos</Link>
        <Link to='/serviços' activeClassName='is-active'>Serviços</Link>
        {logged.logged && <Li>{logged.name},<LogoutBtn onClick={handleClick}>Sair</LogoutBtn></Li>}

        <NavLink to='/produtos'>
          <Button>Soluções</Button>
        </NavLink>
      </Menu>
    </Container>
  );
}
