import { AxiosError } from 'axios'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { GetServerSideProps } from 'next'

import { api } from '../../lib/axios'
import { unstable_getServerSession } from 'next-auth/next'
import { buildNextAuthOptions } from '../api/auth/[...nextauth].api'

export default function Dashboard() {
  const session = useSession()

  console.log(session)

  useEffect(() => {
    async function createUser() {
      try {
        await api.post('/users', {
          name: session?.data?.user?.name,
          email: session?.data?.user?.email,
          imageUrl: session?.data?.user?.avatar_url,
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
    <>
      <p>{session.data?.user?.email}</p>
      <Image
        src={session.data?.user?.avatar_url!}
        alt={`Foto do perfil de ${session.data?.user?.name}`}
        width="150"
        height="150"
        quality={100}
      />
    </>
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
