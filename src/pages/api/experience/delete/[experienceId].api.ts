import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { z } from 'zod'
import { prisma } from '../../../../lib/prisma'
import { buildNextAuthOptions } from '../../auth/[...nextauth].api'

const deleteExperienceQuerySchema = z.object({
  experienceId: z.string(),
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

  const { experienceId } = deleteExperienceQuerySchema.parse(req.query)

  const experience = await prisma.experience.findUnique({
    where: {
      id: Number(experienceId),
    },
  })

  if (experience) {
    await prisma.experience.delete({
      where: {
        id: Number(experienceId),
      },
    })

    return res.status(200).end()
  }

  return res.status(404).end()
}
