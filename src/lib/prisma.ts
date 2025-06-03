import { PrismaClient } from '@prisma/client'

// nao é necessário passar URl, pois o prisma vai entender automaticametne as conexões do BD através do DATABASE_URL do .env
export const prisma = new PrismaClient({
  // log de todos os SQL executadas no BD dentro do terminal, ideal para visualização e debug
  log: ['query'],
})
