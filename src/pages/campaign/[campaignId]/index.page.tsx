import { GetStaticPaths, GetStaticProps } from 'next'
import { useEffect } from 'react'
import { AddCharacter } from '../../../component/AddCharacter'
import { BackLink } from '../../../component/BackLink'
import { CardCharacter } from '../../../component/CardCharacter'
import { Header } from '../../../component/Header'
import { useCharacters } from '../../../context/CharacterContext'

import { prisma } from '../../../lib/prisma'
import { CharactersList, Container, Content } from './styles'

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

interface CampaignProps {
  campaign: {
    id: string
    name: string
    description: string
    characters: ICharacter[]
  }
}

export default function Campaign({ campaign }: CampaignProps) {
  const { characters, fetchCharacters } = useCharacters()

  useEffect(() => {
    fetchCharacters(campaign.id)
  }, [campaign.id])

  return (
    <Container>
      <Header />
      <Content>
        <BackLink />
        <h1>{campaign.name}</h1>
        <p>{campaign.description}</p>
        <h2>Personagens</h2>
        <CharactersList>
          {characters &&
            characters.map((character) => (
              <CardCharacter
                key={character.id}
                character={character}
                campaignId={campaign.id}
              />
            ))}
        </CharactersList>
        <AddCharacter campaignId={campaign.id} />
      </Content>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const campaignId = String(params?.campaignId)

  const campaign = await prisma.campaign.findUnique({
    where: {
      id: campaignId,
    },
    include: {
      characters: {
        include: {
          experiences: true,
        },
      },
    },
  })

  if (!campaign) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      campaign: {
        id: campaign.id,
        name: campaign.name,
        description: campaign.description,
      },
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}
