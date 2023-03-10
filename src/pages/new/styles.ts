import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Content = styled.form`
  width: min(65rem, 90%);
  max-height: calc(100vh - 7.5rem);
  overflow-y: auto;

  margin: 2rem auto;
  padding-bottom: 2.5rem;

  > h3 {
    margin: 1rem 0 0.5rem;
  }

  > div:last-child {
    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  @media (min-width: 1024px) {
    max-height: calc(100vh - 5.5rem - 6.75rem);
    h1 {
      font-size: 2.25rem;
      margin-bottom: 1rem;
    }

    > h3 {
      margin: 1.25rem 0 0.75rem;
    }
  }
`

export const TextArea = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25em;

  font-weight: 500;

  margin-top: 1rem;

  > textarea {
    display: block;

    width: 100%;
    height: 10rem;

    resize: none;
    padding: 0.25rem 0.5rem;
    background-color: ${({ theme }) => theme.white};
    border: 1px solid ${({ theme }) => theme['blue-600']};
    border-radius: 4px;
  }

  @media (min-width: 1024px) {
    textarea {
      padding: 0.375rem 0.5rem;
    }
  }
`

export const Characters = styled.div`
  width: 100%;

  max-height: 32vh;

  overflow-y: auto;
  overflow-y: overlay;

  &::-webkit-scrollbar {
    width: 0.6rem;
  }

  &::-webkit-scrollbar-thumb {
    border: 0.1rem solid transparent;
    background-clip: padding-box;
    background-color: ${({ theme }) => theme['blue-300']};
    border-radius: 8px;
  }

  @media (min-width: 1024px) {
    max-height: 30vh;

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5em;
  }
`
