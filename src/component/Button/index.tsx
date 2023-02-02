import { ReactNode } from 'react'
import { Container } from './styles'

interface ButtonProps {
  title: string
  icon?: ReactNode
  type: 'button' | 'submit'
  onClick?: () => void
  loading?: boolean
}

export function Button({ title, icon, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      {title}
      {icon}
    </Container>
  )
}
