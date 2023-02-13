import { ReactNode } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { Arrow, Content, Item, Portal, Root, Trigger } from './styles'

interface DropdownMenuProps {
  ItemExcludeCharacter: ReactNode
  ItemExcludeExperience: ReactNode
}

export function DropdownMenu({
  ItemExcludeCharacter,
  ItemExcludeExperience,
}: DropdownMenuProps) {
  return (
    <Root>
      <Trigger asChild>
        <button>
          <BsThreeDotsVertical />
        </button>
      </Trigger>
      <Portal>
        <Content sideOffset={5} side="bottom">
          <Arrow />
          <Item>{ItemExcludeCharacter}</Item>
          <Item>{ItemExcludeExperience}</Item>
        </Content>
      </Portal>
    </Root>
  )
}
