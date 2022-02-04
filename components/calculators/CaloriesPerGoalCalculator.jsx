import useCaloriesPerGoalCalculator from '../../hooks/useCaloriesPerGoalCalculator'
export default function CaloriesPerGoalCalculator({
  defaultCalories,
  goalKcals,
  setGoalKcals
}) {
  const {
    setIntensity,
    setGoal,
    mainGoalsValues,
    intensityOptions,
    intensity,
    goal
  } = useCaloriesPerGoalCalculator({
    defaultCalories,
    setGoalKcals
  })
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4  max-w-xl w-full mx-auto  ">
        {mainGoalsValues?.map((goalOption) => (
          <div
            key={goalOption.title}
            className={'border relative p-4 flex flex-col items-center w-52 h-36 relative text-gray-700 bg-white '.concat(
              goal === goalOption.title
                ? 'border-green-600 shadow-mdGreen'
                : 'border-gray-200 shadow-md '
            )}
          >
            <button
              className="absolute w-full h-full z-10 top-0 left-0 bg-transparent"
              onClick={() => setGoal(goalOption.title)}
            />
            <h4 className="text-2xl text-green-700 text-center  font-semibold capitalize">
              {goalOption.title}
            </h4>
            <span className="text-3xl">
              {goal === goalOption.title && goal !== 'maintain'
                ? goalKcals
                : goalOption.defaultValue}
            </span>
            <p>Kcals/Day</p>
          </div>
        ))}
        <div
          className={'border py-4 flex flex-col items-center  w-52 h-36 relative text-gray-700 bg-white  '.concat(
            goal === undefined
              ? 'border-green-600 shadow-mdGreen'
              : 'border-gray-200 shadow-md '
          )}
        >
          <h4 className="text-2xl text-green-700   text-center  capitalize font-semibold">
            Custom
          </h4>
          <input
            onChange={(e) => setGoalKcals(e.target.value)}
            type="number"
            min="0"
            className="p-2 my-1 w-3/4 border border-gray-200 focus:ring-2 focus:ring-green-600   focus:ring-opacity-50 appearance-none text-center outline-none font-semibold placeholder-gray-500 "
            defaultValue="0000"
          ></input>
          <p>Kcals/Day</p>

          <input
            id="goal"
            type="radio"
            value={undefined}
            name="goal"
            data-testid="customInput"
            className={'absolute top-0 left-0 z-10 w-full h-full  opacity-0 cursor-pointer '.concat(
              goal === undefined && 'hidden'
            )}
            onChange={() => setGoal(undefined)}
          />
        </div>
      </div>
      {intensityOptions.length > 0 && (
        <ul className="mt-4 h-20  w-max mx-auto bg-white ">
          {intensityOptions.map((option) => (
            <li
              key={option.name}
              className="flex items-center gap-1 capitalize"
            >
              <input
                id={option.name}
                type="radio"
                value={option.value}
                checked={intensity.name === option.name}
                name="intensity"
                data-testid={option.name + 'Input'}
                onChange={() => setIntensity(option)}
                className="cursor-pointer "
                aria-labelledby={option.name}
              />
              <legend htmlFor={option.name}>
                {option.name}: {option.percentage}%
              </legend>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
