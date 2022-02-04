import Head from 'next/head'
import Image from 'next/image'
import DefaultErrorPage from 'next/error'
import { getSession } from 'next-auth/client'
import { getData } from '../../utils/spoonacularFetchConfig'
import RecipeHeader from '@/components/recipe/RecipeHeader'
import ListSheet from '@/components/recipe/ListSheet'
import ListSheetItem from '@/components/recipe/ListSheetItem'
import RecipeDirections from '@/components/recipe/RecipeDirections'

export default function Recipe(props) {
  if (props.error) return <DefaultErrorPage statusCode={props.statusCode} />

  let { recipe, instructions, equipment, nutrition, ingredients } = props

  const hederInfo = [
    { label: 'servers:', info: recipe?.servings, image: '/utensils-solid.svg' },
    {
      label: 'prep time:',
      info: ` ${recipe?.readyInMinutes}min`,
      image: '/clock-regular.svg'
    },
    {
      label: 'energy:',
      info: ` ${nutrition?.calories?.value} Kcal`,
      image: '/heartbeat-solid.svg'
    },
    {
      label: 'diets:',
      info:
        recipe?.diets?.length > 0 ? recipe?.diets?.join(' - ') : 'unspecified',
      image: '/seedling-solid.svg'
    }
  ]

  return (
    <>
      <Head>
        <title>{recipe.title}</title>
        <meta
          name="description"
          content={`step by step instructions how to make ${recipe.title}`}
        />
        <meta
          name="keywords"
          content={ingredients?.join(',').concat(recipe?.diets?.join(','))}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="px-1 flex flex-col items-center mb-10">
        <h1 className="page-title ">{recipe.title}</h1>

        <RecipeHeader hederInfo={hederInfo} />

        <section className="mx-auto px-1 sm:px-2 justify-center  gap-0 max-w-6xl  flex flex-col-reverse lg:flex-row  w-full sm:justify-evenly ">
          <section className="   p-4  md:px-6 md:pb-6 text-sm sm:text-base w-full border rounded border-gray-200 shadow-lg">
            <div className="mx-auto w-full sm:py-1 relative ">
              <h2 className="uppercase  text-2xl font-bold text-green-600  mb-4 ml-2">
                summary
              </h2>
              <div className="w-full max-w-sm mr-1 sm:mr-3 mb-3 sm:float-left">
                <Image
                  className="rounded-md float-left  "
                  width={400}
                  height={280}
                  layout="responsive"
                  placeholder="blur"
                  blurDataURL="/recipe-placeholder.png"
                  unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
                  src={recipe?.image}
                  alt={recipe?.title}
                />
              </div>
              <div
                className=""
                dangerouslySetInnerHTML={{ __html: recipe.summary }}
              />
            </div>
            {instructions && <RecipeDirections steps={instructions} />}
          </section>
          <section className="mb-10 lg:mb-0 px-0 w-full sm:px-2 md:flex md:gap-2  lg:flex-col  lg:w-2/5 mx-auto">
            <ListSheet title="Ingredients">
              {ingredients?.map((ingredient) => (
                <ListSheetItem
                  key={ingredient?.id}
                  name={ingredient?.name}
                  info={`${ingredient?.name} ${ingredient?.measures?.metric?.amount} ${ingredient?.measures?.metric?.unitShort}`}
                />
              ))}
            </ListSheet>
            <div className="mt-3" />
            <ListSheet title="equipment">
              {equipment.length > 0 &&
                equipment?.map((equip) => (
                  <ListSheetItem
                    className="mt-3"
                    key={equip?.name}
                    name={equip?.name}
                    info={equip?.name}
                  />
                ))}
            </ListSheet>
          </section>
        </section>
      </section>
    </>
  )
}

export async function getServerSideProps({ query, req }) {
  const session = await getSession({ req })
  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false
      }
    }
  }
  const recipeId = parseInt(query.id)
  const [recipe, equipment] = await Promise.all([
    getData(`${recipeId}/information`, 'addRecipeInformation=true'),
    getData(`/${recipeId}/equipmentWidget.json`)
  ])

  if (!recipe) {
    return {
      props: {
        error: true,
        statusCode: 404
      }
    }
  }

  const nutrition = await getData('guessNutrition', `title=${recipe.title}`)

  let instructions = recipe?.analyzedInstructions[0]?.steps || null
  return {
    props: {
      serverError: false,
      recipe,
      equipment: equipment?.equipment,
      nutrition,
      ingredients: recipe.extendedIngredients,
      instructions
    }
  }
}
