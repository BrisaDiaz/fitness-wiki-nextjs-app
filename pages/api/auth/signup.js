import prisma from '@/lib/prisma'
import withUserValidations from '@/midlewares/withUserValidations'
import bcrypt from 'bcrypt'

async function signup(req, res) {
  const { name, lastname, email, password } = req.body

  try {
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
