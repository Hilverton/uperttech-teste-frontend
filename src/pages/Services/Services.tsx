import React from 'react';

import { Card } from '../../components';

import { Container, Main, Title, Content } from './styles';

import { services } from '../../data';

export default function Products() {
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