import { ChangeEvent, FormEvent, useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

import { BackLink } from '../../component/BackLink'
import { Button } from '../../component/Button'
import { Header } from '../../component/Header'
import { Input } from '../../component/Input'
import { NewCharacter } from '../../component/NewCharacter'
import { api } from '../../lib/axios'
import { Characters, Container, Content, TextArea } from './styles'

interface ICharacters {
  name: string
  playerName: string
}

export default function New() {
  const [campaignName, setCampaignName] = useState('')
  const [description, setDescription] = useState('')
  const [characters, setCharacters] = useState<ICharacters[]>([])
  const [newCharacterName, setNewCharacterName] = useState('')
  const [newPlayerName, setNewPlayerName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!campaignName) {
      return toast.warning('Adicione um nome para a sua campanha.')
    }

    if (!description) {
      return toast.warning('O campo da descrição deve ser preenchido.')
    }

    if (newCharacterName || newPlayerName) {
      return toast.warning(
        `Existe informações de um personagem para adicionar.`,
      )
    }

    try {
      setIsLoading(true)

      await api.post('/campaign/new-campaign', {
        campaignName,
        description,
        characters,
      })

      toast.success('Campanha criada com sucesso!')
      await router.push('/dashboard')
    } catch (err: any) {
      if (err.response) {
        toast.error(err.response.data.message)
      } else {
        toast.error('Falha ao criar a campanha.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  function handleAddCharacter() {
    if (newCharacterName.length === 0 || newPlayerName.length === 0) {
      return toast.warning(`Preencha todos os campos`)
    }

    setCharacters((prevState) => [
      ...prevState,
      {
        name: newCharacterName,
        playerName: newPlayerName,
      },
    ])

    setNewCharacterName('')
    setNewPlayerName('')
  }

  function handleRemoveCharacter(name: string) {
    setCharacters((prevState) =>
      prevState.filter((character) => character.name !== name),
    )
  }

  return (
    <Container>
      <Header />
      <Content onSubmit={handleSubmit}>
        <BackLink />
        <h1>Nova Campanha</h1>
        <Input
          type="text"
          placeholder="O orc e a torta"
          label="Nome"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCampaignName(e.target.value)
          }
        />
        <TextArea>
          Descrição
          <textarea
            cols={30}
            rows={10}
            placeholder="Faça uma breve descrição da sua campanha."
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setDescription(e.target.value)
            }
          />
        </TextArea>
        <h3>Personagens:</h3>
        <Characters>
          {characters &&
            characters.map((character, index) => (
              <NewCharacter
                key={index}
                name={character.name}
                playerName={character.playerName}
                onClick={() => handleRemoveCharacter(character.name)}
                isNew={false}
              />
            ))}
          <NewCharacter
            name={newCharacterName}
            onChangeName={(e: ChangeEvent<HTMLInputElement>) =>
              setNewCharacterName(e.target.value)
            }
            playerName={newPlayerName}
            onChangePlayerName={(e: ChangeEvent<HTMLInputElement>) =>
              setNewPlayerName(e.target.value)
            }
            isNew
            onClick={handleAddCharacter}
          />
        </Characters>
        <div>
          <Button
            title="Criar"
            type="submit"
            isLoading={isLoading}
            icon={<BsPlusCircle />}
          />
        </div>
      </Content>
    </Container>
  )
}
