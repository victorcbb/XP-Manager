import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'

const createCampaignBodySchema = z.object({
  campaignName: z.string(),
  description: z.string(),
  characters: z
    .object({
      name: z.string(),
      playerName: z.string(),
    })
    .array(),
})

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  if (!session) {
    return res.status(401).end()
  }

  const { campaignName, characters, description } =
    createCampaignBodySchema.parse(req.body)

  const campaignNamePattern = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9\s]+$/
  const charactersPattern = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9\s]+$/
  const descriptionPattern =
    /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9\s.,:!?()/]+$/

  if (!campaignName.match(campaignNamePattern)) {
    return res
      .status(400)
      .json({ error: 'Não utilize caracteres especiais no nome da campanha.' })
  }

  if (!characters.map((character) => character.name.match(charactersPattern))) {
    return res.status(400).json({
      error: 'Não utilize caracteres especiais no nome do personagem.',
    })
  }

  if (
    !characters.map((character) =>
      character.playerName.match(charactersPattern),
    )
  ) {
    return res.status(400).json({
      error: 'Não utilize caracteres especiais no nome do jogador.',
    })
  }

  if (!description.match(descriptionPattern)) {
    return res
      .status(400)
      .json({ error: 'Não utilize caracteres especiais na descrição' })
  }

  await prisma.campaign.create({
    data: {
      name: campaignName,
      description,
      user_id: session.user.id,
      characters: {
        createMany: {
          data: characters.map((character) => {
            return {
              name: character.name,
              player_name: character.playerName,
            }
          }),
        },
      },
    },
  })

  return res.status(204).end()
}
