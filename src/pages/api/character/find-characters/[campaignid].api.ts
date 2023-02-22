import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { z } from 'zod'
import { prisma } from '../../../../lib/prisma'
import { buildNextAuthOptions } from '../../auth/[...nextauth].api'

const characterExperienceQuerySchema = z.object({
  campaignid: z.string().uuid(),
})

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
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

  const { campaignid } = characterExperienceQuerySchema.parse(req.query)

  const campaignExists = await prisma.campaign.findUnique({
    where: {
      id: campaignid,
    },
  })

  if (!campaignExists) {
    return res.status(404).end()
  }

  const result = await prisma.character.findMany({
    where: {
      campaign_id: campaignid,
    },
    include: {
      experiences: true,
    },
  })
  return res.status(200).json(result)
}
