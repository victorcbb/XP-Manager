import styled from 'styled-components'

export const Container = styled.span`
  padding: 0.125rem 0.5rem;

  border-radius: 8px;
  background: ${({ theme }) => theme['orange-600']};

  color: ${({ theme }) => theme['blue-50']};
`
