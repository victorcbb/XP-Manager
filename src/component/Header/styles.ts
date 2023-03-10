import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 4.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme['blue-600']};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  @media (min-width: 1024px) {
    height: 5.5rem;
  }
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
      height: 2.5rem;
      align-items: flex-end;

      span:first-child {
        width: 3.125rem;
        font-size: 2.375rem;
        line-height: 1;
      }

      span:last-child {
        display: block;
        font-size: 1.875rem;
        line-height: 1;
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
      font-family: 'Poppins', sans-serif;
      line-height: 1;
      color: ${({ theme }) => theme['gray-800']};
    }

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme['gray-500']};
    }
  }
  img {
    border: 2px solid ${({ theme }) => theme['orange-600']};
    border-radius: 999px;
  }

  @media (min-width: 1024px) {
    gap: 0.75rem;

    div {
      strong {
        font-size: 1.25rem;
      }

      span {
        font-size: 1rem;
      }
    }
  }
`
