import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Content = styled.main`
  width: min(65rem, 95%);
  height: calc(100vh - 7rem);

  overflow-y: auto;
  overflow-y: overlay;

  margin: 2rem auto 0;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:nth-child(2) {
      margin-top: 1rem;
    }
  }

  > p {
    margin: 1rem 0;
  }

  @media (min-width: 1024px) {
    height: calc(100vh - 8rem);
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 0.6rem;
    }

    &::-webkit-scrollbar-thumb {
      border: 0.1rem solid transparent;
      background-clip: padding-box;
      background-color: ${({ theme }) => theme['blue-300']};
      border-radius: 8px;
    }

    h1 {
      font-size: 2.25rem;
    }

    h2 {
      font-size: 1.75rem;
    }

    > div {
      padding-inline: 0.5rem;
    }
  }
`

export const CharactersList = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center !important;
    flex-wrap: wrap;
    margin: 0.5rem 0;
  }
`

export const Character = styled.form`
  > div {
    width: 21rem;

    display: grid;
    grid-template-columns: 8rem 1fr;
    align-items: center;
    gap: 0.5rem;
  }
`

export const Divisor = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme['gray-300']};
`
