import styled from 'styled-components';

export const Container = styled.div`
  width: 270px;
  max-height: 700px;
  margin-bottom: 25px;
  border: 1px solid var(--border);
  -webkit-box-shadow: var(--card-shadow);
  -moz-box-shadow: var(--card-shadow);
  box-shadow: var(--card-shadow);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  /* height: 150px; */
  padding: 20px;
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

export const Footer = styled.footer`
  padding: 0 20px 10px;
  display: flex;
  flex-direction: column;
`;

export const Warning = styled.span`
  font-size: 0.7rem;
  margin-top: 5px;
`;