export default function getWaterIntake(system, weight, workoutTime = 0) {
  let weightInPounds
  system === 'imperial'
    ? (weightInPounds = weight)
    : (weightInPounds = weight * 2.205)

  const waterIntake = weightInPounds * (2 / 3)
  const waterIntakeMinusFoodWater = waterIntake * 0.8
  const waterIntakePlusWaterPerWorkout =
    waterIntakeMinusFoodWater + 8 * (workoutTime / 15)

  const waterConvertions = {
    onces: Math.ceil(waterIntakePlusWaterPerWorkout),
    liters: (waterIntakePlusWaterPerWorkout / 33.814).toFixed(1),
    cups: Math.ceil(waterIntakePlusWaterPerWorkout / 8)
  }
  return waterConvertions
}
