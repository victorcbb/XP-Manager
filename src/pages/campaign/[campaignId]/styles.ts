import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Content = styled.main`
  width: min(75rem, 95%);
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
`

export const CharactersList = styled.div`
  display: flex;
  flex-direction: column;
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
