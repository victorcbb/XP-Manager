import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { ChangeEvent, useEffect, useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import { toast } from 'react-toastify'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'
import { NextSeo } from 'next-seo'

import { api } from '../../lib/axios'
import { buildNextAuthOptions } from '../api/auth/[...nextauth].api'
import { Header } from '../../component/Header'
import { CampaignList, Container, Content } from './styles'
import { Input } from '../../component/Input'
import { CampaignCard } from '../../component/CampaignCard'
import { ButtonLink } from '../../component/ButtonLink'

interface Character {
  id: string
  name: string
}

interface Campaigns {
  id: string
  name: string
  description: string
  characters: Character[]
}

export default function Dashboard() {
  const [search, setSearch] = useState('')
  const session = useSession()

  useEffect(() => {
    async function createUser() {
      try {
        await api.post('/users', {
          name: session?.data?.user?.name,
          email: session?.data?.user?.email,
          avatarUrl: session?.data?.user?.avatar_url,
        })
      } catch (error) {
        if (error instanceof AxiosError && error.response?.data?.message) {
          return toast.error(error.response.data.message)
        }
      }
    }

    createUser()
  }, [
    session?.data?.user?.email,
    session?.data?.user?.name,
    session?.data?.user?.avatar_url,
  ])

  const { data: campaigns } = useQuery<Campaigns[]>(
    ['campaigns', search],
    async () => {
      if (
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9\s]+$/.test(search) ===
          false &&
        search.length > 0
      ) {
        return toast.info(
          'O campo do nome deve ter apenas letras, números e acentos',
        )
      }

      const response = await api.get(`/users/campaigns/${search}`)

      return response.data
    },
  )

  return (
    <>
      <NextSeo
        title="Dashboard | XP.Manager"
        description="Crie ou genrencie uma campanha."
        noindex
      />
      <Container>
        <Header />
        <Content>
          <div>
            <h1>Campanhas</h1>
            <ButtonLink title="Nova" path="/new" icon={<BsPlusCircle />} />
          </div>
          <Input
            placeholder="Pesquise o nome da campanha"
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />
          <CampaignList>
            {campaigns &&
              campaigns.map((campaign) => (
                <CampaignCard key={campaign.id} data={campaign} />
              ))}
          </CampaignList>
        </Content>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  return {
    props: {
      session,
    },
  }
}
