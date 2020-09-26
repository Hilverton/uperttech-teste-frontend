import React from 'react';

import { Container, Image, Body, Title, Description } from './styles';

type Props = {
  data: {
    id: string;
    title: string;
    url: string;
    description: string;
  }
}

export default function Card({ data }: Props) {
  return (
    <Container>
      <Image src={data.url} />
      <Body>
        <Title>{data.title}</Title>
        <Description>{data.description}</Description>
      </Body>
    </Container>
  );
}