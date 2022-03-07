imp
export default function RecipeHeaderInfo({ info, label, svg }) {
  return (
    <div className="flex flex-row gap-2 ">
      {svg}

      <h4>{`${label} ${info}`}</h4>
    </div>
  )
}
