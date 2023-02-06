import { ReactNode } from 'react'
import { Container } from './styles'

interface ButtonLinkProps {
  path: string
  title: string
  icon?: ReactNode
}

export function ButtonLink({ path, title, icon, ...rest }: ButtonLinkProps) {
  return (
    <Container href={path} {...rest}>
      {title}
      {icon}
    </Container>
  )
}
