import { createContext, ReactNode, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'

import { api } from '../lib/axios'

interface CharacterProviderProps {
  children: ReactNode
}

interface IExperience {
  id: number
  points: number
  created_at: string
}

interface ICharacter {
  id: string
  name: string
  player_name: string
  experiences: IExperience[]
}

interface CharacterContextData {
  characters: ICharacter[]
  fetchCharacters: (campaignId: string) => void
  templateExperience: string
  fetchTemplate: (template: string) => void
}

const CharacterContext = createContext({} as CharacterContextData)

export function CharacterProvider({ children }: CharacterProviderProps) {
  const [templateExperience, setTemplateExperience] = useState('')
  const [characters, setCharacters] = useState<ICharacter[]>([])

  async function fetchCharacters(campaignId: string) {
    try {
      const result = await api.get(`/character/find-characters/${campaignId}`)

      setCharacters(result.data)
    } catch (err) {
      if (err instanceof AxiosError && err.response?.data?.message) {
        return toast.error(err.response.data.message)
      }
    }
  }

  function fetchTemplate(template: string) {
    setTemplateExperience(template)
  }

  return (
    <CharacterContext.Provider
      value={{
        characters,
        fetchCharacters,
        templateExperience,
        fetchTemplate,
      }}
    >
      {children}
    </CharacterContext.Provider>
  )
}

export function useCharacters(): CharacterContextData {
  const context = useContext(CharacterContext)

  return context
}
