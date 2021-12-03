import prisma from '@/lib/prisma'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import env from '@/env'

export default async function signin(req, res) {
  if (req.method !== 'POST')
    return res.status(403).json({ error: true, message: 'Method not allowed' })
  const { email, password } = req.body
  if (!email || !password)
    return res
      .status(400)
      .json({ error: true, message: 'Email and Password must be provided' })
  try {
    const userFound = await prisma.user.findUnique({
      where: {
        email: email
      }
    })
    if (!userFound)
      return res
        .status(404)
        .json({ error: true, message: 'This email is not registred' })

    const isCorrectPassword = await bcrypt.compare(password, userFound.password)

    if (!isCorrectPassword)
      return res.status(401).json({ error: true, message: 'Invalid password' })

    const token = jwt.sign({ userId: userFound.id }, env.JWT_SECRET)

    return res.status(200).json({ user: userFound, token })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: true, message: 'Server side error' })
  }
}
