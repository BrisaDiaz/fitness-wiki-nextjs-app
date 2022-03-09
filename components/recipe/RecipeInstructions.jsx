export default function RecipeInstructions({ steps }) {
  return (
    <article className="mt-5">
      <h2 className="capitalize text-xl font-bold text-green-600  mb-4">
        instructions
      </h2>

      {steps?.map((step) => (
        <div className=" mb-1 ml-2" key={step.number}>
          <p>
            <span className="font-bold text-green-600  mr-1">
              {step.number}.
            </span>
            {step.step}
          </p>
        </div>
      ))}
    </article>
  )
}
