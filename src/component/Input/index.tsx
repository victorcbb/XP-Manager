import { HTMLProps } from 'react'
import { Container } from './styles'

interface InputProps extends HTMLProps<HTMLInputElement> {
  label?: string
  type: string
  placeholder: string
  minCaracter?: number
}

export function Input({
  label,
  placeholder,
  type,
  minCaracter,
  ...rest
}: InputProps) {
  return (
    <Container>
      {label}
      <input
        type={type}
        placeholder={placeholder}
        min={minCaracter}
        {...rest}
      />
    </Container>
  )
}
