import MacroRadiosForm from './MacroRadiosForm'
import CalculatorModeSwitch from './CalculatorModeSwitch'
import PlanSelectorField from './PlanSelectorField'
import consts from '../../consts/calculatorConstants'

export default function MacroRadiosPicker({
  planType,
  planResults,
  setPlanType,
  setNutritionalPlan,
  setCustomPlan,
  setErrors,
  errors
}) {
  return (
    <div className="max-w-md mx-auto">
      <CalculatorModeSwitch
        options={consts.PLAN_TYPES}
        optionSelected={planType}
        setOption={setPlanType}
      />

      {planType === 'predifined' ? (
        <PlanSelectorField
          plans={consts.NUTRITIONAL_PLANS}
          planResults={planResults}
          setNutritionalPlan={setNutritionalPlan}
        />
      ) : (
        <MacroRadiosForm
          setCustomPlan={setCustomPlan}
          setErrors={setErrors}
          errors={errors}
        />
      )}
    </div>
  )
}
