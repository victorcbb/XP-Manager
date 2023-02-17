import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import styled from 'styled-components'

export const Root = styled(DropdownMenu.Root)``

export const Trigger = styled(DropdownMenu.Trigger)`
  background: none;
  border: none;
  border-radius: 999px;

  line-height: 0;

  cursor: pointer;
`

export const Portal = styled(DropdownMenu.Portal)``

export const Content = styled(DropdownMenu.Content)`
  min-width: fit-content;

  margin-right: 0.25rem;
  padding: 0.25rem 0.5rem;
  background-color: ${({ theme }) => theme.white};
  border-radius: 6px;
  box-shadow: 0px 0px 38px 0px rgba(22, 23, 24, 0.35),
    0px 10px 20px 0px rgba(22, 23, 24, 0.2);

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-side='bottom'] {
    animation-name: slideUpAndFade;
  }

  @keyframes slideUpAndFade {
    from {
      opacity: 0;
      transform: translateY(2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const Item = styled(DropdownMenu.Item)`
  width: 100%;
  height: 1.75rem;

  font-size: 0.875rem;
  line-height: 1.4;
  color: ${({ theme }) => theme['red-600']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;

  border-radius: 4px;
  padding: 0 0.25rem;

  &:hover {
    background: ${({ theme }) => theme['gray-300']};
  }
`

export const Arrow = styled(DropdownMenu.Arrow)`
  fill: ${({ theme }) => theme.white};
`
