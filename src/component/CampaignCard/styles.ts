import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled(Link)`
  width: 100%;
  height: 11rem;

  padding: 1rem 0.5rem;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme['gray-300']};
  background: ${({ theme }) => theme['orange-50']};

  box-shadow: rgba(10, 37, 64, 0.35) 0px -1px 6px 0px inset;

  h2 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme['gray-800']};
  }

  p {
    height: 3rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme['gray-500']};

    margin: 0.75rem 0;
    overflow-y: hidden;
  }

  > span {
    color: ${({ theme }) => theme['gray-800']};
  }

  @media (min-width: 1024px) {
    height: 12.5rem;
    padding: 1.25rem 1rem;

    h2 {
      font-size: 1.5rem;
    }

    p {
      height: 3.5rem;
      font-size: 1rem;
    }
  }
`

export const Characters = styled.div`
  width: 100%;
  margin-top: 0.25rem;

  white-space: nowrap;

  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 0.35rem;
  }

  &::-webkit-scrollbar-thumb {
    border: 0.1rem solid transparent;
    background-clip: padding-box;
    background-color: ${({ theme }) => theme['blue-300']};
    border-radius: 8px;
  }
`
