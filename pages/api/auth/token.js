import prisma from '@/lib/prisma'
import jwt from 'jsonwebtoken'

export default async function signin(req, res) {
  if (req.method !== 'POST')
    return res.status(403).json({ error: true, message: 'Method not allowed' })
  const { email } = req.body
  if (!email)
    return res
      .status(400)
      .json({ error: true, message: 'Email must bee provided' })
  try {
    /// verify user is registred
    const userFound = await prisma.user.findUnique({
      where: {
        email: email
      }
    })
    if (!userFound)
      return res
        .status(404)
        .json({ error: true, message: 'This email is not registred' })

    ///set cookie
    const token = jwt.sign({ userId: userFound.id }, process.env.JWT_SECRET)

    return res.status(200).json({ user: userFound, token })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: true, message: 'Server side error' })
  }
}
