import RecipeHeaderInfo from './RecipeHeaderInfo'

export default function RecipeHeader({ hederInfo }) {
  return (
    <article className="flex flex-col sm:flex-row w-full max-w-6xl  mx-auto justify-evenly flex-wrap mb-6  gap-2 gap-y-3  p-4 bg-gray-50  rounded-md  border border-gray-200 responsive-font shadow-sm">
      {hederInfo.map((itemInfo) => (
        <RecipeHeaderInfo
          key={itemInfo.info}
          label={itemInfo.label}
          info={itemInfo.info}
          svg={itemInfo.svg}
        />
      ))}
    </article>
  )
}
