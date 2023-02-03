import { Container } from './styles'

interface InputProps {
  label?: string
  type: string
  placeholder: string
  minCaracter?: number
}

export function Input({ label, placeholder, type, minCaracter }: InputProps) {
  return (
    <Container>
      {label}
      <input type={type} placeholder={placeholder} min={minCaracter} />
    </Container>
  )
}
