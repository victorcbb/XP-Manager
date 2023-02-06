import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { z } from 'zod'
import { prisma } from '../../../../lib/prisma'
import { buildNextAuthOptions } from '../../auth/[...nextauth].api'

const campaignQuerySchema = z.object({
  name: z.string(),
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

  const { name } = campaignQuerySchema.parse(req.query)

  const result = await prisma.campaign.findMany({
    orderBy: {
      created_at: 'desc',
    },
    where: {
      AND: [
        {
          name: {
            contains: name,
            mode: 'insensitive',
          },
        },
        {
          user_id: session.user.id,
        },
      ],
    },
    include: {
      characters: true,
    },
  })
  return res.status(200).json(result)
}
