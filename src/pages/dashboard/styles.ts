import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Content = styled.main`
  width: min(75rem, 90%);
  max-height: calc(100vh - 4.5rem - 3rem);

  margin: 0 auto;
  padding: 1rem 1rem 1rem;

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
`

export const CampaignList = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1em;

  margin-top: 1.5rem;
`