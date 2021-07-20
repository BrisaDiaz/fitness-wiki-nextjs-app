import prisma from '@/lib/prisma'
import getErrors from '@/middlewares/getSignUpErrors'
import bcrypt from 'bcrypt'

export default async function signup(req, res) {
  const { name, lastname, email, password } = req.body

  const errors = getErrors(req.body)

  if (errors.length > 0)
    return res.status(404).json({ error: true, message: errors })

  try {
    const userFound = await prisma.user.findUnique({
      where: {
        email: email
      }
    })
    if (userFound)
      return res
        .status(404)
        .json({ error: true, message: 'This email is already registred' })

    const salt = await bcrypt.genSalt(10)

    const hashPassword = await bcrypt.hash(password, salt)
    const user = await prisma.user.create({
      data: {
        first_name: name,
        last_name: lastname,
        email,
        password: hashPassword
      }
    })
    return res.status(201).json({ user })
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ error: true, message: error.message || 'Server side error' })
  }
}
