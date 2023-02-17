import styled from 'styled-components'

export const Contaienr = styled.div`
  width: 100%;

  > div {
    width: min(75rem, 95%);
    margin: 1.25rem auto 0;
  }
`

export const Content = styled.main`
  grid-area: main;
  width: min(75rem, 95%);
  height: fit-content;
  margin: 0 auto;
  overflow-x: auto;
`

export const TableWrapper = styled.div`
  margin-top: 1rem;
  width: max-content;
  max-width: 30rem;
  border: 1px solid ${({ theme }) => theme['gray-500']};
  border-radius: 8px 8px 0 0;
  display: flex;
  flex-wrap: wrap;

  table {
    width: 30rem;
    border-collapse: collapse;

    thead {
      tr {
        height: 2.25rem;

        th {
          text-align: start;
          padding-inline: 0.5rem;
        }
      }
    }

    tbody {
      tr {
        height: 3rem;

        &:nth-child(odd) {
          background: ${({ theme }) => theme['gray-200']};
        }

        td {
          text-align: start;
          padding-inline: 0.5rem;

          font-size: 1.125rem;
          font-family: 'Permanent Marker', cursive;
          color: ${({ theme }) => theme['orange-600']};
          letter-spacing: 1px;

          &:first-child {
            height: 3rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            margin: auto 0;

            strong {
              font-size: 1.125rem;
              font-family: 'Fredoka One', cursive;
              color: ${({ theme }) => theme['blue-600']};
              letter-spacing: 1px;
            }

            span {
              font-size: 0.875rem;
              line-height: 1;
              font-family: 'Poppins', sans-serif;
              color: ${({ theme }) => theme['gray-700']};
              letter-spacing: 0;
            }
          }

          &:nth-child(2),
          &:nth-child(3) {
            width: 8rem;
          }

          &:last-child {
            text-align: center;
          }
        }
      }
    }
  }
`
