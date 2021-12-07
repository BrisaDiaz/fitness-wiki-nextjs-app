import prisma from '@/lib/prisma'

export default async function handler(req, res) {
  const { email } = req.query
  if (email !== 'fixedUser@email.com')
    return res
      .status(405)
      .json({ success: false, message: 'Method not allowed' })
  if (req.method === 'DELETE') return handleDelete(req, res)
  if (req.method === 'POST') return handlePost(req, res)
}

const handleDelete = async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: {
        email: req.query.email
      },
      data: {
        recipes: { set: [] }
      }
    })
    const userCollections = await prisma.collection.findMany({
      where: {
        userId: user.id
      }
    })

    userCollections.forEach(async (collection) => {
      await prisma.collection.update({
        where: {
          id: collection.id
        },
        data: {
          recipes: { set: [] }
        }
      })
      await prisma.collection.delete({
        where: {
          id: collection.id
        }
      })
    })
    return res.status(204).send()
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ success: false, message: 'Server side error' })
  }
}
const handlePost = async (req, res) => {
  try {
    const { recipes } = req.body
    const user = await prisma.user.findUnique({
      where: {
        email: req.query.email
      }
    })
    const pulatedCollection = await prisma.collection.create({
      data: {
        name: 'populated collection',
        userId: user.id,
        image:
          recipes[0].image ||
          'https://tso.tastefullysimple.com/_/media/images/recipe-default-image.png',
        length: recipes.length
      }
    })
    const collectionRecipes = recipes.map(async (recipe) => {
      const recipeFound = await prisma.recipe.findUnique({
        where: {
          recipeId: recipe.id
        }
      })
      if (recipeFound) {
        const updatedRecipe = await prisma.recipe.update({
          where: {
            id: recipeFound.id
          },
          data: {
            collections: {
              connect: { id: pulatedCollection.id }
            },
            users: {
              connect: { id: user.id }
            }
          }
        })
        return updatedRecipe
      }

      const newRecipe = await prisma.recipe.create({
        data: {
          recipeId: recipe.id * 1,
          title: recipe.title,
          image: recipe.image,
          calories: recipe.calories,
          readyInMinutes: recipe.readyInMinutes,
          diets: recipe.diets,
          servings: recipe.servings,

          collections: {
            connect: { id: pulatedCollection.id }
          },
          users: {
            connect: { id: user.id }
          }
        }
      })
      return newRecipe
    })

    await prisma.collection.create({
      data: {
        name: 'empty collection',
        userId: user.id,
        image:
          'https://tso.tastefullysimple.com/_/media/images/recipe-default-image.png',
        length: 0
      }
    })
    return res.status(201).json({ success: true, data: collectionRecipes })
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ success: false, message: 'Server side error' })
  }
}
