import React, { useEffect } from 'react';

import { Card } from '../../components';

import { Container, Main, Title, Content } from './styles';

import { products } from '../../data';

export default function Products() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <Container>
      <Main>
        <Title>Produtos</Title>
        <Content>
          {products.map(data => <Card key={data.id} data={data} />)}
        </Content>
      </Main>
    </Container>
  );
}