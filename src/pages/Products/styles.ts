import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  padding-top: 100px;
`;

export const Main = styled.div`
  width: 85%;
  height: 100%;
  margin: 0 auto;

  @media(min-width: 400px) and (max-width: 760px) {
    width: 92%;
  }
`;

export const Title = styled.h1`
  text-align: left;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: var(--title);

  @media(max-width: 375px) {
    font-size: 2.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media(min-width: 1000px) and (max-width: 1300px) {
    justify-content:  space-evenly;
  }

  @media(max-width: 425px) {
    justify-content: space-around;
  }
`;