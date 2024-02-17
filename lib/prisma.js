import pkg from '@prisma/client'
const { PrismaClient } = pkg

let prisma

if (process.env.NODE_ENV === 'PRODUCTION') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export default prisma
