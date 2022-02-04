export class Macro {
  constructor(totalCalories, name, percentage) {
    this.name = name
    this.percentage = percentage
    this.caloriesPerGram = name === 'proteins' || name === 'carbs' ? 4 : 9
    this.kals = Math.floor(totalCalories * (this.percentage / 100))
    this.grams = Math.floor(this.kals / this.caloriesPerGram)
  }
}
export class Plan {
  constructor(name, radios, totalKcals) {
    this.totalKcals = Math.floor(totalKcals)
    this.planName = name
    this.macros = [
      new Macro(totalKcals, 'proteins', radios.proteins.value),
      new Macro(totalKcals, 'carbs', radios.carbs.value),
      new Macro(totalKcals, 'fats', radios.fats.value)
    ]
    this.totalGrams = this.macros.reduce(
      (grams, macro) => (grams += macro.grams),
      0
    )
  }
}
export class Meal {
  constructor(kcals, radios) {
    this.totalkcals = Math.floor(kcals)
    this.proteins = new Macro(kcals, 'proteins', radios.proteins.value)
    this.carbs = new Macro(kcals, 'carbs', radios.carbs.value)
    this.fats = new Macro(kcals, 'fats', radios.fats.value)
    this.totalGrams = this.proteins.grams + this.carbs.grams + this.fats.grams
  }

  getMealInfo() {
    return {
      Totalkcals: Math.floor(this.kcals),
      totalGrams: this.getTotalGrams(),
      proteins: this.getProteins(),
      carbs: this.getCarbohydrates(),
      fats: this.getFats()
    }
  }
}
