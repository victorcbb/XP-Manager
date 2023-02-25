import { FiUserPlus } from 'react-icons/fi'
import { BsTrash } from 'react-icons/bs'

import { Container } from './styles'
import { ChangeEvent, MouseEventHandler } from 'react'

interface NewCharacterProps {
  isNew: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
  name?: string
  playerName?: string
  onChangeName?: (e: ChangeEvent<HTMLInputElement>) => void
  onChangePlayerName?: (e: ChangeEvent<HTMLInputElement>) => void
}

export function NewCharacter({
  isNew,
  name,
  playerName,
  onClick,
  onChangeName,
  onChangePlayerName,
  ...rest
}: NewCharacterProps) {
  return (
    <Container isNew={isNew}>
      <div>
        <label>
          Nome:
          <input
            type="text"
            placeholder="Nome do personagem"
            value={name}
            readOnly={!isNew}
            onChange={onChangeName}
            {...rest}
            // maxLength={50}
          />
        </label>
        <label>
          Jogador:
          <input
            type="text"
            placeholder="Nome do jogador"
            value={playerName}
            readOnly={!isNew}
            onChange={onChangePlayerName}
            {...rest}
            // maxLength={50}
          />
        </label>
      </div>
      <button type="button" onClick={onClick}>
        {isNew ? <FiUserPlus /> : <BsTrash />}
      </button>
    </Container>
  )
}
