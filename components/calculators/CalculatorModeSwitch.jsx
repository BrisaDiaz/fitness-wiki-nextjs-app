export default function CalculatorModeSwitch({
  optionSelected,
  setOption,
  options
}) {
  return (
    <ul className=" flex flex-wrap gap-1 -mb-1 z-10 relative">
      {options.map((option) => (
        <li
          key={option.value}
          className={'flex items-center  text-white relative p-2 rounded-t font-medium border  text-sm cursor-pointer '.concat(
            option.value === optionSelected
              ? 'bg-green-600 border-green-600  '
              : 'bg-green-500 border-green-400'
          )}
        >
          <button
            className="absolute w-full h-full z-10 top-0 left-0 bg-transparent cursor-pointer "
            onClick={() => setOption(option.value)}
          />

          <label htmlFor={option.value}>{option.info}</label>
        </li>
      ))}
    </ul>
  )
}
