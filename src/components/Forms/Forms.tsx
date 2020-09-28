import React, { FormEvent, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../Button';
import { LocalStorage } from '../../utils';

import { Form, Login, Title, Input, Error, Option, AccountBtn } from './styles';

type InputProps = {
  messageError: string;
  value: string;
}

export default function Forms() {
  const history = useHistory();
  const [signin, setSignin] = useState(true);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState<InputProps>({
    messageError: '',
    value: '',
  });
  const [email, setEmail] = useState<InputProps>({
    messageError: '',
    value: '',
  });
  const [password, setPassword] = useState<InputProps>({
    messageError: '',
    value: '',
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let nameValue, emailValue, passwordValue;

    if (!signin) {
      if (nameRef.current) {
        setName({
          messageError: nameRef.current.validationMessage,
          value: nameRef.current.value,
        });
        nameValue = nameRef.current.value;
      }
    }

    if (emailRef.current) {
      setEmail({
        messageError: emailRef.current.validationMessage,
        value: emailRef.current.value,
      });
      emailValue = emailRef.current.value;
    }

    if (passwordRef.current) {
      setPassword({
        messageError: passwordRef.current.validationMessage,
        value: passwordRef.current.value,
      });
      passwordValue = passwordRef.current.value;
    }

    if (signin) {
      const response = LocalStorage.signin(emailValue as string, passwordValue as string);
      if (response) {
        alert(response.message);
        if (response.check) history.push('/produtos');
      }
    }
    else {
      const response = LocalStorage.signup(nameValue as string, emailValue as string, passwordValue as string);
      if (response) {
        alert(response);
        setSignin(!signin);
      }
    }
  }

  function Name() {
    return (
      <>
        <Input ref={nameRef} placeholder='Nome Completo' type='text' required />
        {name.messageError.length > 0 && <Error>{name.messageError}</Error>}
      </>
    )
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Login>
        <Title>{signin ? 'Entrar' : 'Cadastrar'}</Title>
        {!signin && Name()}

        <Input ref={emailRef} placeholder='Email' type='email' required />
        {email.messageError.length > 0 && <Error>{email.messageError}</Error>}

        <Input ref={passwordRef} placeholder='Senha' type='password' required />
        {password.messageError.length > 0 && <Error>{password.messageError}</Error>}

        <Button type='submit'>{signin ? 'Entrar' : 'Cadastrar'}</Button>

        <Option>
          {signin ? 'Não tem conta?' : 'Já tem conta?'}
          <AccountBtn type='button' onClick={() => setSignin(!signin)}>
            Clique aqui
          </AccountBtn>
        </Option>
      </Login>
    </Form>
  );
}

