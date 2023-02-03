import { Container } from './styles'

interface CharacterTagProps {
  CharacterName: string
}

export function CharacterTag({ CharacterName, ...rest }: CharacterTagProps) {
  return <Container {...rest}>{CharacterName}</Container>
}
