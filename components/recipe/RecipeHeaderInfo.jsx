export default function RecipeHeaderInfo({ info, label, svg }) {
  return (
    <div className="flex flex-row gap-2 sm:text-sm uppercase">
      {svg}

      <h4>
        {`${label} `}
        <span className="text-gray-600  capitalize  ">{info}</span>
      </h4>
    </div>
  )
}
