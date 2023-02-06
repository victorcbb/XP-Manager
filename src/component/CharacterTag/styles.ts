import styled from 'styled-components'

export const Container = styled.span`
  display: inline-block;
  width: max-content;
  height: 1.5rem;

  padding: 0.125rem 0.5rem;
  white-space: nowrap;

  border-radius: 8px;
  background: ${({ theme }) => theme['orange-600']};

  color: ${({ theme }) => theme['blue-50']};

  & + & {
    margin-left: 0.5rem;
  }
`
