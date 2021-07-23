export default function CalculatorSelect({
  options,
  fullWidth,
  register,
  testId
}) {
  return (
    <select
      className={'p-2 border border-gray-300 text-gray-500 text-center  focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 appearance-none '.concat(
        fullWidth ? ' w-full ' : 'w-8/12 '
      )}
      {...register}
      data-testid={testId}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.info}
        </option>
      ))}
    </select>
  )
}
