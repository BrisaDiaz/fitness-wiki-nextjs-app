export default function CalculatorInput({
  name,
  placeholder,
  maxValue,
  step,
  register,
  errors
}) {
  return (
    <input
      id={name}
      className={'p-2 md:pr-0 border border-gray-300 w-full ml-auto placeholder-gray-500 placeholder-end focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 appearance-none rounded '.concat(
        errors[name] && 'ring-red-400 ring-2 '
      )}
      placeholder={placeholder}
      type="number"
      step={step}
      min="0"
      max={maxValue}
      name={name}
      {...register}
    />
  )
}
