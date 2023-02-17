import { ReactNode } from 'react'
import { FiLogOut } from 'react-icons/fi'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

import { Arrow, Content, Item, Portal, Root, Trigger } from './styles'

interface UserHeaderButtonProps {
  children: ReactNode
  open: boolean
  setOpen: (value: boolean) => void
}

export function UserHeaderButton({
  open,
  children,
  setOpen,
}: UserHeaderButtonProps) {
  const router = useRouter()

  async function handleLogout() {
    await router.push('/')
    signOut()
  }

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild>
        <button>{children}</button>
      </Trigger>
      <Portal>
        <Content sideOffset={4} side="bottom">
          <Arrow />
          <Item onClick={handleLogout}>
            Sair <FiLogOut />
          </Item>
        </Content>
      </Portal>
    </Root>
  )
}
