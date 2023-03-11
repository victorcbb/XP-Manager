import { AxiosError } from 'axios'
import { ChangeEvent, FormEvent, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { toast } from 'react-toastify'

import { useCharacters } from '../../context/CharacterContext'
import { api } from '../../lib/axios'
import { Input } from '../Input'

import { Close, Content, Overlay, Portal, Root, Title, Trigger } from './styles'

interface AddCharacterProps {
  campaignId: string
}

export function AddCharacter({ campaignId }: AddCharacterProps) {
  const [name, setName] = useState('')
  const [playerName, setPlayerName] = useState('')
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { fetchCharacters } = useCharacters()

  async function handleAddNewCharacter(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (name.trim().length === 0) {
      setIsLoading(false)
      return toast.info('Insira o nome do personagem')
    }

    if (
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9\s]+$/.test(name) === false
    ) {
      setIsLoading(false)
      return toast.info(
        'O campo do nome do personagem deve ter apenas letras, números e acentos',
      )
    }

    if (playerName.trim().length === 0) {
      setIsLoading(false)
      return toast.info('Insira o nome do jogador')
    }

    if (
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9\s]+$/.test(playerName) ===
      false
    ) {
      setIsLoading(false)
      return toast.info(
        'O campo do nome do personagem deve ter apenas letras, números e acentos',
      )
    }

    try {
      await api.post('/character/new', {
        campaignId,
        name: name.trimStart().trimEnd(),
        playerName: playerName.trimStart().trimEnd(),
      })

      fetchCharacters(campaignId)
      toast.success('Novo personagem adicionado!')
      setName('')
      setPlayerName('')
    } catch (err) {
      if (err instanceof AxiosError && err.response?.data?.message) {
        return toast.error(err.response.data.message)
      }
    } finally {
      setIsLoading(false)
      setOpen(false)
    }
  }

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild>
        <button>Adicionar Personagem</button>
      </Trigger>
      <Portal>
        <Overlay />
        <Content>
          <Title>Novo personagem</Title>
          <form onSubmit={handleAddNewCharacter}>
            <Input
              placeholder="Klunk"
              type="text"
              label="Nome"
              value={name}
              maxLength={50}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            <Input
              placeholder="Elton"
              type="text"
              label="Jogador"
              value={playerName}
              maxLength={50}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPlayerName(e.target.value)
              }
            />
            <button type="submit" disabled={isLoading}>
              Criar
            </button>
          </form>
          <Close>
            <IoMdClose />
          </Close>
        </Content>
      </Portal>
    </Root>
  )
}
