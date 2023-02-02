import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 2rem;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme['blue-600']};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`

export const ContentHeader = styled.div`
  width: min(75rem, 90%);

  display: flex;
  align-items: center;
  justify-content: space-between;

  overflow-y: hidden;

  a {
    display: flex;
    align-items: center;

    span:first-child {
      display: inline;
      width: 2.75rem;

      font-family: 'Permanent Marker', cursive;
      color: ${({ theme }) => theme['orange-600']};
      font-size: 2rem;
      overflow-y: hidden;
    }

    span:last-child {
      display: none;
      font-family: 'Fredoka One', cursive;
      color: ${({ theme }) => theme['blue-600']};
      font-size: 1.75rem;
    }
  }

  @media (min-width: 600px) {
    a {
      span:last-child {
        display: block;
      }
    }
  }
`

export const UserInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    strong {
      font-size: 1.125rem;
    }

    span {
      font-size: 0.875rem;
    }
  }
  img {
    border-radius: 999px;
  }
`
