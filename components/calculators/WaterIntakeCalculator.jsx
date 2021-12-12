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
      <div className="flex flex-col sm:flex-row gap-2   sm:justify-center items-center w-full max-w-md  border py-6 shadow-md">
        <div className="flex items-center justify-center max-w-min ">
          <label
            htmlFor="totalKcals"
            className="text-lg  text-green-700 font-semibold  ml-2 w-24 sm:w-20"
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
            className="p-2 my-1 w-20 border border-gray-200 focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 appearance-none text-center outline-none font-light  text-xl text-gray-700 placeholder-end placeh"
          />
        </div>
        <div className="flex  items-center justify-center sm:ml-0 max-w-min gap-2 ">
          <label
            htmlFor="workoutTime"
            className="text-lg  text-center  text-green-700 font-semibold w-24 "
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
            className=" p-2 my-1 w-20  border border-gray-200 focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 appearance-none text-center outline-none  text-xl font-light text-gray-700 placeholder-end"
          />
        </div>
      </div>
    </article>
  )
}
