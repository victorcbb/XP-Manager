import * as AlertDialog from '@radix-ui/react-alert-dialog'
import styled from 'styled-components'

export const Root = styled(AlertDialog.Root)``

export const Trigger = styled(AlertDialog.Trigger)`
  display: block;
  margin: 1.5rem auto 1rem;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme['red-600']};

  cursor: pointer;
`

export const Portal = styled(AlertDialog.Portal)``

export const Overlay = styled(AlertDialog.Overlay)`
  background-color: ${({ theme }) => theme['gray-900']};
  opacity: 0.2;
  position: fixed;
  inset: 0;
`

export const Content = styled(AlertDialog.Content)`
  background-color: ${({ theme }) => theme['gray-50']};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme['orange-500']};
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 31.25rem;
  max-height: 85vh;
  padding: 1.5rem;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: end;

    height: 2.5rem;
  }
`

export const Title = styled(AlertDialog.Title)`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${({ theme }) => theme['gray-700']};
`

export const Description = styled(AlertDialog.Description)`
  font-family: 'Roboto', sans-serif;
  margin: 1rem 0 1.25rem;
`

export const Cancel = styled(AlertDialog.Cancel)`
  border: none;

  > button {
    height: 2.5rem;

    background: ${({ theme }) => theme['gray-100']};
    border: 1px solid ${({ theme }) => theme['gray-500']};
    border-radius: 8px;
    padding: 0 0.5rem;
  }
`

export const Action = styled(AlertDialog.Action)`
  border: none;

  > button {
    height: 2.5rem;

    background: ${({ theme }) => theme['red-300']};
    border: none;
    border-radius: 8px;
    padding: 0 0.5rem;
  }
`
