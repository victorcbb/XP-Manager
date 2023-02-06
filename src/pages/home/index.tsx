import { BsArrowRightCircle, BsGoogle } from 'react-icons/bs'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { signIn, useSession } from 'next-auth/react'

import { Button } from '../../component/Button'
import { Container, Content, Title } from './styles'
import { useRouter } from 'next/router'
import { ButtonLink } from '../../component/ButtonLink'

export default function Home() {
  const router = useRouter()
  const session = useSession()

  const hasAuthError = !!router.query.error

  async function handleSingIn() {
    signIn('google')
  }

  if (hasAuthError) {
    toast.error('O login não foi autorizado')
  }

  return (
    <Container>
      <Content>
        <Title>
          <span>XP</span>
          <span>.MANAGER</span>
        </Title>

        <p>
          <span>XP</span>
          <span>.MANAGER</span> é uma aplicação web feita para quem curte jogar
          RPG de mesa, pensando em dar praticidade para o{' '}
          <strong>Mestre Apelão</strong> gerenciar todo o xp de cada personagem
          em suas aventuras.
        </p>

        {session.status === 'authenticated' ? (
          <ButtonLink
            title="Ir para Dashboard"
            path="/dashboard"
            icon={<BsArrowRightCircle />}
          />
        ) : (
          <Button
            title="Começar com Google"
            type="button"
            icon={<BsGoogle />}
            onClick={handleSingIn}
          />
        )}
      </Content>
    </Container>
  )
}
