import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 0.5rem 1.5rem;
  background: ${({ theme }) => theme['blue-600']};
  border: none;
  border-radius: 999px;

  font-weight: 500;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.white};

  transition: 0.2s all;

  &:hover {
    filter: brightness(0.8);
  }

  &:disabled:not(:hover) {
    filter: grayscale(0.5);
    cursor: not-allowed;
  }
`
