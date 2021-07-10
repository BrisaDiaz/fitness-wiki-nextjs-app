export default function SelectComponent({
  label,
  options,
  globalOption,
  name,
  onChange,
}) {
  return (
    <div className="flex flex-row  gap-x-1">
      <label htmlFor={name} className="mt-1">
        {label}
      </label>

      <select
        className="capitalize border border-solid border-gray-200 rounded p-1  px-2   shadow-sm  eading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 appearance-none"
        id={name}
        name={name}
        onChange={onChange}
      >
        {globalOption && <option value={globalOption}>{globalOption}</option>}

        {options.map(option => (
          <option key={option} value={option.toLocaleLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
