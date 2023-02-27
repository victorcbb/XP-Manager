import styled from 'styled-components'

export const Container = styled.button`
  height: 2.125rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 0 1.25rem;
  background: ${({ theme }) => theme['blue-600']};
  border: none;
  border-radius: 999px;

  font-weight: 500;
  font-size: 1rem;
  color: ${({ theme }) => theme.white};

  transition: 0.2s all;

  &:hover:not(:disabled) {
    filter: brightness(0.8);
  }

  &:disabled {
    filter: grayscale(0.5);
    cursor: not-allowed;
  }

  @media (min-width: 1024px) {
    height: 2.625rem;
    font-size: 1.25rem;
  }
`
