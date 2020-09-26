import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../components';

import { Container, Main, Content, Title, Info } from './styles';

export default function Home() {
  return (
    <Container>
      <Main>

          <Content>
            <Title>Soluções inteligentes para modernizar sua empresa.</Title>
            <Info>Expertise em gerência de projetos e em desenvolvimento de software para produzir soluções que vão direto ao ponto.</Info>
            <Link to='/conta'>
              <Button>Solicite um orçamento</Button>
            </Link>
          </Content>

      </Main>
    </Container>
  );
}
