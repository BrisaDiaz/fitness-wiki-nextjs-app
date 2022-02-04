import prisma from '@/lib/prisma'
import withAuthorization from '@/middleware/withAuthorization'

async function handler(req, res) {
  if (req.method === 'GET') {
    return handleGet(req, res)
  }
  return res.status(405).json({ success: false, message: 'Method not allowed' })
}

/// get all the recipes related to the collection
async function handleGet(req, res) {
  const id = req.query.id * 1
  const offset = req.query.offset * 1
  const number = req.query.number * 1
  try {
    const collection = await prisma.collection.findUnique({
      where: {
        id: id
      }
    })

    if (!collection || collection?.userId !== req.userId)
      return res
        .status(404)
        .json({ success: false, message: 'Resource not found' })
    const recipes = await prisma.recipe.findMany({
      skip: offset || undefined,
      take: number || undefined,
      where: {
        collections: {
          some: {
            id: id
          }
        }
      }
    })

    return res.status(200).json({
      success: true,
      results: recipes,
      totalResults: collection.length
    })
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ success: false, message: 'Server side error' })
  }
}
export default withAuthorization(handler)
