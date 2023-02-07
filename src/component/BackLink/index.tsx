import { useRouter } from 'next/router'
import { IoChevronBack } from 'react-icons/io5'

import { Container } from './styles'

export function BackLink() {
  const router = useRouter()

  return (
    <Container type="button" onClick={() => router.back()}>
      <IoChevronBack />
      Voltar
    </Container>
  )
}
