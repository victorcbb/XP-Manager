import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  padding: 1.5rem 0.5rem;

  & + & {
    border-top: 1px solid ${({ theme }) => theme['orange-200']};
  }

  > form {
    width: 21rem;

    margin-top: 1rem;

    display: grid;
    grid-template-columns: 8rem 1fr;
    align-items: center;
    gap: 0.5rem;

    button {
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      border: 1px solid ${({ theme }) => theme['orange-900']};
      border-radius: 4px;
      background: ${({ theme }) => theme['gray-100']};
      transition: 0.2s all;

      &:hover:not(:disabled) {
        filter: brightness(0.9);
      }

      &:disabled {
        filter: grayscale(0.5);
        cursor: not-allowed;
      }
    }
  }

  @media (min-width: 1200px) {
    padding: 1.5rem 1.75rem;
    margin-top: 1.5rem;

    & + & {
      border-top: none;
    }

    &:nth-child(even) {
      border-left: 1px solid ${({ theme }) => theme['orange-200']};
    }
  }
`

export const InfosCharacter = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    margin-bottom: 0.25rem;
    font-size: 0.875rem;
  }

  strong {
    span {
      font-family: 'Permanent Marker', cursive;
      font-size: 1.125rem;
      color: ${({ theme }) => theme['orange-600']};
      letter-spacing: 2px;
    }
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0.5rem 0;

    > button {
      -webkit-appearance: none;
      height: 100% !important;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.125rem;

      padding: 0 0.5rem;

      border: 1px solid ${({ theme }) => theme['orange-900']};
      border-radius: 4px;
      background: ${({ theme }) => theme['gray-100']};
    }
  }

  @media (min-width: 1200px) {
    > h3 {
      font-size: 1.25rem;
    }
  }
`
