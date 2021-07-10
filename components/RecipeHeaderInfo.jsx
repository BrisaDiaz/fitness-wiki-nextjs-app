export default function RecipeHeaderInfo({ info, label, image }) {
  return (
    <div className="flex flex-row gap-2 ">
      <img className="w-6 " src={image} alt={label} />
      <h4>{`${label} ${info}`}</h4>
    </div>
  );
}
