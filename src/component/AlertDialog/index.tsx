import { ButtonHTMLAttributes } from 'react'
import {
  Action,
  Cancel,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from './styles'

interface ActionDialogProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void
  buttonName: string
  title: string
  description: string
  buttonConfirm: string
}

export function AlertDialog({
  onClick,
  buttonName,
  title,
  description,
  buttonConfirm,
  ...rest
}: ActionDialogProps) {
  return (
    <Root>
      <Trigger>
        <button type="button">{buttonName}</button>
      </Trigger>
      <Portal>
        <Overlay />
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <div>
            <Cancel>
              <button type="button">Cancelar</button>
            </Cancel>
            <Action onClick={onClick} type="button">
              <button>{buttonConfirm}</button>
            </Action>
          </div>
        </Content>
      </Portal>
    </Root>
  )
}
