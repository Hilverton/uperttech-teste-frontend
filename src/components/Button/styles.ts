import styled from 'styled-components';

export const Container = styled.button`
  background-color: var(--primary);
  padding: 15px 28px;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: 600;
  outline: none;
  transition: all 0.5ms ease;

  :hover {
    opacity: 0.9;
  }
`;
