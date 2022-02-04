import prisma from '@/lib/prisma'
import withAuthorization from '@/middleware/withAuthorization'
function handler(req, res) {
  if (req.method === 'GET') {
    return handleGet(req, res)
  }
  if (req.method === 'POST') {
    return handlePost(req, res)
  }
  if (req.method === 'PUT') {
    return handleUpdate(req, res)
  }

  if (req.method === 'DELETE') {
    return handleDelete(req, res)
  }
}
//// returns collection related info
async function handleGet(req, res) {
  const id = req.query.id * 1

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
    return res.status(200).json({
      success: true,
      data: collection
    })
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ success: false, message: 'Server side error' })
  }
}
/// creates or link existing recipes to the collection
async function handlePost(req, res) {
  const { recipeId, title, image, calories, readyInMinutes, diets, servings } =
    req.body
  const collectionId = req.query.id * 1

  try {
    // / creates if the recipe reference dose not exits already
    let recipeRecord

    const foundRecipe = await prisma.recipe.findUnique({
      where: { recipeId: recipeId * 1 }
    })
    if (foundRecipe) {
      recipeRecord = await prisma.recipe.update({
        where: { recipeId: recipeId * 1 },
        data: {
          collections: {
            connect: { id: collectionId }
          },
          users: {
            connect: { id: req.userId }
          }
        }
      })
    } else {
      recipeRecord = await prisma.recipe.create({
        data: {
          recipeId: recipeId * 1,
          title,
          image,
          calories,
          readyInMinutes,
          diets,
          servings,

          collections: {
            connect: { id: collectionId }
          },
          users: {
            connect: { id: req.userId }
          }
        }
      })
    }

    const collection = await prisma.collection.findUnique({
      where: {
        id: collectionId
      }
    })

    await prisma.collection.update({
      where: {
        id: collectionId
      },
      data: {
        image: collection.length === 0 ? image : undefined,
        length: {
          increment: 1
        }
      }
    })
    return res.status(200).json({ success: true, data: recipeRecord })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: 'Server side error,recipe storing fail'
    })
  }
}
/// rename collection
async function handleUpdate(req, res) {
  const { newName } = req.body
  const collectionId = req.query.id * 1
  try {
    const updatedCollection = await prisma.collection.update({
      where: {
        id: collectionId
      },
      data: {
        name: newName
      }
    })
    return res.status(200).json({ success: true, data: updatedCollection })
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ success: false, message: 'Server side error' })
  }
}
/// delete collection
async function handleDelete(req, res) {
  const id = req.query.id * 1
  try {
    const recipesInCollection = await prisma.recipe.findMany({
      where: {
        collections: {
          some: {
            id: id
          }
        }
      },
      select: {
        id: true
      }
    })

    await prisma.user.update({
      where: { id: req.userId },
      data: {
        recipes: {
          disconnect: [...recipesInCollection]
        }
      }
    })
    await prisma.collection.update({
      where: {
        id: id
      },
      data: {
        recipes: {
          set: []
        }
      }
    })
    await prisma.collection.delete({
      where: {
        id: id
      }
    })
    return res
      .status(204)
      .json({ success: true, message: 'Collection deleted successfully' })
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ success: false, message: 'Server side error' })
  }
}

export default withAuthorization(handler)
