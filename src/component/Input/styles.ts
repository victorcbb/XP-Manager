import styled from 'styled-components'

export const Container = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25em;

  font-weight: 500;

  input {
    padding: 0.25rem 0.5rem;
    background-color: ${({ theme }) => theme.white};
    border: 1px solid ${({ theme }) => theme['blue-600']};
    border-radius: 4px;
  }

  @media (min-width: 1024px) {
    input {
      padding: 0.375rem 0.5rem;
    }
  }
`
