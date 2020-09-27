import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Main = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto; 

  @media(max-width: 760px) {
    width: 100%;
  }
`;