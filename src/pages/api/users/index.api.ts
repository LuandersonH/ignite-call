import { prisma } from '../../../lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // req recebe a requisição, res envia a resposta com status(405) (método não permitido) e end() finaliza  a resposta sem enviar corpo algum.
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { name, username } = req.body

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })

  // status 201 geralmente é usado para simbolizar que algo foi criado
  return res.status(201).json(user)
}
