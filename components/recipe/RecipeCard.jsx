import Link from 'next/link'
import Image from 'next/image'
export default function RecipeCard({ recipe }) {
  return (
    <article className=" pb-4 sm:p-4 flex flex-col sm:flex-row  sm:items-center border border-solid border-gray-200 shadow-md rounded max-w-xs sm:max-w-none h-auto transition ease-in-out transform hover:shadow-lg ">
      <div className=" mx-auto sm:mx-0 h-44 overflow-y-hidden w-full sm:w-3/12  relative flex items-center  sm:h-24  justify-center	rounded-t ">
        <Image
          unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
          className="rounded-t shadow mx-auto sm:self-center sm:rounded"
          width={320}
          height={260}
          src={recipe?.image}
          alt={recipe?.title}
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
                {recipe?.title}
              </a>
            </Link>
          </div>
          <div className="flex flex-row  justify-between gap-x-2 flex-wrap w-full">
            <p className="opacity-80 leading-5 text-sm ">
              <span className="text-gray-600  ">Energy:</span>
              {` ${recipe?.nutrition?.nutrients[0]?.amount} ${recipe?.nutrition?.nutrients[0]?.unit}`}
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
                {recipe?.readyInMinutes}
                min
              </p>
            </div>
          </div>
          <p className="opacity-80 leading-5 text-sm ">
            <span className="text-gray-600  ">Servings:</span>
            {` ${recipe?.servings} (${recipe?.nutrition?.weightPerServing?.amount} ${recipe?.nutrition?.weightPerServing?.unit})`}
          </p>
          <p className="opacity-80 eading-none text-sm ">
            <span className="text-gray-600 mr-1 ">Diets:</span>
            {recipe?.diets.join(' - ') || 'unspecify'}
          </p>
        </div>
      </div>
    </article>
  )
}
