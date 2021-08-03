import useCaloriesPerGoaldCalculator from '../../hooks/useCaloriesPerGoaldCalculator'
export default function CaloriesPerGoaldCalculator({
  defaultCalories,
  goaldKcals,
  setGoaldKcals
}) {
  const {
    setIntencity,
    setGoald,
    mainGoaldsValues,
    intencityOptions,
    intencity,
    goald
  } = useCaloriesPerGoaldCalculator({
    defaultCalories,
    setGoaldKcals
  })
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4  max-w-xl w-full mx-auto ">
        {mainGoaldsValues?.map((goalOption) => (
          <div
            key={goalOption.title}
            className={'border  p-4 flex flex-col items-center w-52 h-36 relative text-gray-700 '.concat(
              goald === goalOption.title
                ? 'border-green-500 shadow-mdGreen'
                : 'border-gray-200 shadow-md '
            )}
          >
            <h4 className="text-2xl text-green-500 text-center  font-semibold capitalize">
              {goalOption.title}
            </h4>
            <span className="text-3xl">
              {goald === goalOption.title && goald !== 'maintain'
                ? goaldKcals
                : goalOption.defaultValue}
            </span>
            <p>Kcals/Day</p>

            <input
              id={goalOption.title}
              type="radio"
              value={goalOption.title}
              name="goald"
              data-testid={goalOption.title + 'Input'}
              onChange={() => setGoald(goalOption.title)}
              className="absolute top-0 left-0 z-10 w-full h-full  opacity-0 cursor-pointer "
            />
          </div>
        ))}
        <div
          className={'border py-4 flex flex-col items-center  w-52 h-36 relative text-gray-700  '.concat(
            goald === undefined
              ? 'border-green-500 shadow-mdGreen'
              : 'border-gray-200 shadow-md '
          )}
        >
          <h4 className="text-2xl text-green-500 text-center  capitalize font-semibold">
            Custom
          </h4>
          <input
            onChange={(e) => setGoaldKcals(e.target.value)}
            type="number"
            min="0"
            className="p-2 my-1 w-3/4 border border-gray-200 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 appearance-none text-center outline-none font-semibold placeholder-gray-500 "
            defaultValue="0000"
          ></input>
          <p>Kcals/Day</p>

          <input
            id="goald"
            type="radio"
            value={undefined}
            name="goald"
            data-testid="customInput"
            className={'absolute top-0 left-0 z-10 w-full h-full  opacity-0 cursor-pointer '.concat(
              goald === undefined && 'hidden'
            )}
            onChange={() => setGoald(undefined)}
          />
        </div>
      </div>
      {intencityOptions.length > 0 && (
        <ul className="mt-4 h-20  w-max self-center">
          {intencityOptions.map((option) => (
            <li
              key={option.name}
              className="flex items-center gap-1 capitalize"
            >
              <input
                id={option.name}
                type="radio"
                value={option.value}
                checked={intencity.name === option.name}
                name="intencity"
                data-testid={option.name + 'Input'}
                onChange={() => setIntencity(option)}
                className="cursor-pointer "
              />
              <legend htmlFor={option.name}>
                {option.name}: {option.porsentage}%
              </legend>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
