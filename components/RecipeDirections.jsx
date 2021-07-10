export default function RecipeDirections({ steps }) {
  return (
    <article className="mt-2 ">
      <h2 className="uppercase text-xl sm:text-2xl  font-bold text-green-400 mb-2 ">
        directions
      </h2>

      {steps?.map(step => (
        <div className=" mb-1" key={step.number}>
          <p>
            <span className="font-bold text-md text-green-400 mr-1">
              {step.number}.
            </span>
            {step.step}
          </p>
        </div>
      ))}
    </article>
  );
}
