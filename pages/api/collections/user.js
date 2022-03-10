import prisma from '@/lib/prisma'
import withAuthorization from '@/middleware/withAuthorization'

async function handler(req, res) {
  if (req.method === 'POST') {
    return handlePost(req, res)
  }
  if (req.method === 'GET') {
    return handleGet(req, res)
  }
  return res.status(405).json({ success: false, message: 'Method not allowed' })
}

/// creates a new  collection
async function handlePost(req, res) {
  const { name } = req.body
  try {
    const newCollection = await prisma.collection.create({
      data: {
        name,
        userId: req.userId,
        image:
          'https://tso.tastefullysimple.com/_/media/images/recipe-default-image.png',
        length: 0
      }
    })
    return res.status(201).json({ success: true, data: newCollection })
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ success: false, message: 'Server side error' })
  }
}

//// get all the user collections data
async function handleGet(req, res) {
  const { offset, number } = req.query

  try {
    const collections = await prisma.collection.findMany({
      skip: offset * 1 || undefined,
      take: number * 1 || undefined,

      where: {
        userId: req.userId
      },
      orderBy: {
        updatedAt: 'desc'
      }
    })
    const totalResults = await prisma.collection.count({
      where: {
        userId: req.userId
      }
    })

    return res.status(200).json({
      success: true,
      data: collections,
      totalResults
    })
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ success: false, message: 'Server side error' })
  }
}
export default withAuthorization(handler)
