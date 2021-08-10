import prisma from '@/lib/prisma'
import getValidationErrors from '@/utils/getUserValidationErrors'

export default function withUserValidations(handler) {
  return async (req, res) => {
    try {
      const errors = getValidationErrors(req.body)

      if (errors.length > 0)
        return res.status(400).json({ error: true, message: errors })

      const userFound = await prisma.user.findUnique({
        where: {
          email: req.body.email
        }
      })

      if (userFound)
        return res
          .status(400)
          .json({ error: true, message: 'This email is already registred' })

      return handler(req, res)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: true, message: 'Server side error' })
    }
  }
}
