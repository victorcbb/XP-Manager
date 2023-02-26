import { AxiosError } from 'axios'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import { toast } from 'react-toastify'
import ContentLoader from 'react-content-loader'

import { api } from '../../lib/axios'
import { levelCalculator } from '../../utils/level-calculator'
import { AlertDialog } from '../AlertDialog'
import { Input } from '../Input'
import { Container, InfosCharacter } from './styles'
import { useCharacters } from '../../context/CharacterContext'
import { DropdownMenu } from '../DropdownMenu'

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
  experienceTemplate: string
}

export function CardCharacter({
  character,
  campaignId,
  experienceTemplate,
}: CardCharacterProps) {
  const [experience, setExperience] = useState(0)
  const [amountExperience, setAmountExperience] = useState(0)
  const [lastExperience, setLastExperience] = useState(0)
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { fetchCharacters, templateExperience } = useCharacters()

  async function handleSubmitExperience(
    e: FormEvent<HTMLFormElement>,
    characterId: string,
  ) {
    e.preventDefault()

    if (/^[0-9]+$/.test(String(experience)) === false) {
      return toast.info('Insira apenas números.')
    }

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
      lastExperienceCharacter(character.id)
      fetchCharacters(campaignId)

      toast.success('Pontuação de experiência adicionada com sucesso.')
    } catch (err) {
      if (err instanceof AxiosError && err.response?.data?.message) {
        return toast.error(err.response.data.message)
      }
    }
  }

  async function incrementExperienceCharacter(characterId: string) {
    setIsLoading(true)

    try {
      const result = await api.get(`/character/experience/${characterId}`)

      const onlyXp: IOnlyExperienceCharacter[] = result.data

      const amount = onlyXp.reduce(
        (acc, currentValue) => acc + currentValue.points,
        0,
      )
      setAmountExperience(amount)
    } catch (err) {
      if (err instanceof AxiosError && err.response?.data?.message) {
        return toast.error(err.response.data.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  async function lastExperienceCharacter(characterId: string) {
    setIsLoading(true)

    try {
      const result = await api.get(`/character/experience/${characterId}`)

      const onlyxp: IOnlyExperienceCharacter[] = result.data

      const filteredLastExperience = onlyxp.at(-1)?.points
      setLastExperience(filteredLastExperience || 0)

      incrementExperienceCharacter(characterId)
    } catch (err) {
      if (err instanceof AxiosError && err.response?.data?.message) {
        return toast.error(err.response.data.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  async function handleDeleteCharacter() {
    try {
      await api.delete(`/character/delete-character/${character.id}`)
      fetchCharacters(campaignId)
      toast.success('Personagem deletado.')
    } catch (err) {
      if (err instanceof AxiosError && err.response?.data?.message) {
        return toast.error(err.response.data.message)
      }
    } finally {
      setOpen(false)
    }
  }

  async function handleDeleteLastExperience() {
    if (amountExperience === 0) {
      return toast.error(
        'Esse personagem não possui pontos de experiência ainda.',
      )
    }

    try {
      await api.delete(`/experience/delete/${character.experiences.at(-1)?.id}`)
      fetchCharacters(campaignId)
      toast.success('Ultima pontuação de experiência deletada.')
    } catch (err) {
      if (err instanceof AxiosError && err.response?.data?.message) {
        return toast.error(err.response.data.message)
      }
    } finally {
      setOpen(false)
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
    lastExperienceCharacter(character.id)
  }, [character.experiences, character.id])

  if (isLoading) {
    return (
      <Container>
        <ContentLoader
          speed={2}
          width="100%"
          height={200}
          viewBox="0 0 400 160"
          backgroundColor="#c4c4c4"
          foregroundColor="#BEE3F8"
        >
          <rect x="4" y="8" rx="6" ry="6" width="148" height="12" />
          <rect x="4" y="26" rx="6" ry="6" width="108" height="12" />
          <rect x="0" y="76" rx="8" ry="8" width="110" height="16" />
          <rect x="0" y="102" rx="8" ry="8" width="300" height="16" />
          <rect x="0" y="128" rx="8" ry="8" width="178" height="16" />
        </ContentLoader>
      </Container>
    )
  }

  return (
    <Container>
      <InfosCharacter>
        <h3>{character.name}</h3>
        <p>{character.player_name}</p>
        <strong>
          Nível:{' '}
          <span>
            {levelCalculator(
              amountExperience,
              templateExperience || experienceTemplate,
            )}
          </span>
        </strong>
        <strong>
          Pontos de experiência:{' '}
          <span>{amountExperience.toLocaleString('pt-br')}</span>
        </strong>
        <div>
          <strong>
            Última experiência:{' '}
            <span>{lastExperience.toLocaleString('pt-br')}</span>
          </strong>
        </div>
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

        <button type="submit" disabled={isLoading}>
          <BsPlusCircle /> Adicionar XP
        </button>
      </form>

      <DropdownMenu
        open={open}
        setOpen={setOpen}
        ItemExcludeCharacter={
          <AlertDialog
            title="Excluir Personagem"
            buttonName="Apagar Personagem"
            description="Tem certeza que deseja excluir permanentemente esse personagem?"
            buttonConfirm="Deletar personagem"
            onClick={handleDeleteCharacter}
          />
        }
        ItemExcludeExperience={
          <AlertDialog
            title="Excluir Experiência"
            buttonName="Apagar experiência"
            description="Tem certeza que deseja excluir permanentemente a última pontuação de experiência adicionada?"
            buttonConfirm="Deletar experiência"
            onClick={handleDeleteLastExperience}
          />
        }
      />
    </Container>
  )
}
