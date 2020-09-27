import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import styled from 'styled-components';

export const Form = styled.form`
  width: 50%;
  padding: 30px 0;
  border: 1px solid var(--border);
  -webkit-box-shadow: var(--card-shadow);
  -moz-box-shadow: var(--card-shadow);
  box-shadow: var(--card-shadow);
  background-color: var(--white);

  @media(max-width: 500px) {
    width: 90%;
  }
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  margin: 0 auto; 
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: var(--title);

  @media(max-width: 375px) {
    font-size: 1.5rem;
  }
`;

type InputElement = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input = styled.input<InputElement>`
  height: 40px; 
  font-size: 1rem;
  margin-bottom: 5px;
  padding: 0 10px;

  :focus {
    border: 1px solid red;
  }
`;

export const Error = styled.span`
  font-size: 0.8rem;
  color: var(--error);
  margin-bottom: 5px;
`;

export const Option = styled.span`
  margin: 5px 0;
  font-size: 0.8rem;
`;

export const AccountBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 0.8rem;
  font-weight: bold;
  margin-left: 3px;
  outline: none;
  cursor: pointer;
`;