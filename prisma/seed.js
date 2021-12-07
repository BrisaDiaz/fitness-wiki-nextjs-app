import prisma from '@/lib/prisma'
import bcrypt from 'bcrypt'
import { testingFixedUser } from './data'
async function seed(user) {
  try {
    const salt = await bcrypt.genSalt(10)

    const hashPassword = await bcrypt.hash(user.password, salt)
    await prisma.user.create({
      data: {
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        password: hashPassword
      }
    })
    console.log('Prisma seed successfully.')
  } catch (error) {
    console.log('Prisma seed fail.')
    console.log(error)
  }
}
seed(testingFixedUser)
