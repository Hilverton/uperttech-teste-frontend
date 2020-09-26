import styled from 'styled-components';

export const Container = styled.div`
  width: 270px;
  margin-bottom: 25px;
  border: 1px solid var(--border);
  -webkit-box-shadow: var(--card-shadow);
  -moz-box-shadow: var(--card-shadow);
  box-shadow: var(--card-shadow);

  @media(max-width: 1000px) {
    width: 46%;
  }

  @media(max-width: 600px) {
    width: 48%;
  }

  @media(max-width: 400px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Body = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  margin: 0 0 10px 0;
  padding: 0;
  color: var(--title);
  font-weight: bold;
  font-size: 1.1rem;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;