import RecipeHeaderInfo from './RecipeHeaderInfo'

export default function RecipeHeader({ hederInfo }) {
  return (
    <article className="flex flex-col sm:flex-row w-full max-w-6xl mx-auto justify-evenly flex-wrap mb-6 text-gray-600 sm:text-lg uppercase gap-1 gap-y-3  px-3  py-3 bg-gray-50  rounded-md  border border-gray-200 responsive-font shadow-sm">
      {hederInfo.map((itemInfo) => (
        <RecipeHeaderInfo
          key={itemInfo.info}
          label={itemInfo.label}
          info={itemInfo.info}
          image={itemInfo.image}
          unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
        />
      ))}
    </article>
  )
}
