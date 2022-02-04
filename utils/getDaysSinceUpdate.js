export default function getDaysSinceUpdate(updatedDate) {
  const updatedDaysInMilliseconds = new Date(updatedDate).getTime()
  const currentDate = Date.now()
  const days = (currentDate - updatedDaysInMilliseconds) / (1000 * 60 * 60 * 24)

  return Math.floor(days)
}
