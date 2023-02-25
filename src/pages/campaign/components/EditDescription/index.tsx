import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { ChangeEvent, FormEvent, useState } from 'react'
import { BsPenFill } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
import { toast } from 'react-toastify'

import { api } from '../../../../lib/axios'
import { Close, Content, Overlay, Portal, Root, Title, Trigger } from './styles'

interface EditDescriptionProps {
  description: string
  campaignId: string
}

export function EditDescription({
  description,
  campaignId,
}: EditDescriptionProps) {
  const [newDescription, setNewDescription] = useState(description)
  const [open, setOpen] = useState(false)

  const router = useRouter()

  async function handleSubmitNewDescription(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (newDescription === description) {
      setOpen(false)
      return
    }

    if (
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9\s.,:!?()/]+$/.test(
        newDescription,
      ) === false
    ) {
      return toast.info(
        'O campo da descrição deve ter apenas letras, números, acentos e pontuações',
      )
    }

    try {
      await api.put('/campaign/update-description', {
        campaignId,
        newDescription,
      })

      toast.success('Descrição atualizada com sucesso!')
      router.reload()
    } catch (err) {
      if (err instanceof AxiosError && err.response?.data?.message) {
        return toast.error(err.response.data.message)
      }
    } finally {
      setOpen(false)
    }
  }

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild>
        <button type="button">
          <BsPenFill />
        </button>
      </Trigger>
      <Portal>
        <Overlay />
        <Content>
          <Title>Atualize a descrição</Title>
          <form onSubmit={handleSubmitNewDescription}>
            <textarea
              value={newDescription}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setNewDescription(e.target.value)
              }
            />
            <button type="submit">Salvar</button>
          </form>
          <Close>
            <IoMdClose />
          </Close>
        </Content>
      </Portal>
    </Root>
  )
}
