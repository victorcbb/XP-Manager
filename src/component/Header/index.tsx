import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

import { Container, ContentHeader, UserInfos } from './styles'
import { UserHeaderButton } from '../UserHeaderButton'
import { memo, useEffect, useState } from 'react'

export const Header = memo(function Header() {
  const [open, setOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  const session = useSession()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)
    }
  }, [])
  return (
    <Container>
      <ContentHeader>
        <Link href="/dashboard">
          <span>XP</span>
          <span>.MANAGER</span>
        </Link>
        <UserInfos>
          <div>
            <strong>{session?.data?.user.name}</strong>
            <span>{session?.data?.user.email}</span>
          </div>
          <UserHeaderButton open={open} setOpen={setOpen}>
            <Image
              src={session?.data?.user.avatar_url!}
              alt={`Foto do perfil de ${session?.data?.user.name}`}
              width={windowWidth >= 1200 ? 60 : 52}
              height={windowWidth >= 1200 ? 60 : 52}
              quality={100}
            />
          </UserHeaderButton>
        </UserInfos>
      </ContentHeader>
    </Container>
  )
})
