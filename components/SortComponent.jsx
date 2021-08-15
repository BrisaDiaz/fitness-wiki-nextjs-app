import { Fragment } from 'react'

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
    <div className="flex flex-row  gap-x-1 w-full max-w-sm sm:max-w-xs">
      <label htmlFor={name} className="mt-1  min-w-max">
        {label}
      </label>

      {directions.map((direction) => (
        <Fragment key={direction.value + direction.name}>
          <label
            className="mt-1 min-w-max"
            htmlFor={direction.name}
            key={label}
          >
            {direction.name}
          </label>
          <input
            className="custom-radio-input self-center min-w-max"
            checked={direction.value === sortDirection}
            onChange={onDirectionChange}
            type="radio"
            id={direction.name}
            key={direction}
            name="sortType"
            value={direction.value}
          />
        </Fragment>
      ))}
      <select
        className="capitalize border border-solid border-gray-200 rounded p-1  px-2   shadow-sm  eading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 appearance-none w-full"
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
