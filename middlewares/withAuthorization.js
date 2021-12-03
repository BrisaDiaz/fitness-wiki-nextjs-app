import jwt from 'jsonwebtoken'
import prisma from '@/lib/prisma'
import env from '@/env'
export default function withAuthorization(handler) {
  return async (req, res) => {
    try {
      const token = req.headers.authorization.split(' ')[1]

      console.log('-----------------')
      console.log(token)
      console.log('-----------------')
      console.log(env.JWT_SECRET)
      const decoded = await jwt.verify(token, env.JWT_SECRET)

      const userFound = await prisma.user.findUnique({
        where: {
          id: decoded.userId * 1
        }
      })

      if (!userFound)
        return res
          .status(403)
          .json({ success: false, message: 'Forbidden request' })
      // /set as global variable
      req.userId = userFound.id

      return handler(req, res)
    } catch (error) {
      console.log(error)
      return res.status(401).json({ success: false, message: 'Unauthorized' })
    }
  }
}
