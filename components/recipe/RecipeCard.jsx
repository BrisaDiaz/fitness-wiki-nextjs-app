import Link from 'next/link'
import Image from 'next/image'
export default function RecipeCard({ recipe }) {
  const recipeData = {
    image: recipe.image,
    title: recipe.title,
    servings: `${recipe?.servings} (${recipe?.nutrition?.weightPerServing?.amount} ${recipe?.nutrition?.weightPerServing?.unit})`,
    diets: recipe?.diets.join(' - ') || 'unspecify',
    readyInMinutes: recipe?.readyInMinutes,
    calories: `${recipe?.nutrition?.nutrients[0]?.amount} ${recipe?.nutrition?.nutrients[0]?.unit}`
  }
  return (
    <article className="w-72 mx-auto  pb-4 sm:p-4 flex flex-col sm:flex-row  sm:items-center shadow-md rounded sm:w-full h-auto transition ease-in-out transform hover:shadow-lg ">
      <div className=" mx-auto sm:mx-0 h-44 overflow-y-hidden w-full sm:w-3/12  relative flex items-center  sm:h-24  justify-center	rounded-t ">
        <Image
          unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
          className="rounded-t shadow mx-auto sm:self-center sm:rounded"
          width={320}
          height={260}
          src={recipeData?.image}
          alt={recipeData?.title}
        />
      </div>
      <div className="flex flex-col justify-start px-3 w-full sm:w-9/12">
        <div className="sm:px-2  mt-2 sm:mt-0 ">
          <div className="overflow-x-hidden mb-1 w-full overflow-ellipsis .. text-green-400 .">
            <Link href={`/recipe/${recipe?.id}`} passHref>
              <a
                href="!#"
                className=" text-lg  w-full leading-3 font-serif whitespace-nowrap  	 "
              >
                {recipeData?.title}
              </a>
            </Link>
          </div>
          <div className="flex flex-row  justify-between gap-x-2 flex-wrap w-full">
            <p className="opacity-80 leading-5 text-sm ">
              <span className="text-gray-600  ">Energy:</span>
              {` ${recipeData.calories}`}
            </p>
            <div className="flex flex-row  gap-1  ">
              <Image
                className="w-4 align-self-start"
                src="/clock-regular.svg"
                unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
                width={15}
                height={15}
                alt="time"
              />
              <p className="opacity-80 leading-5 text-sm ">
                {recipeData?.readyInMinutes}
                min
              </p>
            </div>
          </div>
          <p className="opacity-80 leading-5 text-sm ">
            <span className="text-gray-600  ">Servings:</span>
            {` ${recipeData?.servings}`}
          </p>
          <p className="opacity-80 eading-none text-sm ">
            <span className="text-gray-600 mr-1 ">Diets:</span>
            {recipeData?.diets}
          </p>
        </div>
      </div>
    </article>
  )
}
