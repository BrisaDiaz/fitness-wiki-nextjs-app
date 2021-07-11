import Link from 'next/link';
import Image from 'next/Image';
export default function RecipeCard({ recipe }) {
  const pricipalDiets = recipe?.diets.slice(0,4)
  return (
    <article className="p-2   flex flex-col sm:flex-row  sm:align-middle border border-solid border-gray-200 shadow-md rounded max-w-xs sm:max-w-none h-auto">
      <div     className=" mx-auto sm:mx-0 w-full sm:w-28 sm:h-24 h-36  relative	">
      <Image
 unoptimized={process.env.ENVIRONMENT !== "PRODUCTION"}
  className="rounded shadow mx-auto sm:self-center "
               layout="fill"
        src={recipe?.image}
        alt={recipe?.title}
      />
      </div>
      <div className="flex flex-col justify-start px-2 w-full">
        <div className="sm:px-2  mt-2 sm:mt-0">
          <Link href={`/recipe/${recipe?.id}`} passHref>
            <a
              href="!#"
              className="mb-5 sm:mb-1 text-lg font-bold text-green-400 leading-5	 "
            >
              {recipe?.title}
            </a>
          </Link>
          <div className="flex flex-row  justify-between gap-x-2 flex-wrap w-full">
            <p className="opacity-80">
              <span className="text-gray-600  ">Energy:</span>
              {` ${recipe?.nutrition?.nutrients[0]?.amount} ${recipe?.nutrition?.nutrients[0]?.unit}`}
            </p>
            <div className="flex flex-row  gap-1 ">
              <Image
                className="w-4 align-self-start"
                src="/clock-regular.svg"
           width={15}
           height={15}
                alt="time"
              />
              <p className="opacity-80">
                {recipe?.readyInMinutes}
                min
              </p>
            </div>
          </div>
          <p className="opacity-80">
            <span className="text-gray-600  ">Servings:</span>
            {` ${recipe?.servings} (${recipe?.nutrition?.weightPerServing?.amount} ${recipe?.nutrition?.weightPerServing?.unit})`}
          </p>
        </div>
        <div className="flex flex-row justify-end gap-1 mt-3 flex-wrap">
          {pricipalDiets?.map(diet => (
            <span
              key={diet}
              className="text-sm capitalize font-semibold text-gray-500  px-2 py-0.5 border-2 border-green-300 rounded-full shadow w-max min-w-max"
            >
              {diet}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
