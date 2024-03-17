export const formatTime = (time: number /* startingTime: number */) => {
  // const diff = time - startingTime;
  const diff = time
  const hourDiff = diff / 1000 / 60 / 60
  const hours = Math.floor(hourDiff)
  const minuteDiff = (hourDiff - hours) * 60
  const minutes = Math.floor(minuteDiff)
  const secondDiff = (minuteDiff - minutes) * 60
  const seconds = Math.floor(secondDiff)
  const displayHours = hours % 24
  // time in 10ths of a second
  const subseconds = Math.floor((secondDiff - seconds) * 100)
  return `${displayHours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${subseconds
    .toString()
    .padStart(2, '0')}`
}
