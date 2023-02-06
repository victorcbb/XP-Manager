import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Content = styled.main`
  width: min(75rem, 90%);

  margin: 0 auto;
  padding: 1rem 1rem 3rem;

  background: ${({ theme }) => theme['gray-100']};
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme['orange-500']};

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
