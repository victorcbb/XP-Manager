import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { z } from 'zod'
import { prisma } from '../../../../lib/prisma'
import { buildNextAuthOptions } from '../../auth/[...nextauth].api'

const characterExperienceQuerySchema = z.object({
  characterid: z.string().uuid(),
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

  const { characterid } = characterExperienceQuerySchema.parse(req.query)

  const characterExists = await prisma.character.findUnique({
    where: {
      id: characterid,
    },
  })

  if (!characterExists) {
    return res.status(404).end()
  }

  const result = await prisma.experience.findMany({
    where: {
      character_id: characterid,
    },
    select: {
      points: true,
    },
  })
  return res.status(200).json(result)
}
