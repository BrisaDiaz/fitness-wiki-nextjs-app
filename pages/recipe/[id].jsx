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
    {
      label: 'servers:',
      info: recipe?.servings,

      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={25}
          height={25}
          fill="#16A34A"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
        </svg>
      )
    },
    {
      label: 'prep time:',
      info: ` ${recipe?.readyInMinutes}min`,

      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={25}
          height={25}
          fill="#16A34A"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
          <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
        </svg>
      )
    },
    {
      label: 'energy:',
      info: nutrition?.calories
        ? ` ${nutrition?.calories?.value} Kcal`
        : 'unspecified',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          width={25}
          height={25}
          fill="#16A34A"
        >
          <path d="M352.4 243.8l-49.83 99.5c-6.009 12-23.41 11.62-28.92-.625L216.7 216.3l-30.05 71.75L88.55 288l176.4 182.2c12.66 13.07 33.36 13.07 46.03 0l176.4-182.2l-112.1 .0052L352.4 243.8zM495.2 62.86c-54.36-46.98-137.5-38.5-187.5 13.06L288 96.25L268.3 75.92C218.3 24.36 135.2 15.88 80.81 62.86C23.37 112.5 16.84 197.6 60.18 256h105l35.93-86.25c5.508-12.88 23.66-13.12 29.54-.375l58.21 129.4l49.07-98c5.884-11.75 22.78-11.75 28.67 0l27.67 55.25h121.5C559.2 197.6 552.6 112.5 495.2 62.86z" />
        </svg>
      )
    },
    {
      label: 'diets:',
      info:
        recipe?.diets?.length > 0 ? recipe?.diets?.join(' - ') : 'unspecified',

      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={25}
          height={25}
          fill="#16A34A"
          viewBox="0 0 512 512"
        >
          <path d="M64 95.1H0c0 123.8 100.3 224 224 224v128C224 465.6 238.4 480 255.1 480S288 465.6 288 448V320C288 196.3 187.7 95.1 64 95.1zM448 32c-84.25 0-157.4 46.5-195.8 115.3c27.75 30.12 48.25 66.88 59 107.5C424 243.1 512 147.9 512 32H448z" />
        </svg>
      )
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
      <section className="page px-2  flex flex-col items-center mb-10">
        <h1 className="page-title ">{recipe.title}</h1>

        <RecipeHeader hederInfo={hederInfo} />

        <section className="justify-center  gap-0  flex flex-col-reverse lg:flex-row  w-full sm:justify-evenly ">
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
            {equipment.length > 0 && (
              <ListSheet title="equipment">
                {equipment?.map((equip) => (
                  <ListSheetItem
                    className="mt-3"
                    key={equip?.name}
                    name={equip?.name}
                    info={equip?.name}
                  />
                ))}
              </ListSheet>
            )}
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
