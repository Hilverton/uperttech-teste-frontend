import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Forms } from '../../components';
import { LocalStorage } from '../../utils';

import { Container, Main } from './styles';

export default function Account() {
  const history = useHistory();
  useEffect(() => {
    function check() {
      const response = LocalStorage.logged();
      if (response.logged) history.replace('/produtos');
    }

    check();
  }, [history]);

  return (
    <Container>
      <Main>
        <Forms />
      </Main>
    </Container>
  );
}
