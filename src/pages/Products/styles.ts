import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  padding-top: 100px;
`;

export const Main = styled.div`
  width: 85%;
  height: 100%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: left;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: var(--title);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;