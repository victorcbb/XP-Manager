import downloadjs from 'downloadjs'
import html2canvas from 'html2canvas'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { NextSeo } from 'next-seo'
import { useEffect } from 'react'
import { BsDownload } from 'react-icons/bs'

import { BackLink } from '../../../../component/BackLink'
import { Header } from '../../../../component/Header'
import { Contaienr, Content, TableWrapper } from './styles'
import { Button } from '../../../../component/Button'
import { prisma } from '../../../../lib/prisma'
import { useCharacters } from '../../../../context/CharacterContext'
import { levelCalculator } from '../../../../utils/level-calculator'

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

export default function CharacterTable({
  campaign,
  experienceTemplates,
}: CampaignProps) {
  const { fetchCharacters, characters } = useCharacters()

  async function DownloadScreenshot() {
    const table: HTMLElement = document.querySelector('#capture')!
    const canvas = await html2canvas(table)
    const dataURL = canvas.toDataURL('image/png')

    downloadjs(dataURL, 'tabela-xp.png', 'image/png')
  }

  const filteredExperienceTempate = experienceTemplates.filter(
    (experienceTemplate) => experienceTemplate.campaignId === campaign.id,
  )[0]?.template

  useEffect(() => {
    fetchCharacters(campaign.id)
  }, [campaign.id])

  return (
    <>
      <NextSeo title="Tabela de experiência | XP.Manager" noindex />
      <Contaienr>
        <Header />
        <Content>
          <BackLink />

          <TableWrapper>
            <table id="capture">
              <thead>
                <tr>
                  <th>Personagem</th>
                  <th>Ultimo XP</th>
                  <th>XP total</th>
                  <th>Nível</th>
                </tr>
              </thead>
              <tbody>
                {characters &&
                  characters.map((character) => (
                    <tr key={character.id}>
                      <td>
                        <strong>{character.name}</strong>
                        <span>{character.player_name}</span>
                      </td>
                      <td>
                        {character.experiences
                          .at(-1)
                          ?.points.toLocaleString('pt-br') || '0'}
                      </td>
                      <td>
                        {character.experiences
                          .filter((experience) => experience.points)
                          .reduce(
                            (accumulator, currentValue) =>
                              accumulator + currentValue.points,
                            0,
                          )
                          .toLocaleString('pt-br')}
                      </td>
                      <td>
                        {levelCalculator(
                          character.experiences
                            .filter((experience) => experience.points)
                            .reduce(
                              (accumulator, currentValue) =>
                                accumulator + currentValue.points,
                              0,
                            ),
                          filteredExperienceTempate ||
                            'Pathfinder-BloodBrothers-template',
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </TableWrapper>
        </Content>
        <div>
          <Button
            onClick={DownloadScreenshot}
            type="button"
            title="Baixar tabela"
            icon={<BsDownload />}
          />
        </div>
      </Contaienr>
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
