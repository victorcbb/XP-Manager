import { AxiosError } from 'axios'
import { useSession } from 'next-auth/react'
import { ChangeEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth/next'

import { api } from '../../lib/axios'
import { buildNextAuthOptions } from '../api/auth/[...nextauth].api'
import { Header } from '../../component/Header'
import { CampaignList, Container, Content } from './styles'
import { Input } from '../../component/Input'
import { CampaignCard } from '../../component/CampaignCard'
import { ButtonLink } from '../../component/ButtonLink'
import { BsPlusCircle } from 'react-icons/bs'

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
  const [campaigns, setCampaigns] = useState<Campaigns[]>([])
  const [search, setSearch] = useState('teste')
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

  useEffect(() => {
    async function fetchCampaign() {
      const response = await api.get(`/users/campaigns/${search}`)

      setCampaigns(response.data)
    }

    fetchCampaign()
  }, [search])

  const modelo = {
    id: 'sudahu4ush4u4uh',
    name: 'Sessão modelo',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda reprehenderit molestiae laborum soluta. Perferendis unde deleniti blanditiis veritatis dolore sequi eius nemo reiciendis, pariatur repellat vitae iure, voluptate corporis nihil?',
    characters: [
      {
        id: 'AHAHAHS',
        name: 'Lyron',
      },
      {
        id: 'AHAHA1HS',
        name: 'Skyline, o decisivo',
      },
      {
        id: 'AHAH3AHS',
        name: 'Hogred',
      },
      {
        id: 'AHA11H3AHS',
        name: 'willy Greenjam',
      },
    ],
  }

  return (
    <Container>
      <Header />
      <Content>
        <div>
          <h1>Campanhas</h1>
          <ButtonLink title="Nova" path="/dashboard" icon={<BsPlusCircle />} />
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
          <CampaignCard data={modelo} />
          <CampaignCard data={modelo} />
          <CampaignCard data={modelo} />
        </CampaignList>
      </Content>
    </Container>
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
