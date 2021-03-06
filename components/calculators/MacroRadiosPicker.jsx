import MacroRadiosForm from './MacroRadiosForm'
import CalculatorModeSwitch from './CalculatorModeSwitch'
import PlanSelectorField from './PlanSelectorField'
import constants from '../../constants/calculatorConstants'

export default function MacroRadiosPicker({
  planType,
  planResults,
  setPlanType,
  setNutritionalPlan,
  setCustomPlan,
  setError,
  cleanError
}) {
  return (
    <div className="max-w-md mx-auto">
      <CalculatorModeSwitch
        options={constants.PLAN_TYPES}
        optionSelected={planType}
        setOption={setPlanType}
      />

      {planType === 'predefined' ? (
        <PlanSelectorField
          plans={constants.NUTRITIONAL_PLANS}
          planResults={planResults}
          setNutritionalPlan={setNutritionalPlan}
        />
      ) : (
        <MacroRadiosForm
          setCustomPlan={setCustomPlan}
          setError={setError}
          cleanError={cleanError}
        />
      )}
    </div>
  )
}
