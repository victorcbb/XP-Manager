import { CharacterTag } from '../CharacterTag'
import { Characters, Container } from './styles'

interface ICharacter {
  id: string
  name: string
}

interface ICampaign {
  name: string
  description: string
  characters: ICharacter[]
  id: string
}

interface CampaignCardProps {
  data: ICampaign
}

export function CampaignCard({ data, ...rest }: CampaignCardProps) {
  return (
    <Container href={`/campaign/${data.id}`} {...rest}>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <span>Personagens:</span>
      <Characters>
        {data.characters &&
          data.characters.map((character) => (
            <CharacterTag key={character.id} CharacterName={character.name} />
          ))}
      </Characters>
    </Container>
  )
}
