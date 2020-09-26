import React from 'react';

import { Card } from '../../components';

import { Container, Main, Title, Content } from './styles';

import { products } from '../../data';

export default function Products() {
  return (
    <Container>
      <Main>
        <Title>Produtos</Title>
        <Content>
          {products.map(data => <Card data={data} />)}
        </Content>
      </Main>
    </Container>
  );
}