import useWaterIntakeCalculator from '../../hooks/useWaterIntakeCalculator'
export default function WaterIntakeCalculator({ setWaterIntake }) {
  const {
    setMetricSystem,
    setWeight,
    setWorkoutMinutes,
    weight,
    metricSystem,
    METRIC_SYSTEMS
  } = useWaterIntakeCalculator({ setWaterIntake })

  return (
    <article className="flex flex-col sm:flex-row gap-2  mt-6 mb-8 sm:justify-center sm:items-center">
      <div className="flex gap-2 items-center justify-center max-w-min ">
        <label
          htmlFor="totalKcals"
          className="text-xl text-green-500 font-semibold px-2 w-24"
        >
          Weight:
        </label>
        <input
          name="weight"
          type="number"
          min="0"
          id="weight"
          defaultValue={weight}
          placeholder={metricSystem === 'metric' ? 'kg' : 'lbs'}
          step={metricSystem === 'metric' ? '1' : 'any'}
          onChange={(e) => setWeight(e.target.value)}
          className="p-2 my-1 w-20 border border-gray-200 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 appearance-none text-center outline-none font-light  text-xl text-gray-700 placeholder-end placeh"
        />
        <ul className="px-2 mt-1">
          {METRIC_SYSTEMS.map((system) => (
            <li
              key={system.value}
              className="flex gap-2 items-center mb-1 cursor-pointer text-gray-600"
            >
              <input
                className=" custom-radio-input"
                name="system"
                id={system.value}
                checked={metricSystem === system.value}
                type="radio"
                onChange={() => setMetricSystem(system.value)}
              />
              <label htmlFor={system.value} className="cursor-pointer">
                {system.info}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex  items-center justify-center -ml-20 sm:ml-0 max-w-min gap-2 ">
        <label
          htmlFor="workoutTime"
          className="text-xl text-center  text-green-500 font-semibold w-24 "
        >
          Workout duration:
        </label>

        <input
          name="kcals"
          type="number"
          step="1"
          id="workoutTime"
          min="0"
          defaultValue={0}
          placeholder="min"
          onChange={(e) => setWorkoutMinutes(e.target.value)}
          className="p-2 my-1 w-20  border border-gray-200 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 appearance-none text-center outline-none  text-xl font-light text-gray-700 placeholder-end"
        />
      </div>
    </article>
  )
}
