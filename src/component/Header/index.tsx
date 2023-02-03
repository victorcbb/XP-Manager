import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

import { Container, ContentHeader, UserInfos } from './styles'

export function Header() {
  const session = useSession()
  console.log(session)

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
          <Image
            src={session?.data?.user.avatar_url!}
            alt={`Foto do perfil de ${session?.data?.user.name}`}
            width={52}
            height={52}
            quality={100}
          />
        </UserInfos>
      </ContentHeader>
    </Container>
  )
}
