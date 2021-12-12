export default function RecipeDirections({ steps }) {
  return (
    <article className="mt-4 ">
      <h2 className="uppercase text-xl font-bold text-green-600  my-2 ">
        directions
      </h2>

      {steps?.map((step) => (
        <div className=" mb-1 ml-2" key={step.number}>
          <p>
            <span className="font-bold text-lg text-green-600  mr-1">
              {step.number}.
            </span>
            {step.step}
          </p>
        </div>
      ))}
    </article>
  )
}
