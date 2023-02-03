import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled(Link)`
  width: 100%;

  padding: 1rem;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme['gray-300']};
  background: ${({ theme }) => theme['orange-50']};

  h2 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme['gray-800']};
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['gray-500']};

    margin: 1rem 0;
  }

  > span {
    color: ${({ theme }) => theme['gray-500']};
  }
`

export const Characters = styled.div``
