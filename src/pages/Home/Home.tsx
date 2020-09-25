import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Button } from '../../components';

import { Container, Main, Section, Content, Title, Info } from './styles';

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Main>
        <Section>
          <Content>
            <Title>Soluções inteligentes para modernizar sua empresa.</Title>
            <Info>Expertise em gerência de projetos e em desenvolvimento de software para produzir soluções que vão direto ao ponto.</Info>
            <Link to='/account'>
              <Button>Solicite um orçamento</Button>
            </Link>
          </Content>
        </Section>
      </Main>
    </Container>
  );
}
