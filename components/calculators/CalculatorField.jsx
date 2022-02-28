export default function CalculatorInput({ children, label, name, direction }) {
  return (
    <div
      className={
        direction === 'vertical'
          ? 'flex flex-col gap-2 justify-center  w-full'
          : 'flex gap-2 items-center w-full'
      }
    >
      <label
        className={'font-semibold text-gray-600 '.concat(
          direction !== 'vertical' && 'w-24'
        )}
        htmlFor={name}
      >
        {label}
      </label>

      {children}
    </div>
  )
}
