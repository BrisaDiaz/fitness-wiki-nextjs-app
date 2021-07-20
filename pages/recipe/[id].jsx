import Head from 'next/head'
import Image from 'next/image'
import { getSession } from 'next-auth/client'
import RecipeHeader from '@/components/RecipeHeader'
import ListSheet from '@/components/ListSheet'
import ListSheetItem from '@/components/ListSheetItem'
import RecipeDirections from '@/components/RecipeDirections'
const config = {
  method: 'GET',
  credentials: 'include',
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Mobile Safari/537.36'
  }
}
export default function Recicipe(props) {
  if (props.serverError)
    return (
      <h2 className="mt-2 text-green-400 text-2xl font-bold">
        Something went wrong
      </h2>
    )

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
        <meta name="description" content="recipe ingredients,process" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-1 flex flex-col items-center mb-10">
        <h1 className="text-center text-3xl font-bold sm:text-4xl my-8 text-green-400  ">
          {recipe.title}
        </h1>

        <RecipeHeader hederInfo={hederInfo} />

        <section className="mx-auto px-1 sm:px-0  gap-0 max-w-6xl  flex flex-col-reverse sm:flex-row  w-full sm:justify-evenly ">
          <section className="  p-2 sm:p-4   w-full border rounded border-gray-200 shadow-lg">
            <div className="mx-auto w-full sm:py-1 relative ">
              <h2 className="uppercase  text-2xl font-bold text-green-400 mb-2 ml-2">
                summary
              </h2>

              <div className="w-full max-w-xs max h-56 mr-1 sm:mr-3 float-left">
                <Image
                  className="rounded-md float-left  "
                  width={400}
                  height={280}
                  layout="responsive"
                  unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
                  src={recipe?.image}
                  alt={recipe?.title}
                />
              </div>

              <div
                className="break-words leading-loose"
                dangerouslySetInnerHTML={{ __html: recipe.summary }}
              />
            </div>
            {instructions && <RecipeDirections steps={instructions} />}
          </section>
          <section className="mb-10 sm:mb-0 px-0 w-full sm:px-2 sm:w-5/12	 md:w-96 lg:w-2/5 mx-auto">
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
      </main>
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

  const recipeUrl = `https://api.spoonacular.com/recipes/${query.id}/information?apiKey=${process.env.API_KEY}&addRecipeInformation=true`

  const equipmentUrl = `https://api.spoonacular.com/recipes/${query.id}/equipmentWidget.json?apiKey=${process.env.API_KEY}`

  const [recipeResponse, equipmentResponse] = await Promise.all([
    fetch(recipeUrl, config),
    fetch(equipmentUrl, config)
  ])
  const recipe = await recipeResponse.json()
  const equipment = await equipmentResponse.json()

  const nutritionUrl = `https://api.spoonacular.com/recipes/guessNutrition?apiKey=${process.env.API_KEY}&title=${recipe.title}`

  const nutritionResponse = await fetch(nutritionUrl, config)
  const nutrition = await nutritionResponse.json()

  if (!recipeResponse.ok || !nutritionResponse.ok || !equipmentResponse.ok) {
    return {
      props: {
        serverError: true
      }
    }
  }
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
