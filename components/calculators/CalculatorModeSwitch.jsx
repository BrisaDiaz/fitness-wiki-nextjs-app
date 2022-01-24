export default function CalculatorModeSwitch({
  optionSelected,
  setOption,
  options
}) {
  return (
    <ul className=" flex flex-wrap gap-1">
      {options.map((option) => (
        <li
          key={option.value}
          className={'flex items-center  text-white relative p-2 rounded-t font-medium border  text-sm cursor-pointer '.concat(
            option.value === optionSelected
              ? 'bg-green-600 border-green-600  '
              : 'bg-green-300 border-green-400'
          )}
        >
          <button
            className="absolute w-full h-full z-10 top-0 left-0 bg-transparent"
            onClick={() => setOption(option.value)}
          />

          <label htmlFor={option.value} className="ml-1 cursor-pointer ">
            {option.info}
          </label>
        </li>
      ))}
    </ul>
  )
}
