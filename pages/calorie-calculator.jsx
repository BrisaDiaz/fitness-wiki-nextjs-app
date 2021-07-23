import Calculator from '@/components/Calculator'
export default function calorieCalculator() {
  return (
    <section className="py-16 sm:pt-10 px-1 gap-x-2 mx-auto max-w-7xl">
      <h1 className="text-3xl  text-green-700 text-center font-bold mb-16 lg:text-4xl">
        Calculate your target daily calorie needs
      </h1>
      <section className="w-full flex flex-wrap gap-2">
        <Calculator />
        <article className="w-full px-1 sm:px-2 max-w-3xl leading-1 mt-8 mx-auto flex-1 ">
          <h2 className="text-3xl  text-green-500 font-semibold mb-5 ">
            {' '}
            How many calories should you eat on average?{' '}
          </h2>
          <p>
            The answer to this question depends on numerous factors, including
            your age, height, current weight, activity level, and metabolic
            health, among several others.
          </p>
          <br />
          <h3 className="text-2xl  text-green-500 font-semibold my-2">Women</h3>
          <p>
            The average, moderately active woman between the ages of 26–50 needs
            to eat about 2,000 calories per day to maintain her weight and 1,500
            calories per day to lose 1 pound (0.45 kg) of weight per week.{' '}
          </p>
          <br />
          <p>
            Women who are active and walk more than 3 miles per day will need to
            consume 2,200 calories or more daily to maintain their weight and at
            least 1,700 calories to lose 1 pound (0.45 kg) of weight per week.
          </p>
          <br />
          <p>
            Young women in their early 20s have higher calorie needs. They
            require about 2,200 calories per day to maintain their weight. Women
            over age 50 generally require fewer calories.
          </p>
          <br />
          <p>
            The average moderately active woman over 50 needs about 1,800
            calories per day to maintain her weight and 1,300 calories per day
            to lose 1 pound (0.45 kg) per week. These estimates do not apply to
            women who are pregnant or breastfeeding, as they have significantly
            higher calorie needs.
          </p>
          <br />
          <h3 className="text-2xl  text-green-500 font-semibold my-2">Men</h3>
          <p>
            The average, moderately active man between the ages of 26–45 needs
            2,600 calories per day to maintain his weight and 2,100 calories per
            day to lose 1 (0.45 kg) pound per week.{' '}
          </p>
          <p>
            Active men who walk more than 3 miles per day may require
            2,800–3,000 calories per day to maintain their weight and
            2,300–2,500 calories per day to lose 1 pound (0.45 kg) of weight per
            week.{' '}
          </p>{' '}
          <br />
          <p>
            Young men ages 19–25 have higher energy needs. They require an
            average of 2,800 calories per day to maintain their weight and up to
            3,000 if they’re active. To lose 1 pound (0.45 kg) per week,
            moderately active young men should consume 2,300–2,500 calories
            daily.
          </p>
          <br />
          <p>
            Energy needs decrease as men age. Between the ages of 46–65,
            moderately active men need an average of 2,400 calories per day.
            After 66 years, the average man’s calorie needs decrease to about
            2,200 calories per day.
          </p>{' '}
          <br />
          <h3 className="text-2xl  text-green-500 font-semibold my-2">
            Children
          </h3>
          <p>
            Children have widely varying calorie needs based on their age, size,
            and activity level. Whereas the average toddler requires 1,200–1,400
            calories per day, the average moderately active teenager requires
            2,000–2,800 calories per day. Active teenage boys require even more.
          </p>
          <br />
          <p>
            Children who are growing and developing normally and engage in
            regular physical activity usually don’t need to count calories. When
            they’re provided with a range of healthy options to eat, most
            moderately active kids naturally eat the amount of food their body
            requires.
          </p>
        </article>
      </section>
    </section>
  )
}
