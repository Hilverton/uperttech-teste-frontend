import React, { useEffect } from 'react';

import { Card } from '../../components';

import { Container, Main, Title, Content } from './styles';

import { services } from '../../data';

export default function Products() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <Container>
      <Main>
        <Title>Serviços</Title>
        <Content>
          {services.map(data => <Card key={data.id} data={data} />)}
        </Content>
      </Main>
    </Container>
  );
}