import prisma from '@/lib/prisma'
import withAuthorization from '@/middlewares/withAuthorization'
import toKeyValue from '@/utils/recipesStoredDataBySourceId'

async function handler(req, res) {
  if (req.method === 'GET') {
    return handleGet(req, res)
  }
  return res.status(405).json({ success: false, message: 'Method not allowed' })
}
//// returs  all the recipes  from the external api associated  to the user collections
async function handleGet(req, res) {
  try {
    const userRecipes = await prisma.recipe.findMany({
      where: {
        users: {
          some: {
            id: req.userId
          }
        },
        collections: {
          some: {
            id: { not: undefined }
          }
        }
      },
      select: {
        recipeId: true,
        collections: {
          where: {
            userId: req.userId
          },
          select: {
            name: true,
            id: true
          }
        }
      }
    })

    const recipesStoredDataBySourceId = toKeyValue(userRecipes)

    return res.status(200).json({
      success: true,
      results: recipesStoredDataBySourceId,
      totalResults: recipesStoredDataBySourceId.length
    })
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ success: false, message: 'Server side error' })
  }
}

export default withAuthorization(handler)
