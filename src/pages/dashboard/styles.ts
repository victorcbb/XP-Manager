import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Content = styled.main`
  width: min(65rem, 90%);
  max-height: calc(100vh - 4.5rem - 3rem);

  margin: 2rem auto 0;
  padding: 1rem;

  background: ${({ theme }) => theme['gray-100']};
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme['orange-500']};

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

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    h1 {
    }
  }

  @media (min-width: 1200px) {
    margin-top: 3.25rem;
    padding: 1.25rem 1.75rem;

    max-height: calc(100vh - 5.5rem - 6.75rem);

    > div {
      margin-bottom: 1.25rem;

      h1 {
        font-size: 2.25rem;
      }
    }
  }
`

export const CampaignList = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1em;

  margin-top: 1.5rem;

  @media (min-width: 1200px) {
    gap: 1.25rem;
    margin-top: 1.75rem;
  }
`
