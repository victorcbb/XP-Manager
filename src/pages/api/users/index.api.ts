import type { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'

import { prisma } from '../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { name, email, avatarUrl } = req.body

  const userExists = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!userExists) {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        avatar_url: avatarUrl,
      },
    })

    setCookie({ res }, '@xp-manager:userid', user.id, {
      maxAge: 60 * 60 * 24 * 10, // 10 days
      path: '/',
    })

    return res.status(204).json(user)
  }
}
