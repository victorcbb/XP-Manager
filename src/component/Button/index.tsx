import { ReactNode } from 'react'
import { Container } from './styles'

interface ButtonProps {
  title: string
  icon?: ReactNode
  type: 'button' | 'submit'
  onClick?: () => void
  isLoading?: boolean
}

export function Button({
  title,
  icon,
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <Container disabled={isLoading} {...rest}>
      {title}
      {icon}
    </Container>
  )
}
