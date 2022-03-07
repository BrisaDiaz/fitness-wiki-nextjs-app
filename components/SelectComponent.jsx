export default function SelectComponent({
  label,
  options,
  globalOption,
  name,
  onChange
}) {
  return (
    <div className="flex flex-col sm:flex-row  gap-2 w-full max-w-sm sm:max-w-xs md:max-w-1/2 lg:w-max sm:items-center">
      <label htmlFor={name} className=" min-w-max">
        {label}
      </label>
      <select
        className="capitalize border border-solid border-gray-200 rounded-lg  p-2  px-4   shadow-sm  eading-tight focus:outline-none focus:ring-2 focus:ring-green-600 outline-offset-1 appearance-none w-full md:w-2/5  lg:w-8/12"
        id={name}
        name={name}
        onChange={onChange}
      >
        {globalOption && <option value={globalOption}>{globalOption}</option>}

        {options.map((option) => (
          <option key={option} value={option.toLocaleLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
