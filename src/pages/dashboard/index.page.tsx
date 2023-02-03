import { AxiosError } from 'axios'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { GetServerSideProps } from 'next'
import { unstable_getServerSession } from 'next-auth/next'

import { api } from '../../lib/axios'
import { buildNextAuthOptions } from '../api/auth/[...nextauth].api'
import { Header } from '../../component/Header'
import { CampaignList, Container, Content } from './styles'
import { Input } from '../../component/Input'
import { CampaignCard } from '../../component/CampaignCard'

export default function Dashboard() {
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

  return (
    <Container>
      <Header />
      <Content>
        <h1>Campanhas</h1>
        <Input placeholder="Pesquise o nome da campanha" type="text" />
        <CampaignList>
          <CampaignCard />
        </CampaignList>
      </Content>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(
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
