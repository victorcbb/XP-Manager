import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { z } from 'zod'
import { prisma } from '../../../../lib/prisma'
import { buildNextAuthOptions } from '../../auth/[...nextauth].api'

const deleteCharacterQuerySchema = z.object({
  characterid: z.string(),
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

  const { characterid } = deleteCharacterQuerySchema.parse(req.query)

  const characterExists = await prisma.character.findUnique({
    where: {
      id: characterid,
    },
  })

  if (characterExists) {
    await prisma.character.delete({
      where: {
        id: characterid,
      },
      include: {
        experiences: {
          where: {
            character_id: characterid,
          },
        },
      },
    })

    return res.status(200).end()
  }

  return res.status(404).end()
}
