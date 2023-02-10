import { AxiosError } from 'axios'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import { toast } from 'react-toastify'

import { api } from '../../lib/axios'
import { levelCalculator } from '../../utils/level-calculator'
import { ActionDialog } from '../AlertDialog'
import { Input } from '../Input'
import { Container, InfosCharacter } from './styles'
import { useCharacters } from '../../context/CharacterContext'

interface IOnlyExperienceCharacter {
  points: number
}

interface IExperience {
  id: number
  points: number
  created_at: string
}

interface CardCharacterProps {
  character: {
    id: string
    name: string
    player_name: string
    experiences: IExperience[]
  }
  campaignId: string
}

export function CardCharacter({ character, campaignId }: CardCharacterProps) {
  const [experience, setExperience] = useState(0)
  const [amountExperience, setAmountExperience] = useState(0)

  const { fetchCharacters } = useCharacters()

  async function handleSubmitExperience(
    e: FormEvent<HTMLFormElement>,
    characterId: string,
  ) {
    e.preventDefault()

    if (experience === 0) {
      return toast.warn(
        `Informe a quantidade de experiencia de ${character.name}`,
      )
    }

    try {
      setExperience(0)

      await api.post('/experience', {
        characterId,
        experience,
      })

      incrementExperienceCharacter(character.id)

      toast.success('Pontuação de experiência adicionada com sucesso.')
    } catch (err) {
      if (err instanceof AxiosError && err.response?.data?.message) {
        return toast.error(err.response.data.message)
      }
    }
  }

  async function incrementExperienceCharacter(characterId: string) {
    const result = await api.get(`/character/experience/${characterId}`)

    const onlyxp: IOnlyExperienceCharacter[] = result.data

    const amount = onlyxp.reduce(
      (acc, currentValue) => acc + currentValue.points,
      0,
    )
    setAmountExperience(amount)
  }

  async function handleDeleteCharacter() {
    try {
      console.log(character.id)

      await api.delete(`/character/delete-character/${character.id}`)
      fetchCharacters(campaignId)
      toast.success('Novo personagem adicionado!')
    } catch (err) {
      if (err instanceof AxiosError && err.response?.data?.message) {
        return toast.error(err.response.data.message)
      }
    }
  }

  useEffect(() => {
    const experienceCharacter = character.experiences.filter(
      (experience) => experience.points,
    )
    const amount = experienceCharacter.reduce(
      (accumulator, currentValue) => accumulator + currentValue.points,
      0,
    )

    setAmountExperience(amount)
  }, [character.experiences])

  return (
    <Container>
      <InfosCharacter>
        <h3>{character.name}</h3>
        <p>{character.player_name}</p>
        <strong>
          Nível: <span>{levelCalculator(amountExperience)}</span>
        </strong>
        <strong>
          Pontos de experiência: <span>{amountExperience}</span>
        </strong>
      </InfosCharacter>

      <form onSubmit={(e) => handleSubmitExperience(e, character.id)}>
        <Input
          placeholder="300"
          type="number"
          value={experience > 0 ? experience : ''}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setExperience(e.target.valueAsNumber)
          }
        />
        <button type="submit">
          <BsPlusCircle /> Adicionar XP
        </button>
      </form>

      <ActionDialog onClick={handleDeleteCharacter} />
    </Container>
  )
}
