import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Root = styled(Dialog.Root)`
  position: relative;
`

export const Trigger = styled(Dialog.Trigger)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  margin-right: 1rem;
  padding: 0.5rem;

  background: none;
  border: none;
  border-radius: 999px;

  font-weight: 500;
  font-size: 1.125rem;
  color: ${({ theme }) => theme['gray-700']};

  cursor: pointer;

  transition: 0.2s all;

  &:hover {
    background: ${({ theme }) => theme['gray-300']};
  }
`

export const Portal = styled(Dialog.Portal)``

export const Overlay = styled(Dialog.Overlay)`
  background-color: ${({ theme }) => theme['gray-900']};
  opacity: 0.2;
  position: fixed;
  inset: 0;
`

export const Content = styled(Dialog.Content)`
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
  padding: 1.5rem 0.75rem;
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

  > form {
    margin-top: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    textarea {
      display: block;

      width: 100%;
      height: 10rem;

      resize: none;
      padding: 0.25rem 0.5rem;
      background-color: ${({ theme }) => theme.white};
      border: 1px solid ${({ theme }) => theme['blue-600']};
      border-radius: 4px;

      overflow-y: auto;
      overflow-y: overlay;

      &::-webkit-scrollbar {
        width: 0.4rem;
      }

      &::-webkit-scrollbar-thumb {
        border: 0.1rem solid transparent;
        background-clip: padding-box;
        background-color: ${({ theme }) => theme['blue-300']};
        border-radius: 8px;
      }
    }

    button {
      height: 2.5rem;

      background: ${({ theme }) => theme.green};
      border: none;
      border-radius: 8px;
      padding: 0 0.5rem;
      font-weight: 500;
      cursor: pointer;
      transition: 0.2s all;

      &:hover:not(:disabled) {
        filter: brightness(0.85);
      }

      &:disabled {
        filter: grayscale(0.5);
        cursor: not-allowed;
      }
    }
  }
`

export const Title = styled(Dialog.Title)`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${({ theme }) => theme['gray-700']};
`

export const Description = styled(Dialog.Description)`
  font-family: 'Roboto', sans-serif;
  margin-block: 1rem;
`

export const Close = styled(Dialog.Close)`
  border: none;
  background: none;
  border-radius: 999px;
  padding: 0.25rem;

  line-height: 0;

  position: absolute;
  top: 1rem;
  right: 1rem;

  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    background: ${({ theme }) => theme['gray-300']};
  }
`
