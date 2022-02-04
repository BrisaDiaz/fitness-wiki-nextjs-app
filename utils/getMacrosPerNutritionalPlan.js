import MACROS_PER_DIET from '../constants/macrosPerDiet'
import constants from '../constants/calculatorConstants'
import { Plan } from './factories'

function validateArguments(goalKcals, plan, planType) {
  const supportedPlanTypes = ['predefined', 'custom']

  if (!goalKcals || !plan || !planType)
    throw new Error(
      `1:Target calories, 2:plan and 3:type of plan are required, instead was send 1:${goalKcals}, 2:${plan}, 3:${planType}`
    )

  if (supportedPlanTypes.indexOf(planType) === -1)
    throw new Error(
      `"${planType}" is not a type of plan supported is must be eitheir "predefined" or "custom" `
    )
  if (planType === 'predefined' && !MACROS_PER_DIET[plan])
    throw new Error(`${plan} isn't between the nutritional plans supported`)
}
// class Plan {
//   constructor(name, macros, goalKcals) {
//     this.goalKcals = goalKcals
//     this.name = name
//     this.macros = macros
//   }

//   getProteins() {
//     const kals = Math.floor(
//       this.goalKcals * (this.macros.proteins.value / 100)
//     )
//     const grams = Math.floor(kals / 4)
//     return {
//       name: 'proteins',
//       percentage: this.macros.proteins.value,
//       kals,
//       grams
//     }
//   }
//   getCarbohydrates() {
//     const kals = Math.floor(this.goalKcals * (this.macros.carbs.value / 100))
//     const grams = Math.floor(kals / 4)
//     return {
//       name: 'carbs',
//       percentage: this.macros.carbs.value,
//       kals,
//       grams
//     }
//   }
//   getFats() {
//     const kals = Math.floor(this.goalKcals * (this.macros.fats.value / 100))
//     const grams = Math.floor(kals / 9)
//     return {
//       name: 'fats',
//       percentage: this.macros.fats.value,
//       kals,
//       grams
//     }
//   }
//   getMacros() {
//     const macros = [this.getCarbohydrates(), this.getProteins(), this.getFats()]
//     return macros
//   }
//   getTotalGrams() {
//     const totalGrams = this.getMacros().reduce((acumGrams, macro) => {
//       acumGrams += macro.grams

//       return acumGrams
//     }, 0)

//     return totalGrams
//   }

//   getPlanInfo() {
//     return {
//       planName: this.name,
//       totalKcals: this.goalKcals,
//       totalGrams: this.getTotalGrams(),
//       macros: this.getMacros()
//     }
//   }
// }

export default function getMacrosPerNutritionalPlan(goalKcals, plan, planType) {
  validateArguments(goalKcals, plan, planType)

  const customPlanValues = plan.macros ? plan : constants.DEFAULT_MACROS_RADIOS
  let planSelected

  planType === 'predefined'
    ? (planSelected = new Plan(
        MACROS_PER_DIET[plan].name,
        MACROS_PER_DIET[plan].macros,
        goalKcals
      ))
    : (planSelected = new Plan(
        customPlanValues.name,
        customPlanValues.macros,
        goalKcals
      ))

  return planSelected
}
