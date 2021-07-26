import MacrosCalculator from '@/components/MacrosCalculator'

export default function MacrosCalculatorPage() {
  return (
    <div className="pt-16  sm:pt-10 px-1 gap-x-2 mx-auto max-w-7xl overflow-y-hidden">
      <h1 className="text-3xl  text-green-700 text-center font-bold mb-16 lg:text-4xl">
        Calculate your ideal macronutriens intake
      </h1>
      <MacrosCalculator />
    </div>
  )
}
