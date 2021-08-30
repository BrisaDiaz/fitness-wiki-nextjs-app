import prisma from '@/lib/prisma'

export default async function handler(req, res) {
  try {
    const { email } = req.query
    if (email !== 'testing@email.com' || req.method !== 'DELETE')
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed' })
    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    })
    if (user) {
      await prisma.user.delete({
        where: {
          id: user.id
        }
      })
    }
    return res
      .status(204)
      .json({ success: false, message: 'Testing user deleted' })
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ success: false, message: 'Deleting testing user fail' })
  }
}
