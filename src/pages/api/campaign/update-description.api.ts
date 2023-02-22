import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'

const updateCampaignDescriptionBodySchema = z.object({
  campaignId: z.string().uuid(),
  newDescription: z.string(),
})

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'PUT') {
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

  const { campaignId, newDescription } =
    updateCampaignDescriptionBodySchema.parse(req.body)

  const descriptionPattern =
    /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9\s.,:!?]+$/

  if (!newDescription.match(descriptionPattern)) {
    return res
      .status(400)
      .json({ error: 'Não utilize caracteres especiais na descrição' })
  }

  const updatedCampaignDescription = await prisma.campaign.update({
    where: {
      id: campaignId,
    },
    data: {
      description: newDescription,
    },
  })

  if (!updatedCampaignDescription) {
    return res.status(404).end()
  }

  return res.status(200).end()
}
