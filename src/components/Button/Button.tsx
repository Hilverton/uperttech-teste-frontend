import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>;
}
