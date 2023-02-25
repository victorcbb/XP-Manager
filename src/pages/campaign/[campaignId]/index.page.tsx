import { AxiosError } from 'axios'
import { GetServerSideProps } from 'next'
import { useEffect } from 'react'
import { parseCookies } from 'nookies'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import { AddCharacter } from '../../../component/AddCharacter'
import { BackLink } from '../../../component/BackLink'
import { CardCharacter } from '../../../component/CardCharacter'
import { Header } from '../../../component/Header'
import { SelectTemplateExperience } from '../../../component/SelectTemplateExperience'
import { useCharacters } from '../../../context/CharacterContext'
import { prisma } from '../../../lib/prisma'
import { EditDescription } from '../components/EditDescription'
import { CharactersList, Container, Content, Divisor } from './styles'
import { ButtonLink } from '../../../component/ButtonLink'
import { ExcludCampaign } from './component/ExcludCampaign'
import { api } from '../../../lib/axios'
import { toast } from 'react-toastify'

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

  const router = useRouter()

  const filteredExperienceTempate =
    experienceTemplates.filter(
      (experienceTemplate) => experienceTemplate.campaignId === campaign.id,
    )[0]?.template || 'Pathfinder-BloodBrothers-template'

  async function handleDeleteCampaign() {
    try {
      await api.delete(`/campaign/delete-campaign/${campaign.id}`)

      toast.success('Campanha excluída com sucesso!')
      await router.push('/dashboard')
    } catch (err) {
      if (err instanceof AxiosError && err.response?.data?.message) {
        return toast.error(err.response.data.message)
      }
    }
  }

  useEffect(() => {
    fetchCharacters(campaign.id)
  }, [campaign.id])

  return (
    <>
      <NextSeo
        title={`${campaign.name} | XP.Manager`}
        description="Crie ou genrencie uma campanha."
        noindex
      />
      <Container>
        <Header />
        <Content>
          <div>
            <BackLink />
          </div>
          <div>
            <h1>{campaign.name}</h1>

            <EditDescription
              description={campaign.description}
              campaignId={campaign.id}
            />
          </div>
          <p>{campaign.description}</p>
          <h2>Progressão dos personagens</h2>
          <SelectTemplateExperience
            campaignId={campaign.id}
            experienceTemplates={experienceTemplates}
          />
          <div>
            <h2>Personagens</h2>
            <ButtonLink
              path={`/campaign/${campaign.id}/character-table`}
              title="Tabela"
            />
          </div>
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
          <Divisor />
          <ExcludCampaign onClick={handleDeleteCampaign} />
        </Content>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parseCookies(context)

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
