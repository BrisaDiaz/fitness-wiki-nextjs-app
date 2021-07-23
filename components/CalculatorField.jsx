import Image from 'next/image'

export default function CalculatorInput({
  children,
  label,
  name,
  image,
  direction
}) {
  return (
    <div
      className={
        direction === 'vertical'
          ? 'flex flex-col gap-2 justify-center  w-full'
          : 'flex gap-1 items-center'
      }
    >
      <div
        className={
          direction === 'vertical'
            ? 'flex  gap-2 items-cente  w-full'
            : ' flex gap-2 items-center w-4/12'
        }
      >
        <Image
          src={image}
          alt={name}
          unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
          width={25}
          height={25}
        />
        <label className="font-semibold text-gray-600" htmlFor={name}>
          {label}
        </label>
      </div>
      {children}
    </div>
  )
}
