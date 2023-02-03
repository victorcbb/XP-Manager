import { CharacterTag } from '../CharacterTag'
import { Characters, Container } from './styles'

export function CampaignCard() {
  return (
    <Container href="#">
      <h2>Os Pistoleiros de G</h2>
      <p>
        Essa campnha desenvolve o cenário de Gedson, no mundo conhecido como
        narigolândia. Uma terra pacífica, até a chegada de mercenários que
        portavam armas estranhas.
      </p>
      <span>Personagens:</span>
      <Characters>
        <CharacterTag CharacterName="Temostocles" />
        <CharacterTag CharacterName="Lascado" />
        <CharacterTag CharacterName="Kless" />
      </Characters>
    </Container>
  )
}
