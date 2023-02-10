import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'

const addExperienceBodySchema = z.object({
  characterId: z.string(),
  experience: z.number(),
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

  const { characterId, experience } = addExperienceBodySchema.parse(req.body)

  await prisma.experience.create({
    data: {
      points: experience,
      character_id: characterId,
    },
  })

  return res.status(204).end()
}
