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

export function ActionDialog({ onClick, ...rest }: ActionDialogProps) {
  return (
    <Root>
      <Trigger>
        <button type="button">Excluir</button>
      </Trigger>
      <Portal>
        <Overlay />
        <Content>
          <Title>Excluir Personagem</Title>
          <Description>
            Tem certeza que deseja excluir permanentemente esse persoangem?
          </Description>
          <div>
            <Cancel>
              <button type="button">Cancelar</button>
            </Cancel>
            <Action onClick={onClick} type="button">
              <button>Deletar personagem</button>
            </Action>
          </div>
        </Content>
      </Portal>
    </Root>
  )
}
