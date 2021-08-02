import { useState, useEffect } from 'react'
import getAdvice from '../../utils/getAdvicePerCaloriesAmmount'
export default function MacrosCalcResults({
  errors,
  planResults,
  defaultCalories
}) {
  const [adivice, setAdivice] = useState('recommended')
  useEffect(() => {
    setAdivice(getAdvice(defaultCalories, planResults.totalKcals))
  }, [planResults, defaultCalories])

  return (
    <>
      {errors.length > 0 ? (
        errors.map((error) => (
          <h2
            key={error}
            className="m-4 text-center text-red-500 text-lg font-semibold"
          >
            {error}
          </h2>
        ))
      ) : (
        <div className="my-4 mt-10  flex flex-col sm:flex-row flex-wrap gap-2 gap-y-6 w-full justify-evenly  ">
          {planResults?.macros?.map((macro) => (
            <div
              key={macro.name}
              className={'flex flex-col justify-center text-center text-xl capitalize '.concat(
                macro.name === 'fats' && 'sm:-mt-5'
              )}
            >
              <div
                className={'mx-auto w-11 flex items-center transform opacity-90 '.concat(
                  macro.name === 'fats'
                    ? ' scale-90 '
                    : macro.name === 'proteins'
                    ? ' scale-125 '
                    : ''
                )}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon={
                    macro.name === 'proteins'
                      ? 'fish'
                      : macro.name === 'fats'
                      ? 'egg'
                      : 'bread-slice'
                  }
                  className={
                    macro.name === 'proteins'
                      ? 'svg-inline--fa fa-fish fa-w-18'
                      : macro.name === 'fats'
                      ? 'svg-inline--fa fa-egg fa-w-12'
                      : 'svg-inline--fa fa-bread-slice fa-w-18'
                  }
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={
                    macro.name === 'fats' ? '0 0 384 512' : '0 0 576 512'
                  }
                >
                  <title>{macro.name}Svg</title>
                  <path
                    fill={
                      macro.persentage >= 50
                        ? '#10b981'
                        : macro.persentage >= 20
                        ? '#fbbf24'
                        : '#ef4444'
                    }
                    d={
                      macro.name === 'proteins'
                        ? 'M327.1 96c-89.97 0-168.54 54.77-212.27 101.63L27.5 131.58c-12.13-9.18-30.24.6-27.14 14.66L24.54 256 .35 365.77c-3.1 14.06 15.01 23.83 27.14 14.66l87.33-66.05C158.55 361.23 237.13 416 327.1 416 464.56 416 576 288 576 256S464.56 96 327.1 96zm87.43 184c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24 13.26 0 24 10.74 24 24 0 13.25-10.75 24-24 24z'
                        : macro.name === 'fats'
                        ? 'M192 0C86 0 0 214 0 320s86 192 192 192 192-86 192-192S298 0 192 0z'
                        : 'M288 0C108 0 0 93.4 0 169.14 0 199.44 24.24 224 64 224v256c0 17.67 16.12 32 36 32h376c19.88 0 36-14.33 36-32V224c39.76 0 64-24.56 64-54.86C576 93.4 468 0 288 0z'
                    }
                  ></path>
                </svg>
              </div>
              <h4
                className={'text-2xl font-bold border-b-4 mb-1 max-w-min self-center pb-1 my-1 '.concat(
                  macro.persentage >= 50
                    ? 'text-green-500 border-green-500'
                    : macro.persentage >= 20
                    ? 'text-yellow-400 border-yellow-400'
                    : 'text-red-500 border-red-500 '
                )}
              >
                {' '}
                {macro.name}
              </h4>

              <span className="text-5xl font-semibold my-1 text-gray-700  ">
                {macro.grams}{' '}
              </span>
              <p className="font-light"> Grams Per Day</p>
            </div>
          ))}
          <div
            className="flex flex-col justify-center text-xl text-center capitalize sm:-mt-3"
            data-testid="totalKcals"
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
                <title>KcalsSvg</title>
                <path
                  fill={
                    adivice === 'recommended'
                      ? '#10b981'
                      : adivice === 'not recommended'
                      ? '#ef4444'
                      : '#fbbf24'
                  }
                  d="M350.85 129c25.97 4.67 47.27 18.67 63.92 42 14.65 20.67 24.64 46.67 29.96 78 4.67 28.67 4.32 57.33-1 86-7.99 47.33-23.97 87-47.94 119-28.64 38.67-64.59 58-107.87 58-10.66 0-22.3-3.33-34.96-10-8.66-5.33-18.31-8-28.97-8s-20.3 2.67-28.97 8c-12.66 6.67-24.3 10-34.96 10-43.28 0-79.23-19.33-107.87-58-23.97-32-39.95-71.67-47.94-119-5.32-28.67-5.67-57.33-1-86 5.32-31.33 15.31-57.33 29.96-78 16.65-23.33 37.95-37.33 63.92-42 15.98-2.67 37.95-.33 65.92 7 23.97 6.67 44.28 14.67 60.93 24 16.65-9.33 36.96-17.33 60.93-24 27.98-7.33 49.96-9.67 65.94-7zm-54.94-41c-9.32 8.67-21.65 15-36.96 19-10.66 3.33-22.3 5-34.96 5l-14.98-1c-1.33-9.33-1.33-20 0-32 2.67-24 10.32-42.33 22.97-55 9.32-8.67 21.65-15 36.96-19 10.66-3.33 22.3-5 34.96-5l14.98 1 1 15c0 12.67-1.67 24.33-4.99 35-3.99 15.33-10.31 27.67-18.98 37z"
                ></path>
              </svg>
            </div>
            <h4
              className={'text-2xl font-bold border-b-4 mb-1 max-w-min self-center pb-1 my-1 '.concat(
                adivice === 'recommended'
                  ? 'text-green-500 border-green-500'
                  : adivice === 'not recommended'
                  ? 'text-red-500 border-red-500 '
                  : 'text-yellow-300 border-yellow-300'
              )}
            >
              Kcals
            </h4>
            <span className="text-5xl font-semibold my-1 text-gray-700  ">
              {planResults?.totalKcals}
            </span>
            <p className="font-light"> Kcals Per Day</p>
          </div>
        </div>
      )}
    </>
  )
}
