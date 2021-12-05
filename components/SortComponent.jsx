export default function SortComponent({
  label,
  options,
  name,
  directions,
  onSortChange,
  onDirectionChange,
  sortDirection
}) {
  return (
    <div className="flex flex-row justify-start flex-wrap sm:flex-nowrap items-center  gap-2 w-full max-w-sm sm:max-w-xs sm:items-center">
      <label htmlFor={name} className="  min-w-max">
        {label}
      </label>

      {directions.map((direction) => (
        <div
          key={direction.value + direction.name}
          className="flex flex-row align-middle"
        >
          <label
            className="min-w-max mr-2"
            htmlFor={direction.name}
            key={label}
          >
            {direction.name}
          </label>
          <input
            className="custom-radio-input self-center min-w-max "
            checked={direction.value === sortDirection}
            onChange={onDirectionChange}
            type="radio"
            id={direction.name}
            key={direction}
            name="sortType"
            value={direction.value}
          />
        </div>
      ))}
      <select
        className="capitalize border border-solid border-gray-200 rounded p-2  px-4 ml-1 shadow-sm  eading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 appearance-none w-full sm:w-max"
        id={name}
        name={name}
        defaultValue="healthyness"
        onChange={onSortChange}
      >
        {options.map((option) => (
          <option key={option} value={option.toLocaleLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
