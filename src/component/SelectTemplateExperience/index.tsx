import { setCookie } from 'nookies'
import { useState } from 'react'
import { useCharacters } from '../../context/CharacterContext'

import { Container, Indicator, Item, Root } from './styles'

interface IExperienceTemplate {
  campaignId: string
  template: string
}

interface SelectTemplateExperienceProps {
  campaignId: string
  experienceTemplates: IExperienceTemplate[]
}

export function SelectTemplateExperience({
  campaignId,
  experienceTemplates,
}: SelectTemplateExperienceProps) {
  const [experienceTableTemplate, setExperienceTableTemplate] = useState(() => {
    const filteredExperienceTempate = experienceTemplates.filter(
      (experienceTemplate) => experienceTemplate.campaignId === campaignId,
    )[0]?.template
    if (filteredExperienceTempate) {
      return filteredExperienceTempate
    }
    return 'Pathfinder-BloodBrothers-template'
  })

  const { fetchTemplate } = useCharacters()

  async function handleValueChange(selectedValue: string) {
    setExperienceTableTemplate(selectedValue)
    fetchTemplate(selectedValue)

    const findExperienceTempate = experienceTemplates.find(
      (experienceTemplate) => experienceTemplate.campaignId === campaignId,
    )

    if (findExperienceTempate) {
      const filteredExperienceTempate = experienceTemplates.filter(
        (experienceTemplate) => experienceTemplate.campaignId !== campaignId,
      )

      filteredExperienceTempate.push({
        campaignId,
        template: selectedValue,
      })

      setCookie(
        null,
        'EXPERIENCE_TEMPLATE',
        JSON.stringify(filteredExperienceTempate),
        {
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: '/',
        },
      )
      return
    }

    experienceTemplates.push({
      campaignId,
      template: selectedValue,
    })

    setCookie(
      null,
      'EXPERIENCE_TEMPLATE',
      JSON.stringify(experienceTemplates),
      {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      },
    )
  }

  return (
    <Container>
      <Root
        defaultValue={experienceTableTemplate}
        aria-label="Tabelas de experiência"
        value={experienceTableTemplate}
        onValueChange={handleValueChange}
      >
        <div>
          <Item value="Pathfinder-fast-template" id="r1">
            <Indicator />
          </Item>
          <label htmlFor="r1">Pathfinder - Rápida</label>
        </div>
        <div>
          <Item value="Pathfinder-medium-template" id="r2">
            <Indicator />
          </Item>
          <label htmlFor="r2">Pathfinder - Média</label>
        </div>
        <div>
          <Item value="Pathfinder-slow-template" id="r3">
            <Indicator />
          </Item>
          <label htmlFor="r3">Pathfinder - Lenta</label>
        </div>
        <div>
          <Item value="Pathfinder-BloodBrothers-template" id="r4">
            <Indicator />
          </Item>
          <label htmlFor="r4">Pathfinder - BloodBrothers</label>
        </div>
        <div>
          <Item value="D&D5e-template" id="r5">
            <Indicator />
          </Item>
          <label htmlFor="r5">D&D 5e</label>
        </div>
      </Root>
    </Container>
  )
}
