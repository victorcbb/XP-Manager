import styled from 'styled-components'

interface IProps {
  isNew: boolean
}

export const Container = styled.div<IProps>`
  display: flex;

  & + & {
    margin-top: 0.5rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    background-color: ${({ theme }) => theme['gray-300']};
    border: 1px solid ${({ theme }) => theme['gray-800']};
    border-right: none;
    border-radius: 4px 0 0 4px;
    padding: 0.5rem 0.1rem 0.5rem 0.5rem;

    > label {
      width: 100%;

      display: flex;
      gap: 0.25em;
      align-items: center;
      justify-content: flex-end;

      font-weight: 500;

      input {
        max-width: min(184px, 193px);

        padding: 0.25rem 0.5rem;
        background-color: ${({ theme, isNew }) =>
          isNew ? theme.white : 'transparent'};
        border: none;
        border-radius: 4px;

        font-weight: ${({ isNew }) => (isNew ? '400' : 'bold')};
        font-family: 'Poppins', sans-serif;
        font-size: 0.875rem;
      }
    }
  }

  button {
    width: min(100%, 5rem);

    border: 1px solid
      ${({ theme, isNew }) => (isNew ? theme['blue-600'] : theme['red-600'])};
    border-left: none;
    border-radius: 0 8px 8px 0;
    background-color: ${({ theme }) => theme['gray-200']};

    color: ${({ theme, isNew }) =>
      isNew ? theme['blue-600'] : theme['red-600']};

    cursor: pointer;
    transition: 0.2s all;

    svg {
      width: 1.375rem;
      height: 1.375rem;
    }

    &:hover:not(:disabled) {
      filter: brightness(0.9);
    }

    &:disabled {
      filter: grayscale(0.9);
      cursor: not-allowed;
    }
  }

  @media (min-width: 1024px) {
    & + & {
      margin-top: 0;
    }

    button {
      width: 4.5rem;
    }
  }
`
