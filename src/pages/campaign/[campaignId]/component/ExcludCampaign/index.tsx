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
}

export function ExcludCampaign({ onClick, ...rest }: ActionDialogProps) {
  return (
    <Root>
      <Trigger asChild>
        <button type="button">Excluir campanha</button>
      </Trigger>
      <Portal>
        <Overlay />
        <Content>
          <Title>Excluir Campanha</Title>
          <Description>
            Tem certeza que você deseja <strong>excluir permanentemente</strong>{' '}
            essa campanha?
          </Description>
          <div>
            <Cancel>
              <button type="button">Cancelar</button>
            </Cancel>
            <Action onClick={onClick} type="button">
              <button>Excluir campanha</button>
            </Action>
          </div>
        </Content>
      </Portal>
    </Root>
  )
}
