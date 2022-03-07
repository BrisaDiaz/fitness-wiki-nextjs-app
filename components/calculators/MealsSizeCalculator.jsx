import useMealsSizeCalculator from '../../hooks/useMealsSizeCalculator'
import MacroRadiosForm from './MacroRadiosForm'
import DataTable from './DataTable'
import WaterIntakeCalculator from './WaterIntakeCalculator'
export default function MealSizeCalculator({ children }) {
  const {
    setMacrosRadios,
    setError,
    setTotalKcals,
    cleanError,
    setMealFrequency,
    setWaterIntake,
    tableData,
    fiberResults,
    waterIntake,
    mealFrequency,
    errors,
    MEALS_FREQUENCIES
  } = useMealsSizeCalculator()

  return (
    <div className="flex flex-col flex-wrap gap-x-4  justify-center items-center ">
      <section className="calculator-field-container ">
        <h2 className="calculator-field-title ">Set calories per day</h2>
        <div className="flex flex-col sm:flex-row gap-2 items-center mb-6 max-w-md mx-auto">
          <div className="flex  gap-x-2 items-center">
            <label
              htmlFor="totalKcals"
              className="text-lg text-green-700 font-semibold "
            >
              Calories:
            </label>
            <input
              name="kcals"
              type="number"
              min="1200"
              id="totalKcals"
              defaultValue="2000"
              onChange={(e) => setTotalKcals(e.target.value)}
              className=" p-2 md:pr-0  my-1 w-24 px-4 border border-gray-200 focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 appearance-none text-center outline-none font-semibold  text-lg text-gray-600 rounded"
            />
          </div>
          <p className="px-1 text-sm text-gray-600">
            The amount of calories you will be eating per day must be equal or
            greater than 1200.
          </p>
        </div>
        <h2 className="calculator-field-title ">
          Set your weight and daily workout minutes
        </h2>

        <WaterIntakeCalculator setWaterIntake={setWaterIntake} />
        <h2 className="calculator-field-title ">
          Select your preferred meal frequency
        </h2>

        <ul className="px-6 mb-6 ">
          {MEALS_FREQUENCIES.map((frequency) => (
            <li
              key={frequency.value}
              className="flex gap-2 items-center mb-1 cursor-pointer list-legend "
            >
              <input
                className=" custom-radio-input"
                id={frequency.value}
                name="mealFracuency"
                value={frequency.value}
                checked={mealFrequency === frequency.value}
                type="radio"
                onChange={(e) => setMealFrequency(e.target.value)}
                aria-labelledby={frequency.info}
              />
              <label htmlFor={frequency.value} className="cursor-pointer">
                {frequency.info}.
              </label>
            </li>
          ))}
        </ul>
        <h2 className="calculator-field-title ">
          Set your macros percentage ratios
        </h2>
        <div className="max-w-md mx-auto mb-6">
          <MacroRadiosForm
            setCustomPlan={setMacrosRadios}
            setError={setError}
            cleanError={cleanError}
          />
        </div>
      </section>
      <section className="calculator-field-container">
        <h2
          className={
            errors.length > 0
              ? 'text-lg text-white sm:text-2xl font-semibold  p-2 text-center shadow  mb-6 bg-red-400'
              : 'calculator-field-title text-white'
          }
        >
          {errors.length > 0 ? 'Error' : `Your results`}
        </h2>
        {errors.length > 0 ? (
          errors.map((error) => (
            <h3
              key={error}
              className="m-4 text-center text-red-500 text-lg font-semibold"
            >
              {error}
            </h3>
          ))
        ) : (
          <>
            <DataTable tableData={tableData} />

            <h2 className="calculator-field-title mt-2">
              Aditional recomendations
            </h2>
            <section className=" flex flex-col sm:flex-row flex-wrap gap-8 justify-center mx-auto py-6 ">
              <span className="font-semibold text-3xl sm:text-2xl text-gray-600 text-center">
                {' '}
                <div
                  className="flex flex-col justify-center text-lg text-center capitalize "
                  data-testid="totalFiber"
                >
                  <div className="mx-auto w-11 flex items-center transform ">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="apple-alt"
                      className="svg-inline--fa fa-apple-alt fa-w-14"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="#15803d"
                        d="M350.85 129c25.97 4.67 47.27 18.67 63.92 42 14.65 20.67 24.64 46.67 29.96 78 4.67 28.67 4.32 57.33-1 86-7.99 47.33-23.97 87-47.94 119-28.64 38.67-64.59 58-107.87 58-10.66 0-22.3-3.33-34.96-10-8.66-5.33-18.31-8-28.97-8s-20.3 2.67-28.97 8c-12.66 6.67-24.3 10-34.96 10-43.28 0-79.23-19.33-107.87-58-23.97-32-39.95-71.67-47.94-119-5.32-28.67-5.67-57.33-1-86 5.32-31.33 15.31-57.33 29.96-78 16.65-23.33 37.95-37.33 63.92-42 15.98-2.67 37.95-.33 65.92 7 23.97 6.67 44.28 14.67 60.93 24 16.65-9.33 36.96-17.33 60.93-24 27.98-7.33 49.96-9.67 65.94-7zm-54.94-41c-9.32 8.67-21.65 15-36.96 19-10.66 3.33-22.3 5-34.96 5l-14.98-1c-1.33-9.33-1.33-20 0-32 2.67-24 10.32-42.33 22.97-55 9.32-8.67 21.65-15 36.96-19 10.66-3.33 22.3-5 34.96-5l14.98 1 1 15c0 12.67-1.67 24.33-4.99 35-3.99 15.33-10.31 27.67-18.98 37z"
                      ></path>
                    </svg>
                  </div>
                  <h4
                    className={
                      'text-2xl font-bold border-b-4 mb-1 max-w-min self-center pb-1 my-1 border-green-700  text-green-700'
                    }
                  >
                    Fiber
                  </h4>
                  <span className="text-5xl font-semibold my-1 text-gray-700  ">
                    {fiberResults}
                  </span>
                  <p className="font-light"> Grams Per Day</p>
                </div>
              </span>
              <span className="font-semibold text-3xl sm:text-2xl text-gray-600 text-center">
                {' '}
                <div
                  className="flex flex-col justify-center text-lg text-center capitalize sm:-mt-3.5"
                  data-testid="totalWater"
                >
                  <div className="mx-auto w-11 flex items-center transform ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tint"
                      className="svg-inline--fa fa-tint fa-w-11"
                      role="img"
                      viewBox="0 0 352 512"
                    >
                      <path
                        fill="#3b82f6"
                        d="M205.22 22.09c-7.94-28.78-49.44-30.12-58.44 0C100.01 179.85 0 222.72 0 333.91 0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82zM176 448c-61.75 0-112-50.25-112-112 0-8.84 7.16-16 16-16s16 7.16 16 16c0 44.11 35.89 80 80 80 8.84 0 16 7.16 16 16s-7.16 16-16 16z"
                      />
                    </svg>
                  </div>
                  <h4
                    className={
                      'text-2xl font-bold border-b-4 mb-1 max-w-min self-center pb-1 my-1 text-blue-500 border-blue-500'
                    }
                  >
                    Water
                  </h4>
                  <span className="text-5xl font-semibold my-1 text-gray-700  ">
                    {waterIntake?.cups}
                  </span>
                  <p className="font-light"> Cups Per Day</p>
                </div>
              </span>
            </section>
            <div className="pl-2 pb-6 pt-2 grid gap-2 text-sm ">
              <p>
                <span className="text-green-800 font-semibold">
                  Fiber intake:{' '}
                </span>
                The Academy of Nutrition and Dietetics recommends consuming
                about 25-35 grams of total fiber per day, with 10-15 grams from
                soluble fiber or 14g of fiber per 1,000 calories.
              </p>

              <p>
                <span className="text-green-800 font-semibold">
                  Water intake:{' '}
                </span>
                Water makes up an estimated 60% of your body weight. It is a
                critical chemical component that your body depends on to
                survive. In addition you should add 12 ounces of water to your
                daily total for every 30 minutes that you work out.{' '}
              </p>
            </div>
          </>
        )}
      </section>

      {children}
    </div>
  )
}
