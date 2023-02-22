import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { z } from 'zod'
import { prisma } from '../../../../lib/prisma'
import { buildNextAuthOptions } from '../../auth/[...nextauth].api'

const deleteCampaignQuerySchema = z.object({
  campaignId: z.string().uuid(),
})

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'DELETE') {
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

  const { campaignId } = deleteCampaignQuerySchema.parse(req.query)

  const campaign = prisma.campaign.findUnique({
    where: {
      id: campaignId,
    },
  })

  if (!campaign) {
    return res.status(404).end()
  }

  await prisma.campaign.delete({
    where: {
      id: campaignId,
    },
  })

  return res.status(200).end()
}
