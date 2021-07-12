import Image from 'next/Image'
export default function RecipeHeaderInfo({ info, label, image }) {
  return (
    <div className="flex flex-row gap-2 ">
      <img width={25} height={25} src={image} alt={label} />
      <h4>{`${label} ${info}`}</h4>
    </div>
  )
}
