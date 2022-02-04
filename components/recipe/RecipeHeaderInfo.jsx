import Image from 'next/image'
export default function RecipeHeaderInfo({ info, label, image }) {
  return (
    <div className="flex flex-row gap-2 ">
      <Image
        unoptimized={process.env.NODE_ENV !== 'PRODUCTION'}
        width={25}
        height={25}
        src={image}
        alt={label}
      />
      <h4>{`${label} ${info}`}</h4>
    </div>
  )
}
