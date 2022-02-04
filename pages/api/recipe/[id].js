import prisma from '@/lib/prisma'
import withAuthorization from '@/middleware/withAuthorization'

async function handler(req, res) {
  if (req.method === 'DELETE') {
    return handleDelete(req, res)
  }
  if (req.method === 'PUT') {
    return handleUpdate(req, res)
  }
  return res.status(405).json({ success: false, message: 'Method not allowed' })
}
//// remove the relationship between the recipe with the user and collection
async function handleDelete(req, res) {
  const { fromCollection, id } = req.query
  try {
    await prisma.collection.update({
      where: {
        id: fromCollection * 1
      },
      data: {
        length: {
          decrement: 1
        },
        recipes: {
          disconnect: { id: id * 1 }
        }
      }
    })
    await prisma.recipe.update({
      where: {
        id: id * 1
      },
      data: {
        collections: {
          disconnect: { id: fromCollection * 1 }
        },
        users: {
          disconnect: { id: req.userId }
        }
      }
    })
    return res
      .status(204)
      .json({ success: true, message: 'recipe deleted successfully' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: 'Server side error,recipe delete fail'
    })
  }
}

//// moves the recipe to otheir collection belonging to the user
async function handleUpdate(req, res) {
  const { sourceCollectionId, targetCollectionId } = req.body
  const recipeId = req.query.id * 1
  try {
    await prisma.collection.update({
      where: {
        id: sourceCollectionId * 1
      },
      data: {
        length: {
          decrement: 1
        },
        recipes: {
          disconnect: {
            id: recipeId
          }
        }
      }
    })
    await prisma.recipe.update({
      where: {
        id: recipeId
      },
      data: {
        collections: {
          connect: { id: targetCollectionId },
          disconnect: { id: sourceCollectionId }
        }
      }
    })

    const targetCollection = await prisma.collection.findUnique({
      where: {
        id: targetCollectionId * 1
      }
    })
    let newImage
    /// set the recipe image if is the first record
    if (targetCollection.length === 0) {
      const recipe = await prisma.recipe.findUnique({
        where: {
          id: recipeId
        }
      })
      newImage = recipe.image
    }

    await prisma.collection.update({
      where: {
        id: targetCollectionId * 1
      },
      data: {
        image: newImage,
        length: {
          increment: 1
        }
      }
    })
    return res
      .status(200)
      .json({ success: true, message: 'Recipe translated successfully' })
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ success: false, message: 'Recipe translation fail' })
  }
}

export default withAuthorization(handler)
