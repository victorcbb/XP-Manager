import { ReactNode } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { Arrow, Content, Item, Portal, Root, Trigger } from './styles'

interface DropdownMenuProps {
  ItemExcludeCharacter: ReactNode
  ItemExcludeExperience: ReactNode
  open: boolean
  setOpen: (value: boolean) => void
}

export function DropdownMenu({
  ItemExcludeCharacter,
  ItemExcludeExperience,
  open,
  setOpen,
}: DropdownMenuProps) {
  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild>
        <button>
          <BsThreeDotsVertical />
        </button>
      </Trigger>
      <Portal>
        <Content sideOffset={5} side="bottom">
          <Arrow />
          <Item asChild>{ItemExcludeCharacter}</Item>
          <Item asChild>{ItemExcludeExperience}</Item>
        </Content>
      </Portal>
    </Root>
  )
}
