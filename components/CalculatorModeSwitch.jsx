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
          className={'flex items-center  text-white relative p-2 rounded-t font-medium border border-green-500 text-sm cursor-pointer '.concat(
            option.value === optionSelected ? 'bg-green-500' : 'bg-green-300'
          )}
        >
          <input
            className="opacity-0 absolute z-10 w-full h-full cursor-pointer"
            onChange={(e) => setOption(e.target.value)}
            type="radio"
            id={option.value}
            value={option.value}
            name="planType"
            checked={optionSelected === option.value}
          />
          <label htmlFor={option.value} className="ml-1 cursor-pointer ">
            {option.info}
          </label>
        </li>
      ))}
    </ul>
  )
}
