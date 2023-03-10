import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'

const createNewCharacterBodySchema = z.object({
  campaignId: z.string().uuid(),
  name: z.string(),
  playerName: z.string(),
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

  const { campaignId, name, playerName } = createNewCharacterBodySchema.parse(
    req.body,
  )

  const charactersPattern = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9\s]+$/

  if (!name.match(charactersPattern)) {
    return res.status(400).json({
      error: 'Não utilize caracteres especiais no nome do personagem.',
    })
  }

  if (!playerName.match(charactersPattern)) {
    return res.status(400).json({
      error: 'Não utilize caracteres especiais no nome do personagem.',
    })
  }

  const campaignExists = await prisma.campaign.findUnique({
    where: {
      id: campaignId,
    },
  })

  if (!campaignExists) {
    return res.status(404).end()
  }

  await prisma.character.create({
    data: {
      name,
      player_name: playerName,
      campaign_id: campaignId,
    },
  })

  return res.status(204).end()
}
