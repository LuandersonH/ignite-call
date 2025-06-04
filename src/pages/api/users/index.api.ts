import { prisma } from '../../../lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // req recebe a requisição, res envia a resposta com status(405) (método não permitido) e end() finaliza  a resposta sem enviar corpo algum.
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { name, username } = req.body

  // userExists deve esperar a resposta para não definir sempre como true.
  const userExists = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (userExists) {
    return res.status(400).json({
      message: 'Username already taken.',
    })
  }

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })

  const SEVEN_DAYS_IN_SECONDS = 60 * 60 * 24 * 7
  setCookie({ res }, '@ignite-call:userId', user.id, {
    maxAge: SEVEN_DAYS_IN_SECONDS,
    // todas as todas do app podem acessar, cookie global
    path: '/',
  })

  // status 201 geralmente é usado para simbolizar que algo foi criado
  return res.status(201).json(user)
}
