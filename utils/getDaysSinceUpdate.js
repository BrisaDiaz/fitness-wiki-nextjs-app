export default function getDaysSinceUpdate(updatedDate) {
  const udatedDaysInMiliseconst = new Date(updatedDate).getTime()
  const currentDate = Date.now()
  const days = (currentDate - udatedDaysInMiliseconst) / (1000 * 60 * 60 * 24)

  return Math.floor(days)
}
