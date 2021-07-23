const mifflinEquation = (data) => {
  const { system, genre, weight, height, age } = data
  let genreVariable
  let basalMetabolicRate
  genre === 'man' ? (genreVariable = 5) : (genreVariable = -161)

  if (system === 'metric') {
    basalMetabolicRate = 10 * weight + 6.25 * height - 5 * age + genreVariable
  } else {
    basalMetabolicRate =
      4.536 * weight + 15.88 * height - 5 * age + genreVariable
  }

  return basalMetabolicRate
}
const harrisEquation = (data) => {
  const { system, genre, weight, height, age } = data

  let basalMetabolicRate

  if (genre === 'man' && system === 'metric') {
    basalMetabolicRate = 66.47 + 13.75 * weight + 5.003 * height - 6.755 * age
  }
  if (genre === 'woman' && system === 'metric') {
    basalMetabolicRate = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age
  }
  if (genre === 'man') {
    basalMetabolicRate = 66.47 + 6.24 * weight + 12.5 * height - 6.755 * age
  }
  if (genre === 'woman') {
    basalMetabolicRate = 655.1 + 4.35 * weight + 4.7 * height - 4.7 * age
  }
  return basalMetabolicRate
}

export default function getDailyKcals(data) {
  const { equation, activityLevel } = data

  let basalMetabolicRate

  equation === 'mifflin'
    ? (basalMetabolicRate = mifflinEquation(data))
    : (basalMetabolicRate = harrisEquation(data))

  return Math.floor(basalMetabolicRate * activityLevel)
}
