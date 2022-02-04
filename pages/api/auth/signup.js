import prisma from '@/lib/prisma'
import withUserValidations from '@/middleware/withUserValidations'
import bcrypt from 'bcrypt'

async function signup(req, res) {
  if (req.method !== 'POST')
    return res.status(403).json({ error: true, message: 'Method not allowed' })

  const { name, lastname, email, password } = req.body

  try {
    const userFound = await prisma.user.findUnique({
      where: {
        email: email
      }
    })
    if (userFound)
      return res
        .status(404)
        .json({ error: true, message: 'This email is already registered' })
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
    return res.status(500).json({ error: true, message: 'Server side error' })
  }
}
export default withUserValidations(signup)
