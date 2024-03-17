const FRAMES_PER_SECOND = 25

export const formatTime = (timeMs: number) => {
  const timeSeconds = timeMs / 1000
  const hours = Math.floor(timeSeconds / 3600)
  const minutes = Math.floor((timeSeconds % 3600) / 60)
  const seconds = Math.floor(timeSeconds % 60)
  const frames = Math.floor((timeSeconds % 1) * FRAMES_PER_SECOND)
  return `${hours}:${minutes}:${seconds}:${frames}`
}