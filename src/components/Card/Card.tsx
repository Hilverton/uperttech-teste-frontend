import React, { useState, useEffect } from 'react';

import Button from '../Button';
import { LocalStorage } from '../../utils';

import { Container, Image, Body, Title, Description, Footer, Warning } from './styles';

type Props = {
  data: {
    id: string;
    title: string;
    url: string;
    description: string;
  }
}

export default function Card({ data }: Props) {
  const [logged, setLogged] = useState<LoggedResponse>({ logged: false });

  useEffect(() => {
    function check() {
      const response = LocalStorage.logged();
      setLogged(response);
    }

    check();
  }, []);

  function handleClick() {
    if (logged.logged) {
      alert(`Parabéns ${logged.name}, você acabou de fazer uma aquisição!`);
    }
  }

  return (
    <Container>
      <Image src={data.url} />
      <Body>
        <Title>{data.title}</Title>
        <Description>{data.description}</Description>
      </Body>
      <Footer>
        <Button onClick={handleClick}>Comprar</Button>
        {!logged.logged && <Warning>Precisa estar logado para efetuar a compra.</Warning>}
      </Footer>
    </Container>
  );
}