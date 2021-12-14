import useWaterIntakeCalculator from '../../hooks/useWaterIntakeCalculator'
import CalculatorModeSwitch from './CalculatorModeSwitch'
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
    <article className="max-w-md mx-auto mt-6 mb-8">
      <CalculatorModeSwitch
        options={METRIC_SYSTEMS}
        optionSelected={metricSystem}
        setOption={setMetricSystem}
      />
      <div className="flex flex-col sm:flex-row gap-4   sm:justify-center items-center w-full max-w-md  border py-6 shadow-md bg-white ">
        <div className="flex items-center justify-center max-w-min gap-1">
          <label
            htmlFor="totalKcals"
            className="text-lg  text-green-700 font-semibold  w-20 sm:w-auto mr-2"
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
            className="p-2 my-1 w-16 border border-gray-200 focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 appearance-none text-center outline-none text-gray-600  text-xl font-light placeholder-end placeh"
          />
          <p className="text-lg ml-1 text-gray-600">
            {metricSystem === 'metric' ? 'kg' : 'lbs'}
          </p>
        </div>
        <div className="flex  items-center justify-center sm:ml-0 max-w-min gap-1 ">
          <label
            htmlFor="workoutTime"
            className="text-lg  text-center  text-green-700 font-semibold w-24 sm:w-auto "
          >
            Workout:
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
            className=" p-2 my-1 w-16  border border-gray-200 focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 appearance-none text-center outline-none  text-xl text-gray-600 font-light placeholder-end"
          />
          <p className="text-lg ml-1 text-gray-600">min</p>
        </div>
      </div>
    </article>
  )
}
