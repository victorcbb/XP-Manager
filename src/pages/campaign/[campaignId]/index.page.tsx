import { GetServerSideProps } from 'next'
import { useEffect } from 'react'
import { parseCookies } from 'nookies'

import { AddCharacter } from '../../../component/AddCharacter'
import { BackLink } from '../../../component/BackLink'
import { CardCharacter } from '../../../component/CardCharacter'
import { Header } from '../../../component/Header'
import { SelectTemplateExperience } from '../../../component/SelectTemplateExperience'
import { useCharacters } from '../../../context/CharacterContext'
import { prisma } from '../../../lib/prisma'
import { EditDescription } from '../components/EditDescription'
import { CharactersList, Container, Content } from './styles'

interface CampaignProps {
  campaign: {
    id: string
    name: string
    description: string
  }
  experienceTemplates: [
    {
      campaignId: string
      template: string
    },
  ]
}

export default function Campaign({
  campaign,
  experienceTemplates,
}: CampaignProps) {
  const { fetchCharacters, characters } = useCharacters()

  const filteredExperienceTempate = experienceTemplates.filter(
    (experienceTemplate) => experienceTemplate.campaignId === campaign.id,
  )[0]?.template

  useEffect(() => {
    fetchCharacters(campaign.id)
  }, [campaign.id])

  return (
    <Container>
      <Header />
      <Content>
        <div>
          <BackLink />
          <EditDescription
            description={campaign.description}
            campaignId={campaign.id}
          />
        </div>
        <h1>{campaign.name}</h1>
        <p>{campaign.description}</p>
        <h2>Progressão dos personagens</h2>
        <SelectTemplateExperience
          campaignId={campaign.id}
          experienceTemplates={experienceTemplates}
        />
        <h2>Personagens</h2>
        <CharactersList>
          {characters &&
            characters.map((character) => (
              <CardCharacter
                key={character.id}
                character={character}
                campaignId={campaign.id}
                experienceTemplate={filteredExperienceTempate}
              />
            ))}
        </CharactersList>
        <AddCharacter campaignId={campaign.id} />
      </Content>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parseCookies(context)

  if (cookies.EXPERIENCE_TEMPLATE) {
    console.log('[cookies]', JSON.parse(cookies.EXPERIENCE_TEMPLATE))
  }

  const campaignId = context.params?.campaignId

  const campaign = await prisma.campaign.findUnique({
    where: {
      id: String(campaignId),
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
      experienceTemplates: cookies.EXPERIENCE_TEMPLATE
        ? JSON.parse(cookies.EXPERIENCE_TEMPLATE)
        : [
            {
              campaignId: campaign.id,
              template: 'Pathfinder-BloodBrothers-template',
            },
          ],
    },
  }
}
