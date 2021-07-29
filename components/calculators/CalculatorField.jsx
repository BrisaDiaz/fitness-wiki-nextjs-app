export default function CalculatorInput({ children, label, name, direction }) {
  return (
    <div
      className={
        direction === 'vertical'
          ? 'flex flex-col gap-2 justify-center  w-full'
          : 'flex gap-1 items-center w-full'
      }
    >
      <div
        className={
          direction === 'vertical'
            ? 'flex  items-cente justify-center gap-y-3  w-full '
            : ' flex items-center w-full'
        }
      >
        <label
          className={'font-semibold text-gray-600 '.concat(
            direction !== 'vertical' && 'w-1/2 '
          )}
          htmlFor={name}
        >
          {label}
        </label>
      </div>
      {children}
    </div>
  )
}
