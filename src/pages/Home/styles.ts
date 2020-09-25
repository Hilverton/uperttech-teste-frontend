import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: url(/art3.svg);
  background-size: cover;
`;

export const Main = styled.main`
  height: 100%;
  display: flex;
`;

export const Section = styled.section`
  height: 100%;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 80px;
  padding-top: 100px;
`;

export const Title = styled.h1`
  text-align: left;
  font-size: 3.3rem;
  font-weight: bold;
  margin-bottom: 30px;
  max-width: 600px;
  color: var(--title);
`;

export const Info = styled.p`
  text-align: left;
  font-size: 1rem;
  margin-bottom: 70px;
  max-width: 350px;
`;
